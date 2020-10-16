/* global atom */

import { CompositeDisposable } from 'atom';
import { dom as $, default as etch } from 'etch';
import { BehaviorManagerEmitter } from './../behaviorManagerEmitter';
import { Identifier, EmptyIdentifier } from './../identifiers';

//import { logged } from './../debug';

etch.setScheduler(atom.views);

export class DisplayIdentifiersOnDropdownBoxes {
    /**
     * Holds instance of BehaviorManager this Behavior is connected to.
     * @type {BehaviorManager}
     */
    _behaviorManager = null;
    
    /**
     * Boolean value representing whether Behavior is active.
     * @type {boolean}
     */
    _behaviorActive = false;
    
    /**
     * Holds subscriptions of this Behavior.
     * @type {CompositeDisposable}
     */
    _subscriptions = null;
    
    /**
     * Holds instance of custom event Emitter.
     * @type {BehaviorManagerEmitter}
     */
    _emitter = new BehaviorManagerEmitter();
    
    /**
     * Boolean value representing whether this Behavior is disposed of.
     * @type {boolean}
     */
    _disposed = false;
    
    /**
     * Subscription to {@link BehaviorManager}'s `did-change-selected-identifier` event. Changes when Atom's active
     * {@link TextEditor} changes.
     * @type {Disposable}
     */
    _subscriptionToOnDidChangeSelectedIdentifier = null;
    
    /**
     * Boolean value setting if Cursor should be moved to selected {@link Identifier} when user selects
     * {@link Identifier} at {@link DropdownBox}.
     * @type {boolean}
     */
    moveCursorToSelectedIdentifier = false;
    
    /**
     * Boolean value setting if {@link Identifier}'s debug information should be displayed with it's name.
     * @type {boolean}
     */
    displayDebugInformation = false;
    
    /**
     * Creates new instance.
     * @param {BehaviorManager} behaviorManager
     */
    constructor( behaviorManager ) {
        this._behaviorManager = behaviorManager;
    }
    
    /**
     * Releases resources held by this object.
     */
    //@logged
    dispose() {
        // Won't hurt if run even when object is already disposed of...
        
        this.deactivateBehavior();
        
        if( this._emitter ) {
            this._emitter.dispose();
        }
        this._emitter = null;
        
        this._disposed = true;
    }
    
    /**
     * Behavior contract function. Called when Behavior can perform it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    activateBehavior() {
        if( this._disposed ) return;
        if( this._behaviorActive ) return;
        
        this._behaviorActive = true;
        
        /*
        const view = this._behaviorManager.getNavigationBarView();
        const leftDropdownBox = view.getLeftDropdownBox();
        const rightDropdownBox = view.getRightDropdownBox();
        
        this._subscriptions.add(
            leftDropdownBox.onDidChangeSelected( ( ev ) => {
                const navigationBar = this._behaviorManager.getNavigationBar();
                navigationBar.setSelectedIdentifier( ev.item );
                const pos = ev.item.getStartPosition();
                if( pos ) {
                    ev.item.getTextEditor().setCursorBufferPosition( pos );
                }
            })
        );
        
        this._subscriptions.add(
            rightDropdownBox.onDidChangeSelected( ( ev ) => {
                const navigationBar = this._behaviorManager.getNavigationBar();
                navigationBar.setSelectedIdentifier( ev.item );
                const pos = ev.item instanceof EmptyIdentifier
                    ? ev.item.getEndPosition()
                    : ev.item.getStartPosition();
                if( pos ) {
                    ev.item.getTextEditor().setCursorBufferPosition( pos );
                }
            })
        );
        
        this._subscriptions.add(
            this._behaviorManager.onDidChangeActiveTextEditor( () => {
                this.updateDropdownBoxes();
            }, this )
        );
        
        this._subscriptions.add(
            this._behaviorManager.onDidChangeSelectedIdentifier( () => {
                this.updateDropdownBoxes();
            }, this )
        );
        */
       
        this.registerListeners();
        
