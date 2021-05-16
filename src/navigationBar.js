/* global atom */

import { CompositeDisposable, Emitter } from 'atom'; // eslint-disable-line import/no-unresolved
import { identifiersProviderRegistry } from './identifiersProviderRegistry';
import { BehaviorManager } from './behaviorManager';
import { DisplayIdentifiersOnDropdownBoxes } from './behaviors/displayIdentifiersOnDropdownBoxes';
import { SortIdentifiersOnDropdownBoxes } from './behaviors/sortIdentifiersOnDropdownBoxes';
import { SelectIdentifierAtCursorPosition } from './behaviors/selectIdentifierAtCursorPosition';
import { JumpToIdentifierWhenItIsSelectedOnDropdownBox } from './behaviors/jumpToIdentifierWhenItIsSelectedOnDropdownBox';

/**
 * NavigationBar displays two dropdown boxes for current TextEditor,
 * filled with Identiers found on TextEditor's source code.
 */
export class NavigationBar {
    /**
     * Boolean value representing whether NavigationBar is active.
     * @type {boolean}
     *
     * @private
     */
    _active = true;
    
    /**
     * Boolean representing whether NavigationBar is disposed of.
     * @type {boolean}
     *
     * @private
     */
    _disposed = false;

    /**
     * Holds subscriptions to the active TextEditor.
     * @type {CompositeDisposable}
     *
     * @private
     */
    _activeEditorSubscriptions = null;

    /**
     * Holds subscription of listener observing change of Atom's active TextEditor.
     * @type {Disposable}
     *
     * @private
     */
    _observeActiveTextEditorSubscription = null;

    /**
     * Holds instance of this NavigationBar's view.
     * @type {NavigationBarView|undefined},
     *
     * @private
     */
    _view = undefined;

    /**
     * Holds instance of active TextEditor from last observation.
     * @type {TextEditor|undefined}
     *
     * @private
     */
    _activeTextEditor = undefined;
    
    /**
     * Holds instance of {@link InstanceProvider} for atom's active TextEditor.
     * @type {InstanceProvider|null}
     */
    _providerForActiveTextEditor = null;

    /**
     * Holds instance of this NavigationBar's emitter.
     * @type {Emitter}
     *
     * @private
     */
    _emitter = new Emitter();

    /**
     * Holds currently selected Identifier on Dropdown boxes.
     * @type {Identifier|null}
     *
     * @private
     */
    _selectedIdentifier = null;

    /**
     * Holds instance to NavigationBar's providers.
     * @type {ProviderRegistry}
     *
     * @private
     */
    _providers = identifiersProviderRegistry;

    /**
     * Holds instance of {@link BehaviorManager} providing access for Behaviors.
     * @type {BehaviorManager}
     *
     * @private
     */
    _behaviorManager = new BehaviorManager(this);

    /**
     * Creates new NavigationBar instance.
     */
    constructor() {
        // Create the UI first
        this._view = atom.views.getView(this);
        
        // Activate but don't notify
        this.activateWithoutEvent();
        
        // Make UI interactive
        this._behaviorManager.initialize();
        const displayIdentifiersBehavior = new DisplayIdentifiersOnDropdownBoxes( this._behaviorManager );
        this._behaviorManager.registerBehavior( displayIdentifiersBehavior );
        this._behaviorManager.registerBehavior( new SelectIdentifierAtCursorPosition( this._behaviorManager, displayIdentifiersBehavior ) );
        this._behaviorManager.registerBehavior( new SortIdentifiersOnDropdownBoxes( this._behaviorManager, displayIdentifiersBehavior) );
        this._behaviorManager.registerBehavior( new JumpToIdentifierWhenItIsSelectedOnDropdownBox( this._behaviorManager ) );
        
        this.update();
    }

