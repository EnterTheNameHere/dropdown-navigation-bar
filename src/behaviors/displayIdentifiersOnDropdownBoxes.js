/* global atom */

import { BehaviorManagerEmitter } from './../behaviorManagerEmitter';
import { Identifier, EmptyIdentifier } from './../identifiers';

import * as etch from 'etch';
/**
 * Shorthand for etch.dom
 */
const $ = etch.dom;

etch.setScheduler(atom.views);

export class DisplayIdentifiersOnDropdownBoxes {
    _behaviorManager = null;
    _active = false;
    _subscriptions = null;
    _emitter = new BehaviorManagerEmitter();

    constructor( behaviorManager ) {
        this._behaviorManager = behaviorManager;
        this._behaviorManager.onDidNavigationBarInitialize( this.initialize.bind(this), this );
    }
    
    hasToRunBefore() {
        return null;
    }
    
    initialize() {
        const view = this._behaviorManager.getNavigationBarView();
        const leftDropdownBox = view.getLeftDropdownBox();
        const rightDropdownBox = view.getRightDropdownBox();
        
        leftDropdownBox.onDidChangeSelected( (event) => {
            const navigationBar = this._behaviorManager.getNavigationBar();
            navigationBar.setSelectedIdentifier( event.item );
            const pos = event.item.getStartPosition();
            if( pos ) {
                event.item.getTextEditor().setCursorBufferPosition( pos );
            }
        });
        
        rightDropdownBox.onDidChangeSelected( (event) => {
            const navigationBar = this._behaviorManager.getNavigationBar();
            navigationBar.setSelectedIdentifier( event.item );
            const pos = event.item instanceof EmptyIdentifier
                ? event.item.getEndPosition()
                : event.item.getStartPosition();
            if( pos ) {
                event.item.getTextEditor().setCursorBufferPosition( pos );
            }
        });
        
        this._behaviorManager.onDidChangeActiveTextEditor( () => {
            this.updateDropdownBoxes();
        }, this );
        this._behaviorManager.onDidChangeSelectedIdentifier( () => {
            this.updateDropdownBoxes();
        }, this );
        this.updateDropdownBoxes();
    }
    
