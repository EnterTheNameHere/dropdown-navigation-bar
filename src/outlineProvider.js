
import { TextEditor, Point, CompositeDisposable } from 'atom'; // eslint-disable-line import/no-unresolved, no-unused-vars

import { Identifier, EmptyIdentifier } from './identifiers';
import { IdentifiersProvider } from './identifiersProvider';

import { OutlineProvider as IDEOutlineProvider, OutlineTree } from "atom-ide-base";
import { ProviderRegistry as IDEProviderRegistry } from "atom-ide-base/commons-atom/ProviderRegistry";

export const outlineProviderRegistry = new IDEProviderRegistry();

export class OutlineProvider extends IdentifiersProvider {
    /** @override */
    async generateIdentifiers() {
        const provider = outlineProviderRegistry.getProviderForEditor( this._textEditor );
        console.log( 'provider', provider );
        
        this._topScopeIdentifier.removeAllChildren();
        
        if( provider ) {
            this._outline = await provider.getOutline( this._textEditor );
            await this.traverseOutline();
        }
        
        const checkForEmptyKind = ( identifier ) => {
            for( const child of identifier.getChildren() ) {
                checkForEmptyKind( child );
            }
            console.assert( identifier.getKind().length !== 0, 'Identifier has to have at least one kind!' );
        };
        checkForEmptyKind( this._topScopeIdentifier );
        
        console.debug(
            'OutlineProvider finished',
            this._topScopeIdentifier
        );
        
        this._emitter.emit('did-generate-identifiers', { provider: this, identifiers: this._topScopeIdentifier });
    }
    
    /**
     * @override
     */
    getIdentifiersForParentsDropbox( identifier ) {
        if( identifier === null || identifier === undefined ) {
            identifier = this._topScopeIdentifier;
        }
        
        return [
            this._topScopeIdentifier,
            ...identifier.getChildren().filter( (ident) => {
                if( ident.isKind('class')
                    || ident.isKind('enum')
                    || ident.isKind('interface') ) {
                    return true;
                }
                return false;
            })
        ];
    }
    
    /**
     * @override
     */
    getIdentifiersForChildrenDropbox( identifier ) {
        if( identifier === null || identifier === undefined ) {
            identifier = this._topScopeIdentifier;
        }

        if( identifier instanceof EmptyIdentifier ) {
            identifier = identifier.getParent();
        }
        
        if( identifier.isKind('function')
            || identifier.isKind('method')
            || identifier.isKind('constructor')
        ) {
            identifier = identifier.getParent();
        }

        return [
            new EmptyIdentifier( identifier ),
            ...identifier.getChildren().filter( (ident) => {
                if( ident.isKind('property')
                    || ident.isKind('field')
                    || ident.isKind('variable')
                    || ident.isKind('constant')
                    || ident.isKind('string')
                    || ident.isKind('number')
                    || ident.isKind('boolean')
                    || ident.isKind('array')
                    || ident.isKind('function')
                    || ident.isKind('method')
                    || ident.isKind('constructor')
                    || ident.isKind('class')
                    || ident.isKind('enum')
                    || ident.isKind('interface')
                    || ident.isKind('unimplemented')
                    || ident.isKind('unknown')
                ) {
                    return true;
                }
                return false;
            })
        ];
    }
    
    /**
     * @override
     */
    getIdentifierForPosition( position ) {
        const searchInChildren = (parent) => {
            if( parent.isKind('function')
                || parent.isKind('method')
                || parent.isKind('constructor')
            ) return parent;
            
            for( const child of parent.getChildren() ) {
                const startPosition = child.getStartPosition();
                const endPosition = child.getEndPosition();

                if( startPosition && endPosition ) {
                    if( startPosition.isGreaterThan( endPosition ) ) {
                        console.warn('Identifier\'s startPosition is after endPosition!', child );
                    } else {
                        if( position.isGreaterThanOrEqual( startPosition )
                            && position.isLessThanOrEqual( endPosition ) ) {
                            if( child.hasChildren() ) {
                                return searchInChildren( child );
                            }

                            return child;
                        }
                    }
                }
            }

            return parent;
        };

        return searchInChildren( this._topScopeIdentifier );
    }
    
    async traverseOutline() {
        if( !this._outline ) {
            return;
        }
        
        console.log( 'outline', this._outline );
        
        if( this._outline.outlineTrees.length > 1 ) {
            console.warn( 'More outlineTrees than 1 - since we didn\'t encounter such case, it would be great to share the file with us...' );
            console.warn( this._outline );
        }
        
        for( const tree of this._outline.outlineTrees ) {
            this.processTreeNode( tree, this._topScopeIdentifier );
        }
    }
    