    /**
     * Releases all resources used by NavigationBar.
     */
    dispose() {
        // Running while object is already disposed of won't hurt...
        
        this.deactivate();
        
        if( this._view ) {
            this._view.destroy();
        }
        this._view = null;
        
        if( this._providers ) {
            this._providers.dispose();
        }
        this._providers = null;
        
        if( this._behaviorManager ) {
            this._behaviorManager.dispose();
        }
        this._behaviorManager = null;
        
        this._disposed = true;
    }
    

    /**
     * Deactivates NavigationBar, stopping it's functionality.
     */
    deactivate() {
        // Running while object is already disposed of won't hurt...
        
        this.deactivateWithoutEvent();
        
        if( this._disposed ) return; // We don't want to emit event if we're disposed of...
        this._emitter.emit( 'did-deactivate', { navigationBar: this } );
    }

    /**
     * Notifies subscriber that NavigationBar is deactivated.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when Navigation bar is deactivated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @throws {Error} if object is already disposed of.
     */
    onDidDeactivate( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-deactivate', callback );
    }
    
    /**
     * @private
     * Implementation
     */
    deactivateWithoutEvent() {
        // Running while object is already disposed of won't hurt...
        
        this._active = false;
        
        this.unregisterOnDidChangeSelected();
        this.unregisterObserveActiveTextEditor();
        this._activeTextEditor = undefined;
        this._providerForActiveTextEditor = null;
        this._selectedIdentifier = null;
    }
    
    /**
     * Activates NavigationBar, resuming it's functionality.
     * If object has been disposed of, this method has no effect.
     * @fires {did-activate}
     */
    activate() {
        if( this._disposed ) return;
        this._active = true;
        
        this.activateWithoutEvent();
        
        this._emitter.emit( 'did-activate', { navigationBar: this } );
    }

    /**
     * Notifies subscriber that NavigationBar is activated.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when Navigation bar is activated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @throws {Error} if object is already disposed of.
     */
    onDidActivate( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-activate', callback );
    }
    
    /**
     * @private
     * Implementation
     */
    activateWithoutEvent() {
        if( this._disposed ) return;
        this._active = true;
        
        this._activeTextEditor = atom.workspace.getActiveTextEditor();
        this._providerForActiveTextEditor = this.getProviderForTextEditor( this._activeTextEditor );
        this._selectedIdentifier = null;
        this.registerObserveActiveTextEditor();
        this.registerOnDidChangeSelected();
    }
    
    /**
     * Checks if NavigationBar is active, meaning it is visible and functioning.
     *
     * @return {boolean} True when NavigationBar is active, false otherwise.
     */
    isActive() {
        return this._active;
    }
    
    /**
     * Checks if NavigationBar is disposed of.
     *
     * @return {Boolean} True when NavigationBar have been disposed of, false otherwise.
     */
    isDisposed() {
        return this._disposed;
    }
    
    /**
     * Starts observing changes in atom's active TextEditor.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    registerObserveActiveTextEditor() {
        if( this._disposed ) return;
        if( !this._active ) return;
        
        this._observeActiveTextEditorSubscription = atom.workspace.observeActiveTextEditor( (textEditor) => {
            if( textEditor === undefined ) {
                // No TextEditor is curretly active
                this.setActiveTextEditor( undefined );
            } else if ( this.getActiveTextEditor() !== textEditor ) {
                // Different TextEditor is now active
                this.setActiveTextEditor( textEditor );
            }
            // Same TextEditor. Don't know why it would be fired with same TextEditor though.
        });
    }
    
    /**
     * Unregisters listeners registered with {@link #registerObserveActiveTextEditor}.
     *
     * @private
     */
    unregisterObserveActiveTextEditor() {
        // Won't hurt if run even when disposed of...
        
        if( this._activeEditorSubscriptions ) {
            this._activeEditorSubscriptions.dispose();
        }
        this._activeEditorSubscriptions = null;
        
        if( this._observeActiveTextEditorSubscription ) {
            this._observeActiveTextEditorSubscription.dispose();
        }
        this._observeActiveTextEditorSubscription = null;
    }
    