        this.updateDropdownBoxes();
    }
    
    /**
     * Behavior contract function. Called when Behavior must stop performing it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    deactivateBehavior() {
        // Won't hurt to run even when already disposed of...
        
        this._behaviorActive = false;
        
        this.unregisterListeners();
    }
        
    /**
     * Registers listeners required for this Behavior's function.
     * If object has been disposed of, this method has no effect.
     */
    registerListeners() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        if( this._subscriptions ) this._subscriptions.dispose();
        this._subscriptions = new CompositeDisposable();
        
        this._subscriptions.add( this._behaviorManager.onDidChangeSelectedIdentifier(
            () => {
                this.updateDropdownBoxes();
            },
            this,
            []
        ));
        
        this._subscriptions.add( this._behaviorManager.onDidChangeActiveTextEditor(
            () => {
                this.updateDropdownBoxes();
            },
            this,
            []
        ));
    }
    
    /**
     * Unregisters listeners registered with {@link this#registerListeners}.
     */
    unregisterListeners() {
        // Won't hurt running even when object is already disposed of...
        
        if( this._subscriptions ) {
            this._subscriptions.dispose();
        }
        this._subscriptions = null;
    }
    
    /**
     * Notifies subscriber that Dropdown Boxes are about to be updated.
     * Useful if you want to change what will Dropdown Boxes show.
     *
     * @param  {function(parentIdentifiers: Array, childrenIdentifiers: Array)} callback Function to invoke when DropdownBoxes are about to be updated.
     * @param  {Behavior}                      behaviorInstance Instance of Behavior the callback belongs to. Required in case order of callbacks matter.
     * @param  {{before: Array, after: Array}} [orderRules]     Rules specifying order in which behaviorInstances should be called.
     * @return {Disposable}                                     Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onWillUpdateDropdownBoxes( callback, behaviorInstance, orderRules ) {
        if( this._disposed ) throw new Error('Trying to call function of object that is already disposed of!');
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'will-update-dropdown-boxes', callback, behaviorInstance, orderRules );
    }
    
    /**
     * Notifies subscriber that {@link NavigationBar}'s {@link DropdownBox}es were updated.
     * @param  {function()}                    callback         Function to invoke when DropdownBoxes are about to be updated.
     * @param  {Behavior}                      behaviorInstance Instance of Behavior the callback belongs to. Required in case order of callbacks matter.
     * @param  {{before: Array, after: Array}} [orderRules]     Rules specifying order in which behaviorInstances should be called.
     * @return {Disposable}                                     Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    odDidUpdateDropdownBoxes( callback, behaviorInstance, orderRules ) {
        if( this._disposed ) throw new Error('Trying to call function of object that is already disposed of!');
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-update-dropdown-boxes', callback, behaviorInstance, orderRules );
    }
    
    /**
     * Performs update of {@NavigationBar}'s {@link DropdownBox}es.
     * If object has been disposed of, this method has no effect.
     *
     * @emits {will-update-dropdown-boxes}
     */
    //@logged
    updateDropdownBoxes() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
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
                        const kinds = child.getKind().map( (kind) => { return `[${kind}]`; } ).join(' ');
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
                
                const kinds = item.getKind().map( (kind) => { return `[${kind}]`; } ).join(' ');
                const additionals = Array.from( item.getAdditionalDataMap() ).map(
                    (value) => { return `{${value[0]}=${value[1]}}`; }
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
        
        // Event is sent to subscribers allowing them to change the parentIdentifiers and childrenIdentifiers, so after
        // all subscribers' callbacks have been called, use the these to update dropdown boxes!
        const willUpdateDropdownBoxesEvent = { parentIdentifiers: parentIdentifiers, childrenIdentifiers: childrenIdentifiers };
        
        const emitFunction = async () => {
            await this._emitter.emit(
                'will-update-dropdown-boxes',
                willUpdateDropdownBoxesEvent
            );
            
            view.getLeftDropdownBox().update({
                items: willUpdateDropdownBoxesEvent.parentIdentifiers, // using parentIdentifiers from event is intentional!
                selectedIndex: parentSelectedIndex,
                itemRenderer: renderItem,
            });
            view.getRightDropdownBox().update({
                items: willUpdateDropdownBoxesEvent.childrenIdentifiers, // using childrenIdentifiers from event is intentional!
                selectedIndex: childrenSelectedIndex,
                itemRenderer: renderItem,
            });
            
            this._emitter.emit(
                'did-update-dropdown-boxes',
                {}
            );
        };
        
        emitFunction();
    }
    
    /**
     * Behavior contract function returning Behavior's settings schema.
     *
     * @return {object|Array<object>} Schema of Behavior's settings.
     */
    //@logged
    settings() {
        return [
            {
                type: 'group',
                text: 'Display:',
                items: [
                    {
                        type: 'checkbox',
                        keyPath: 'displayIdentifiersOnDropdownBoxes.moveCursorToSelectedIdentifier',
                        text: 'Move cursor to selected Identifier',
                        property: 'moveCursorToSelectedIdentifier',
                        default: true
                    },
                    {
                        type: 'checkbox',
                        keyPath: 'displayIdentifiersOnDropdownBoxes.displayDebugInformation',
                        text: 'Show Identifier\'s debug information',
                        property: 'displayDebugInformation',
                        default: false
                    }
                ]
            }
        ];
    }
    
    /**
     * Behavior contract function called when Behavior's settings are changed. Can be used when Behavior needs to
     * perform update right after settings are changed.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    settingsUpdated() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this.updateDropdownBoxes();
    }
    
    /**
     * Checks if Behavior is disposed of.
     *
     * @return {Boolean} True when Behavior have been disposed of, false otherwise.
     */
    isDisposed() {
        return this._disposed;
    }
    
    /**
     * Checks if Behavior is active, meaning it is visible and functioning.
     *
     * @return {boolean} True when Behavior is active, false otherwise.
     */
    isActive() {
        return this._behaviorActive;
    }
}
