
import { Emitter } from 'atom';
import { TopScopeIdentifier } from './topScopeIdentifier';
import { EmptyIdentifier } from './emptyIdentifier';

export class IdentifiersProvider {
    /**
     * Holds TextEditor instance this provider provides Identifiers for.
     * @type {TextEditor}
     *
     * @private
     */
    _textEditor = null;

    /**
     * Holds TopScopeIdentifier for TextEditor this provider provides for.
     * @type {TopScopeIdentifier}
     */
    _topScopeIdentifier = null;

    /**
     * Holds Emitter instance used by this InstanceProvider.
     * @type {Emitter}
     */
    _emitter = new Emitter();

    /**
     * Creates new IdentifierProvider for given TextEditor.
     * @param {TextEditor} textEditor
     */
    constructor( textEditor ) {
        if( !textEditor ) {
            throw new Error('textEditor argument must be valid instance of atom TextEditor!');
        }

        this._textEditor = textEditor;
        this._topScopeIdentifier = new TopScopeIdentifier( this._textEditor );
    }

    /**
     * Makes the Provider generate Identifiers for the TextEditor.
     *
     * @emits did-generate-identifiers
     *
     * @abstract
     * You want to override this function when creating custom IdentifiersProvider.
     * Perform parsing and populate the TopScopeIdentifier with Identifiers.
     */
    generateIdentifiers() {

    }

    /**
     * Returns TopScopeIdentifier with all Identifiers found in TextEditor's code.
     *
     * @return {TopScopeIdentifier} A TopScopeIdentifier for TextEditor.
     */
    getTopScopeIdentifier() {
        return this._topScopeIdentifier;
    }

    /**
     * Returns an array of all Identifiers of given `identifier` which
     * can have children (eg. classes, namespaces, enums etc.), with
     * TopScopeIdentifier at the top. TopScopeIdentifier must always
     * be present in the array, even if Provider is not able to provide
     * any other Identifiers.
     *
     * @param  {Identifier} [identifier] The parent Identifier we're getting children of. TopScopeIdentifier is default.
     * @return {Array<Identifier>} An array with all parent Identifiers with TopScopeIdentifier on top.
     * @abstract
     * You want to override this function when creating custom IdentifiersProvider.
     * Return Identifiers which belongs to the left dropdown box of NavigationBar - all the parents.
     */
    getIdentifiersForParentsDropbox( identifier ) { // eslint-disable-line no-unused-vars
        return [ this._topScopeIdentifier ];
    }

    /**
     * Returns an array of all children (eg. variables, properties, methods etc.)
     * of the given parent `identifier`, with {@link EmptyIdentifier} at the top.
     * {@link EmptyIdentifier} must always be present in the array even if `identifier`
     * itself have no other children.
     *
     * @param  {Identifier} [identifier] The parent Identifier we're getting children of. TopScopeIdentifier is default.
     * @return {Array<Identifier>}
     * @abstract
     * You want to override this function when creating custom IdentifiersProvider.
     * Return Identifiers which belongs to the right dropdown box of NavigationBar - all the children.
     */
    getIdentifiersForChildrenDropbox( identifier ) {
        if( identifier === null || identifier === undefined ) {
            identifier = this._topScopeIdentifier;
        }

        return [ new EmptyIdentifier(identifier), ...identifier.getChildren() ];
    }

    /**
     * Returns Identifier found on given `position` or TopScopeIdentifier if none is found.
     * @param {Point} position Position on TextEditor.
     * @return {Identifier|TopScopeIdentifier} Identifier on given position or TopScopeIdentifier.
     */
    getIdentifierForPosition( position ) {
        const searchInChildren = (parent) => {
            if( parent.isKind('function') || parent.isKind('method') ) return parent;
            
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

    /**
     * Notifies subscriber that Identifiers were generated.
     *
     * @param  {function(event: object{provider: IdentifiersProvider})} callback Function to invoke when Identifiers were generated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidGenerateIdentifiers( callback ) {
        return this._emitter.on( 'did-generate-identifiers', callback );
    }
}