    /**
     * Starts listening to events of active {@link TextEditor}.
     * If no {@link TextEditor} is set as active, method has no effect.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    registerListenersForActiveTextEditorEvents() {
        if( this._disposed ) return;
        if( !this._active ) return;
        
        if( this._activeTextEditor ) {
            this._activeEditorSubscriptions = new CompositeDisposable();
            
            this._activeEditorSubscriptions.add( this._activeTextEditor.onDidSave( () => {
                if( this._providerForActiveTextEditor ) this._providerForActiveTextEditor.generateIdentifiers();
            }));
            
            this._activeEditorSubscriptions.add( this._activeTextEditor.onDidChangeGrammar( () => {
                if( this._providerForActiveTextEditor ) this._providerForActiveTextEditor.generateIdentifiers();
            }));
            
            if( this._providerForActiveTextEditor ) this._providerForActiveTextEditor.generateIdentifiers();
        }
    }
    
    /**
     * Unregisters listeners registered with {@link #registerListenersForActiveTextEditorEvents}.
     *
     * @private
     */
    unregisterEventListenersForActiveTextEditorEvents() {
        // Doesn't hurt to run even if disposed of...
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
        this._activeEditorSubscriptions = null;
    }
    
    /**
     * Sets new active {@link TextEditor}. Clears listeners and then registers new listeners for events fired by
     * `textEditor`. If `textEditor` is **undefined**, function only clears the listeners, since there's no
     * {@link TextEditor} to register new listeners with.
     * If object has been disposed of, this method has no effect.
     *
     * @fires `did-change-active-text-editor`
     *
     * @private
     */
    setActiveTextEditor( textEditor ) {
        if( this._disposed ) return;
        if( !this._active ) return;
        
        this.unregisterEventListenersForActiveTextEditorEvents();
        
        if( textEditor === undefined ) {
            // No TextEditor is active
            this._activeTextEditor = undefined;
            this._providerForActiveTextEditor = null;
            this._selectedIdentifier = null;
        }
        else if( this._activeTextEditor !== textEditor ) {
            // New TextEditor is active
            this._activeTextEditor = textEditor;
            this._providerForActiveTextEditor = this.getProviderForTextEditor( textEditor );
            this._selectedIdentifier = this._providerForActiveTextEditor?.getIdentifierForPosition( textEditor.getCursorBufferPosition() ) ?? null;
        } else {
            // Same TextEditor instance is active...
        }
        
        this.registerListenersForActiveTextEditorEvents();
        
        this._emitter.emit( 'did-change-active-text-editor', { navigationBar: this, textEditor: textEditor } );
    }
    
    /**
     * Registers listeners for `did-change-selected` event with NavigationBar'S {@link DropdownBox}es.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    registerOnDidChangeSelected() {
        if( this._disposed ) return;
        if( !this._active ) return;
        
        const leftDropdownBox = this._view.getLeftDropdownBox();
        const rightDropdownBox = this._view.getRightDropdownBox();
        
        this._subscriptionsToOnDidChangeSelected = new CompositeDisposable();
        this._subscriptionsToOnDidChangeSelected.add( leftDropdownBox.onDidChangeSelected( (evnt) => {
            this.setSelectedIdentifier( evnt.item, true );
        }));
        this._subscriptionsToOnDidChangeSelected.add( rightDropdownBox.onDidChangeSelected( (evnt) => {
            this.setSelectedIdentifier( evnt.item, true );
        }));
    }
    
    /**
     * Unregisters listeners registered with {@link this#registerOnDidChangeSelected}.
     *
     * @private
     */
    unregisterOnDidChangeSelected() {
        // Won't hurt running even when object is already disposed of...
        
        if( this._subscriptionsToOnDidChangeSelected ) {
            this._subscriptionsToOnDidChangeSelected.dispose();
        }
        this._subscriptionsToOnDidChangeSelected = null;
    }