    /**
     * Notifies subscriber that Dropdown Boxes are about to be updated.
     * Useful if you want to change what will Dropdown Boxes show.
     * @param  {function(parentIdentifiers: Array, childrenIdentifiers: Array)} callback to invoke when DropdownBoxes are about to be updated.
     * @param  {object}   behaviorInstance Instance of Behavior the callback belongs to. Required in case order of callbacks matter.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onWillUpdateDropdownBoxes( callback, behaviorInstance ) {
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'will-update-dropdown-boxes', callback, behaviorInstance );
    }
    
    updateDropdownBoxes() {
        const navigationBar = this._behaviorManager.getNavigationBar();
        const view = this._behaviorManager.getNavigationBarView();
        const editor = this._behaviorManager.getActiveTextEditor();
        const provider = this._behaviorManager.getProviderForActiveTextEditor();
        
        let parentIdentifiers = new Array();
        let childrenIdentifiers = new Array();
        let parentSelectedIndex = 0;
        let childrenSelectedIndex = 0;
        
        if( editor && provider ) {
            const selectedIdentifier = navigationBar.getSelectedIdentifier() ?? provider.getTopScopeIdentifier();
            parentIdentifiers = provider.getIdentifiersForParentsDropbox();
            if( selectedIdentifier.hasChildren() ) {
                childrenIdentifiers = provider.getIdentifiersForChildrenDropbox( selectedIdentifier );
            } else {
                childrenIdentifiers = provider.getIdentifiersForChildrenDropbox( selectedIdentifier.getParent() );
            }
            
            // Is selectedIdentifier a parent identifier?
            let index = parentIdentifiers.findIndex( (identifier) => {
                return Identifier.areEqual( identifier, selectedIdentifier );
            });
            
            if( index !== -1 ) {
                // selectedIndex is parent identifier...
                // We can use index as a parent identifier index
                parentSelectedIndex = index;
                childrenSelectedIndex = 0;
            } else {
                // selectedIdentifier is a child...
                // We need to find parent's index
                const parent = selectedIdentifier.getParent();
                if( parent ) {
                    index = parentIdentifiers.findIndex( (identifier) => {
                        return Identifier.areEqual( identifier, parent );
                    });
                    
                    if( index !== -1 ) {
                        parentSelectedIndex = index;
                    } else {
                        // Sh.. The parent of selectedIdentifier is not in parentIdentifiers...
                        parentSelectedIndex = 0;
                        console.error( 'DisplayIdentifiersOnDropdownBoxes::updateDropdownBoxes',
                            'SelectedIdentifier\'s parent is not found in parentIdentifiers array!',
                            'parent:', parent, 'parentIdentifiers:', parentIdentifiers );
                    }
                } else {
                    parentSelectedIndex = 0;
                    console.error( 'DisplayIdentifiersOnDropdownBoxes::updateDropdownBoxes',
                        'Parent of selectedIdentifier is not a valid Identifier!',
                        'selectedIdentifier', selectedIdentifier );
                }
                
                // We need to find child index too...
                index = childrenIdentifiers.findIndex( (identifier) => {
                    return Identifier.areEqual( selectedIdentifier, identifier );
                });
                
                if( index !== -1 ) {
                    // found it
                    childrenSelectedIndex = index;
                } else {
                    // EmptyIdentifier is not part of Identifier's children,
                    // so we need to check is it's not EmptyIdentifier we've added.
                    if( selectedIdentifier instanceof EmptyIdentifier ) {
                        // EmptyIdentifier is top most child
                        childrenSelectedIndex = 0;
                    } else {
                        // Sh... The selectedIdentifier is not in childrenIdentifiers...
                        childrenSelectedIndex = 0;
                        console.error( 'DisplayIdentifiersOnDropdownBoxes::updateDropdownBoxes',
                            'SelectedIdentifier is not found in childrenIdentifiers array!',
                            'selectedIdentifier', selectedIdentifier, 'parentIdentifier', parentIdentifiers );
                    }
                }
            }
        }
            
        const renderItem = ( item ) => {
            if( item instanceof Identifier ) {
                let name = '';
                
                if( item.isKind('multiple') ) {
                    const children = item.getChildren().map( (child) => {
                        const kinds = child.getKind().map( (kind) => `[${kind}]` ).join(' ');
                        const additionals = Array.from( child.getAdditionalDataMap() ).map( (value) => {
                            return `{${value[0]}=${value[1]}}`;
                        }).join(' ');
                        const childName = child.getName();
                        return ( kinds ? `${kinds} ` : '' ) + childName + ( additionals ? ` ${additionals}` : '' );
                    });
                    
                    name = children.join(' ');
                } else {
                    name = item.getName();
                }
                
                if( item.isKind('function') || item.isKind('method') ) {
                    name += '(';
                    const paramsPart = item.getChildren().map( (param) => { return param.getName(); } ).join(', ');
                    name += paramsPart ? ` ${paramsPart} ` : '';
                    name += ')';
                }
                // TODO: get set
                
                const kinds = item.getKind().map( (kind) => `[${kind}]` ).join(' ');
                const additionals = Array.from( item.getAdditionalDataMap() ).map(
                    (value) => `{${value[0]}=${value[1]}}`
                ).join(' ');
                
                const start = item.getStartPosition();
                const end = item.getEndPosition();
                const positions = ` <${start?`${start.row}:${start.column}`:'x:x'}-${end?`${end.row}:${end.column}`:'x:x'}>`;
                
                const getIconSpan = () => {
                    if( item.isKind('const') ) return $.span( {class: 'icon variable'}, 'const' );
                    if( item.isKind('let') ) return $.span( {class: 'icon variable'}, 'let' );
                    if( item.isKind('var') ) return $.span( {class: 'icon variable'}, 'var' );
                    if( item.isKind('class') ) return $.span( {class: 'icon class'}, 'class' );
                    if( item.isKind('function') ) return $.span( {class: 'icon function'}, 'func' );
                    if( item.isKind('constructor') ) return $.span( {class: 'icon constructor'}, 'func' );
                    if( item.isKind('method') ) return $.span( {class: 'icon method'}, 'func' );
                    if( item.isKind('property') ) return $.span( {class: 'icon property'}, 'prop' );
                    return $.span( {class: 'icon'}, '' );
                };
                
                const getAdditionalKindsSpan = () => {
                    return item.getKind().map( (kind) => {
                        if( kind === 'async' ) return $.span( {class: 'keyword async'}, 'async' );
                        if( kind === 'generator' ) return $.span( {class: 'keyword generator'}, 'generator' );
                        if( kind === 'export' ) return $.span( {class: 'keyword export'}, 'export' );
                        if( kind === 'import' ) return $.span( {class: 'keyword import'}, 'import' );
                        return '';
                    });
                };
                
                return [
                    getIconSpan(),
                    $.span( {class: 'name'},
                        name,
                        getAdditionalKindsSpan(),
                        $.span( {class: 'debug'},
                            kinds,
                            additionals,
                            positions
                        )
                    )
                ];
            }
            
            return '';
        };
        
        const event = { parentIdentifiers: parentIdentifiers, childrenIdentifiers: childrenIdentifiers };
        
        const emitFunction = async () => {
            await this._emitter.emit(
                'will-update-dropdown-boxes',
                event
            );
            
            view.getLeftDropdownBox().update({
                items: event.parentIdentifiers,
                selectedIndex: parentSelectedIndex,
                itemRenderer: renderItem,
            });
            view.getRightDropdownBox().update({
                items: event.childrenIdentifiers,
                selectedIndex: childrenSelectedIndex,
                itemRenderer: renderItem,
            });
        };
        
        emitFunction();
    }
}
