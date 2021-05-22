/* global atom */

/** FIX: when you write code and add new lines, then when selecting EmptyIdentifier on right side DropdownBox will not
move to correct line where end of parent (left side identifier) is. Need to refresh IdentifierProvider when user
wants to display DropdownBox popup list, or before user clicks on DropdownBox item, to update the positions of
identifiers in that editor, so cursor is moved to correct line/position **/

import { CompositeDisposable } from 'atom';
import { dom as $, default as etch } from 'etch';
import { BehaviorManagerEmitter } from './../behaviorManagerEmitter';
import { Identifier, EmptyIdentifier } from './../identifiers';

etch.setScheduler(atom.views);

/**
 * Behavior populating DropdownBoxes with {@link Identifier}s when active {@link TextEditor} changes or
 * new {@link Identifier} is selected on DropdownBox.
 *
 * @implements {Behavior}
 */
export class DisplayIdentifiersOnDropdownBoxes {
    /**
     * Holds instance of {@link BehaviorManager} this Behavior is connected to.
     * @type {BehaviorManager}
     *
     * @private
     */
    _behaviorManager = null;
    
    /**
     * Boolean value representing whether this behavior is active, that is if it should perform it's behavior.
     * @type {boolean}
     *
     * @private
     */
    _behaviorActive = false;
    
    /**
     * Holds subscriptions of this Behavior.
     * @type {CompositeDisposable}
     *
     * @private
     */
    _subscriptions = null;
    
    /**
     * Holds instance of custom event Emitter.
     * @type {BehaviorManagerEmitter}
     *
     * @private
     */
    _emitter = new BehaviorManagerEmitter();
    
    /**
     * Boolean value representing whether this object is disposed of. It is not safe to change state of disposed object.
     * @type {boolean}
     *
     * @private
     */
    _disposed = false;
    
    /**
     * Boolean value setting if {@link Identifier}'s debug information should be displayed with it's name.
     * @type {boolean}
     *
     * @private
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
    activateBehavior() {
        if( this._disposed ) return;
        if( this._behaviorActive ) return;
        
        this._behaviorActive = true;
        
        this.registerListeners();
        
        this.updateDropdownBoxes();
    }
    
    /**
     * Behavior contract function. Called when Behavior must stop performing it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    deactivateBehavior() {
        // Won't hurt to run even when already disposed of...
        
        this._behaviorActive = false;
        
        this.unregisterListeners();
    }
        
    /**
     * Registers listeners required for this Behavior's function.
     * If object has been disposed of, this method has no effect.
     *
     * @private
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
     *
     * @private
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
     *
     * @return {Disposable}                                     Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @throws {Error} if object is already disposed of.
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
     *
     * @return {Disposable}                                     Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @throws {Error} if object is already disposed of.
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
    async updateDropdownBoxes() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        const navigationBar = this._behaviorManager.getNavigationBar();
        const view = this._behaviorManager.getNavigationBarView();
        const editor = this._behaviorManager.getActiveTextEditor();
        const provider = await this._behaviorManager.getProviderForActiveTextEditor();
        
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
                
                if( item.isKind('function') || item.isKind('method') || item.isKind('constructor') ) {
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
                    if( item.isKind('const') || item.isKind('constructor') ) return $.span( {class: 'icon variable'}, 'const' );
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
                
                const debugInfo = this.displayDebugInformation
                    ? $.span( {class: 'debug'}, kinds, additionals, positions )
                    : '';
                
                return [
                    getIconSpan(),
                    $.span( {class: 'name'},
                        name,
                        getAdditionalKindsSpan(),
                        debugInfo
                    )
                ];
            }
            
            return '';
        };
        
        // Event is sent to subscribers allowing them to change the parentIdentifiers and childrenIdentifiers, so after
        // all subscribers' callbacks have been called, use the these to update dropdown boxes! If you change order
        // of identifiers, make sure to update Selected indexes too!
        const willUpdateDropdownBoxesEvent = {
            parentIdentifiers: parentIdentifiers,
            childrenIdentifiers: childrenIdentifiers,
            parentSelectedIndex: parentSelectedIndex,
            childrenSelectedIndex: childrenSelectedIndex
        };
        
        const emitFunction = async () => {
            await this._emitter.emit(
                'will-update-dropdown-boxes',
                willUpdateDropdownBoxesEvent
            );

            view.getLeftDropdownBox().update({
                items: willUpdateDropdownBoxesEvent.parentIdentifiers, // using parentIdentifiers from event is intentional!
                selectedIndex: willUpdateDropdownBoxesEvent.parentSelectedIndex,
                itemRenderer: renderItem,
            });
            view.getRightDropdownBox().update({
                items: willUpdateDropdownBoxesEvent.childrenIdentifiers, // using childrenIdentifiers from event is intentional!
                selectedIndex: willUpdateDropdownBoxesEvent.childrenSelectedIndex,
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
     * @return {object} Schema of Behavior's settings.
     */
    settings() {
        return {
            name: 'Display identifiers on dropdown boxes',
            config: {
                displayDebugInformation: {
                    title: 'Display debug information',
                    property: 'DisplayDebugInformation',
                    description: 'Display additional information. Only useful for developing of this plugin...',
                    type: 'boolean',
                    default: true
                }
            }
        };
    }
    
    /**
     * Behavior contract function called when Behavior's settings are changed. Can be used when Behavior needs to
     * perform update right after settings are changed.
     * If object has been disposed of, this method has no effect.
     */
    settingsUpdated() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this.updateDropdownBoxes();
    }
    
    /**
     * Behavior contract function. Checks if Behavior is disposed of.
     *
     * @return {Boolean} True when Behavior have been disposed of, false otherwise.
     */
    isDisposed() {
        return this._disposed;
    }
    
    /**
     * Behavior contract function. Checks if Behavior is active, meaning it performs its function.
     *
     * @return {boolean} True when Behavior is active, false otherwise.
     */
    isActive() {
        return this._behaviorActive;
    }
}