    /**
     * Returns currently selected {@link Identifier} on NavigationBar's {@link DropdownBox}es.
     * If none is selected, returns *null*.
     *
     * @return {Identifier|null} Selected identifier.
     *
     * @throws {Error} if object is already disposed of.
     */
    getSelectedIdentifier() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._selectedIdentifier;
    }

    /**
     * Sets `selectedIdentifier` as the selected {@link Identifier} on NavigationBar's {@link DropdownBox}es.
     * Pass *null* to select none.
     * If object has been disposed of, this method has no effect.
     *
     * @param {Identifier|null} selectedIdentifier
     * @param {boolean} [selectedByUser=false] Set it to true to indicate change is made by user clicking on dropdown box item, not by code.
     *
     * @fires {did-change-selected-identifier}
     */
    setSelectedIdentifier( selectedIdentifier, selectedByUser = false ) {
        if( this._disposed ) return;
        if( !this._active ) return;

        this._selectedIdentifier = selectedIdentifier;
        this._emitter.emit( 'did-change-selected-identifier', { navigationBar: this, selectedIdentifier: selectedIdentifier, selectedByUser: selectedByUser } );
    }

    /**
     * Notifies subscriber about change of {@link Identifier} selected on dropdown boxes.
     *
     * @param  {function(event: {navigationBar: NavigationBar, selectedIdentifier: Identifier})} callback Function to invoke when selected Identifier changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @throws {Error} if object is already disposed of.
     */
    onDidChangeSelectedIdentifier( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-change-selected-identifier', callback );
    }

    /**
     * Notifies subscriber about change of atom's active {@link TextEditor}.
     *
     * @param  {function(event: {navigationBar: NavigationBar, textEditor: TextEditor})} callback Function to invoke when active TextEditor changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     *
     * @throws {Error} if object is already disposed of.
     */
    onDidChangeActiveTextEditor( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-change-active-text-editor', callback );
    }
    
    /**
     * Performs complete update. Will reload active {@link TextEditor}, {@link IdentifierProvider} which fires
     * corresponding events... Use when you want to manually request an update. Preserves cursor position.
     * If object has been disposed of, this method has no effect.
     */
    update() {
        if( this._disposed ) return;
        if( !this._active ) return;
        
        this.setActiveTextEditor( atom.workspace.getActiveTextEditor() );
    }

    /**
     * Returns {@link NavigationBarView} of this NavigationBar.
     *
     * @return {NavigationBarView} The view.
     *
     * @throws {Error} if object is already disposed of.
     */
    getView() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._view;
    }

    /**
     * Returns {@link IdentifierProvider} for given `textEditor` or *null* if no provider is available for that grammar.
     * Returns *null* if NavigationBar is not active.
     *
     * @param  {TextEditor} textEditor
     * @return {IdentifierProvider|null} IdentifierProvider or null if none is available.
     *
     * @throws {Error} if object is already disposed of.
     */
    getProviderForTextEditor( textEditor ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        if( !this._active ) return null;
        
        return this._providers.getProviderForTextEditor( textEditor );
    }
    
    onDidInitialize() {
        throw new Error('onDidInitialize Deprecated');
    }
    
    /**
     * Returns active {@link TextEditor} or *undefined* if no {@link TextEditor} is active.
     * Returns *undefined* if NavigationBar is not active.
     * @return {TextEditor|undefined} TextEditor or undefined
     *
     * @throws {Error} if object is already disposed of.
     */
    getActiveTextEditor() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        if( !this._active ) return undefined;
        
        return this._activeTextEditor;
    }
    
    /**
     * Returns {@link BehaviorManager} of this NavigationBar instance.
     * @return {BehaviorManager} BehaviorManager of this NavigationBar.
     *
     * @throws {Error} if object is already disposed of.
     */
    getBehaviorManager() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._behaviorManager;
    }
}
