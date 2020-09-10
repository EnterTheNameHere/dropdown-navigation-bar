/* global atom */

import { CompositeDisposable, Emitter } from 'atom'; // eslint-disable-line import/no-unresolved
import { ProviderRegistry } from './providerRegistry';
import { BehaviorManager } from './behaviorManager';
import { DisplayIdentifiersOnDropdownBoxes } from './behaviors/displayIdentifiersOnDropdownBoxes';
import { SortIdentifiersByAlphabet } from './behaviors/sortIdentifiersByAlphabet';
import { SelectIdentifierAtCursorPosition } from './behaviors/selectIdentifierAtCursorPosition';

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
     * @type {NavigationBarView},
     *
     * @private
     */
    _view = null;

    /**
     * Holds instance of active TextEditor from last observation.
     * @type {TextEditor}
     *
     * @private
     */
    _activeEditor = null;

    /**
     * Holds instance of this NavigationBar's emitter.
     * @type {Emitter}
     *
     * @private
     */
    _emitter = new Emitter();

    /**
     * Holds currently selected Identifier on Dropdown boxes.
     * @type {Identifier}
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
    _providers = new ProviderRegistry();

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
        
        const displayIdentifiersBehavior = new DisplayIdentifiersOnDropdownBoxes( this._behaviorManager );
        this._behaviorManager.registerBehavior( displayIdentifiersBehavior );
        this._behaviorManager.registerBehavior( new SelectIdentifierAtCursorPosition( this._behaviorManager, displayIdentifiersBehavior ) );
        this._behaviorManager.registerBehavior( new SortIdentifiersByAlphabet( this._behaviorManager, displayIdentifiersBehavior) );
        
        this.registerObserveActiveTextEditor();

        this._behaviorManager.initialize();
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
        
        this._active = false;

        this.unregisterObserveActiveTextEditor();
        this._activeEditor = null;
        this._activeEditorProvider = null;
        this._selectedIdentifier = null;
        
        if( this._disposed ) return; // We don't want to emit event if we're disposed of...
        this._emitter.emit( 'did-deactivate', { navigationBar: this } );
    }

    /**
     * Notifies subscriber that NavigationBar is deactivated.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when Navigation bar is deactivated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidDeactivate( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-deactivate', callback );
    }

    /**
     * Activates NavigationBar, resuming it's functionality.
     * If object has been disposed of, this method has no effect.
     */
    activate() {
        if( this._disposed ) return;
        this._active = true;
        
        this._selectedIdentifier = null;
        this._activeEditor = atom.workspace.getActiveTextEditor();
        this._activeEditorProvider = this.getProviderForTextEditor( this._activeEditor );
        this.registerObserveActiveTextEditor();
        
        this._emitter.emit( 'did-activate', { navigationBar: this } );
    }

    /**
     * Notifies subscriber that NavigationBar is activated.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when Navigation bar is activated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidActivate( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-activate', callback );
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
     * Unregisters listeners registered with {@link this#registerObserveActiveTextEditor}.
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
                this._activeEditor = null;
                this._activeEditorProvider = null;
                this._selectedIdentifier = null;
                
                if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
                this._activeEditorSubscriptions = null;

                this._emitter.emit( 'did-change-active-text-editor', { navigationBar: this, textEditor: textEditor } );
            } else if ( this._activeEditor !== textEditor ) {
                // Different TextEditor is now active
                this._activeEditor = textEditor;
                this._activeEditorProvider = this.getProviderForTextEditor( textEditor );
                this._selectedIdentifier = null;
                
                if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
                this._activeEditorSubscriptions = new CompositeDisposable();
                
                this._activeEditorSubscriptions.add( textEditor.onDidSave( () => {
                    if( this._activeEditorProvider ) this._activeEditorProvider.generateIdentifiers();
                }));
                this._activeEditorSubscriptions.add( textEditor.onDidChangeGrammar( () => {
                    if( this._activeEditorProvider ) this._activeEditorProvider.generateIdentifiers();
                }));

                
                if( this._activeEditorProvider ) this._activeEditorProvider.generateIdentifiers();
                this._emitter.emit( 'did-change-active-text-editor', { navigationBar: this, textEditor: textEditor } );
            }
            // Same TextEditor. Don't know why it would be fired with same TextEditor though.
        });
    }

    /**
     * Returns currently selected {@link Identifier} on NavigationBar's {@link DropdownBox}es. Is *null* if none is selected.
     *
     * @return {Identifier|null} Selected identifier.
     */
    getSelectedIdentifier() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._selectedIdentifier;
    }

    /**
     * Sets `selectedIdentifier` as the selected {@link Identifier} on NavigationBar's {@link DropdownBox}es. Can be
     * *null* to select none.
     * If object has been disposed of, this method has no effect.
     *
     * @param {Identifier|null} selectedIdentifier
     */
    setSelectedIdentifier( selectedIdentifier ) {
        if( this._disposed ) return;
        if( !this._active ) return;

        this._selectedIdentifier = selectedIdentifier;
        this._emitter.emit( 'did-change-selected-identifier', { navigationBar: this, selectedIdentifier: selectedIdentifier } );
    }

    /**
     * Notifies subscriber about change of Identifier selected on dropdown boxes.
     *
     * @param  {function(event: {navigationBar: NavigationBar, selectedIdentifier: Identifier})} callback Function to invoke when selected Identifier changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeSelectedIdentifier( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-change-selected-identifier', callback );
    }

    /**
     * Notifies subscriber about change of active TextEditor.
     *
     * @param  {function(event: {navigationBar: NavigationBar, textEditor: TextEditor})} callback Function to invoke when active TextEditor changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeActiveTextEditor( callback ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._emitter.on( 'did-change-active-text-editor', callback );
    }

    /**
     * Returns view for this NavigationBar.
     *
     * @return {NavigationBarView} The view.
     */
    getView() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._view;
    }

    /**
     * Returns IdentifierProvider for given `textEditor` or *null* if no provider is available for that grammar.
     *
     * @param  {TextEditor} textEditor
     * @return {IdentifierProvider|null}
     */
    getProviderForTextEditor( textEditor ) {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._providers.getProviderForTextEditor( textEditor );
    }

    onDidInitialize() {
        throw new Error('onDidInitialize Deprecated');
    }
    
    /**
     * Returns active TextEditor or *null* if no TextEditor is active.
     * @return {TextEditor|null} TextEditor or null
     */
    getActiveTextEditor() {
        if( this._disposed ) throw new Error("Trying to call function of object which is already disposed of!");
        
        return this._activeEditor;
    }
}