    processTreeNode( node, currentIdentifier ) {
        if( !node ) {
            console.error( 'OutlineProvider::processTreeNode node is required parameter!' );
            return;
        }
        if( !currentIdentifier ) {
            console.error( 'OutlineProvider::processTreeNode currentIdentifier is required parameter!' );
            return;
        }
        
        // TODO: implement TokenizedText
        // TODO: implement icon
        
        // If kind is not set, use unknown so it's still displayed as Identifier in case it has children...
        if( !node.kind ) {
            node.kind = 'unknown';
        }
        
        // Some kinds are just groups we don't need to display, only their children which are parents themselves
        if( node.kind === 'file'
            || node.kind === 'module'
            || node.kind === 'namespace'
            || node.kind === 'package'
        ) {
            for( const child of node.children ) {
                this.processTreeNode( child, currentIdentifier );
            }
        }
        // Check if this kind can have children, in that case, add it as a parent Identifier
        else if( node.kind === 'class'
            || node.kind === 'enum'
            || node.kind === 'interface'
        ) {
            const newIdentifier = this.addNewIdentifier( currentIdentifier );
            this.setPositionsFromNode( node, newIdentifier );
            this.setNameFromNode( node, newIdentifier );
            newIdentifier.addKind( node.kind );
            for( const child of node.children ) {
                this.processTreeNode( child, newIdentifier );
            }
        }
        // If we have function/method, we get identifiers like variables or constants inside them too. We don't want
        // to add these, so we'll just add the function/method itself and won't check children
        else if( node.kind === 'function'
            || node.kind === 'method'
            || node.kind === 'constructor'
        ) {
            const newIdentifier = this.addNewIdentifier( currentIdentifier );
            this.setPositionsFromNode( node, newIdentifier );
            this.setNameFromNode( node, newIdentifier );
            newIdentifier.addKind( node.kind );
        }
        // Add rest of kinds as children
        else if( node.kind === 'property'
            || node.kind === 'field'
            || node.kind === 'variable'
            || node.kind === 'constant'
            || node.kind === 'string'
            || node.kind === 'number'
            || node.kind === 'boolean'
            || node.kind === 'array'
            || node.kind === 'unknown'
        ) {
            const newIdentifier = this.addNewIdentifier( currentIdentifier );
            this.setPositionsFromNode( node, newIdentifier );
            this.setNameFromNode( node, newIdentifier );
            newIdentifier.addKind( node.kind );
        }
        // In case we have unexpected kind
        else {
            const newIdentifier = this.addNewIdentifier( currentIdentifier );
            this.setPositionsFromNode( node, newIdentifier );
            this.setNameFromNode( node, newIdentifier );
            newIdentifier.addKind( node.kind );
        }
    }
    
    /**
     * Adds a new Identifier to `parentIdentifier` and returns the newly added Identifier.
     * @param {Identifier} parentIdentifier
     * @return {Identifier} Returns the newly added identifier.
     *
     * @throws {Error} When `parentIdentifier` is not given.
     */
    addNewIdentifier( parentIdentifier ) {
        if( !parentIdentifier ) {
            throw new Error('"parentIdentifier" is required argument.');
        }

        const identifier = new Identifier({ textEditor: this._textEditor, parent: parentIdentifier });
        parentIdentifier.addChild( identifier );
        return identifier;
    }
    
    /**
     * Sets name of `identifier` to one of values provided by OutlineTree, if available.
     * TokenizedText is used first, or if not available then plainText is used as second, or if not available
     * representativeName is used as third option. In case nether of those are set, 'unnamed' is used.
     * @param {OutlineTree} node      Outline tree node
     * @param {Identifier} identifier Identifier which we will assing name to.
     */
    setNameFromNode( node, identifier ) {
        if( node.tokenizedText ) {
            identifier.setName('TokenizedText');
            identifier.addKind('unimplemented');
        } else if( node.plainText ) {
            identifier.setName( node.plainText );
        } else if( node.representativeName ) {
            identifier.setName( node.representativeName );
        } else {
            identifier.setName('unnamed');
        }
    }
    
    /**
     * Sets startPosition of `identifier` to start position from given `node`.
     * @param  {OutlineTree}     node  Outline tree node
     * @param  {Identifier} identifier Identifier which we will assing positions to.
     */
    setStartPositionFromNode( node, identifier ) {
        identifier.setStartPosition( node.startPosition );
    }

    /**
     * Sets endPosition of `identifier` to end position from given `node`.
     * @param  {OutlineTree}     node  Outline tree node
     * @param  {Identifier} identifier Identifier which we will assing positions to.
     */
    setEndPositionFromNode( node, identifier ) {
        if( node.endPosition ) {
            identifier.setEndPosition( node.endPosition );
        } else {
            identifier.setEndPosition( node.startPosition );
        }
    }

    /**
     * Sets `identifier`'s startPosition and endPosition to positions from given `node`.
     * @param  {OutlineTree}     node  Outline tree node
     * @param  {Identifier} identifier Identifier which we will assing positions to.
     */
    setPositionsFromNode( node, identifier ) {
        this.setStartPositionFromNode( node, identifier );
        this.setEndPositionFromNode( node, identifier );
    }
}
