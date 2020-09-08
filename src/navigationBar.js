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
     * @access private
     */
    _active = true;

    /**
     * Holds subscriptions to the active TextEditor.
     * @type {CompositeDisposable}
     *
     * @access private
     */
    _activeEditorSubscriptions = null;

    /**
     * Holds subscriptions of this NavigationBar.
     * @type {CompositeDisposable}
     *
     * @access private
     */
    _subscriptions = null;

    /**
     * Holds instance of this NavigationBar's view.
     * @type {NavigationBarView},
     *
     * @access private
     */
    _view = null;

    /**
     * Holds instance of active TextEditor from last observation.
     * @type {TextEditor}
     */
    _activeEditor = null;

    /**
     * Holds instance of this NavigationBar's emitter.
     * @type {Emitter}
     *
     * @access private
     */
    _emitter = new Emitter();

    /**
     * Holds currently selected Identifier on Dropdown boxes.
     * @type {Identifier}
     *
     * @access private
     */
    _selectedIdentifier = null;

    /**
     * Holds instance to NavigationBar's providers.
     * @type {ProviderRegistry}
     *
     * @access private
     */
    _providers = new ProviderRegistry();

    /**
     * Holds instance of {@link BehaviorManager} providing access for Behaviors.
     * @type {BehaviorManager}
     */
    _behaviorManager = new BehaviorManager(this);

    /**
     * Creates new NavigationBar instance.
     */
    constructor() {
        // Create the UI first
        this._view = atom.views.getView(this);
        
        const displayIdentifiers = new DisplayIdentifiersOnDropdownBoxes( this._behaviorManager );
        this._behaviorManager.registerBehavior( displayIdentifiers );
        this._behaviorManager.registerBehavior( new SelectIdentifierAtCursorPosition(this._behaviorManager, displayIdentifiers ) );
        this._behaviorManager.registerBehavior( new SortIdentifiersByAlphabet(this._behaviorManager, displayIdentifiers) );
        
        this.observeActiveTextEditor();

        this._emitter.emit( 'did-initialize', {navigationBar: this} );
    }

    /**
     * Releases all resources used by NavigationBar.
     */
    dispose() {
        this.getView().destroy();
        this._providers.dispose();
        this._behaviorManager.dispose();
        if( this._subscriptions ) this._subscriptions.dispose();
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
        this._activeEditor = null;
    }

    /**
     * Deactivates NavigationBar, stopping it's functionality.
     */
    deactivate() {
        this._active = false;

        if( this._subscriptions ) this._subscriptions.dispose();
        this._activeEditor = null;
        this._emitter.emit( 'did-deactivate', {navigationBar: this} );
    }

    /**
     * Notifies subscriber that NavigationBar is deactivated.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when Navigation bar is deactivated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidDeactivate( callback ) {
        return this._emitter.on( 'did-deactivate', callback );
    }

    /**
     * Activates NavigationBar, resuming it's functionality.
     */
    activate() {
        this._active = true;

        this.observeActiveTextEditor();
        this._emitter.emit( 'did-activate', {navigationBar: this} );
    }

    /**
     * Notifies subscriber that NavigationBar is activated.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when Navigation bar is activated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidActivate( callback ) {
        return this._emitter.on( 'did-activate', callback );
    }
    
    /**
     * Returns a boolean representing whether NavigationBar is active.
     * @return {boolean} True means active.
     */
    isActive() {
        return this._active;
    }

    /**
     * Starts observing changes in atom's active TextEditor.
     *
     * @access private
     */
    observeActiveTextEditor() {
        if( !this._active ) return;
        this._activeEditorSubscriptions = new CompositeDisposable();

        if( !this._subscriptions ) this._subscriptions = new CompositeDisposable();
        this._subscriptions.add( atom.workspace.observeActiveTextEditor( (textEditor) => {
            if( textEditor === undefined ) {
                // No TextEditor is curretly active
                this._activeEditor = null;
                if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();

                this._selectedIdentifier = null;
                this._emitter.emit( 'did-change-active-text-editor', {navigationBar: this, textEditor:textEditor} );
            } else if ( this._activeEditor !== textEditor ) {
                // Different TextEditor is now active
                this._activeEditor = textEditor;
                if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();

                if( !this._activeEditorSubscriptions ) this._activeEditorSubscriptions = new CompositeDisposable();
                this._activeEditorSubscriptions.add( textEditor.onDidSave( () => {
                    const provider = this.getProviderForTextEditor( textEditor );
                    if( provider ) provider.generateIdentifiers();
                    this._emitter.emit( 'did-change-active-text-editor', {navigationBar: this, textEditor:textEditor} );
                }));
                this._activeEditorSubscriptions.add( textEditor.onDidChangeGrammar( () => {
                    const provider = this.getProviderForTextEditor( textEditor );
                    if( provider ) provider.generateIdentifiers();
                    this._emitter.emit( 'did-change-active-text-editor', {navigationBar: this, textEditor:textEditor} );
                }));

                this._selectedIdentifier = null;
                const provider = this.getProviderForTextEditor( textEditor );
                if( provider ) provider.generateIdentifiers();
                this._emitter.emit( 'did-change-active-text-editor', {navigationBar: this, textEditor:textEditor} );
            }
            // Same TextEditor. Don't know why it would be fired with same TextEditor though.
        }));
    }

    /**
     * Returns Identifier which is serving as source for NavigationBar's dropdown boxes.
     * @return {Identifier} Selected identifier.
     */
    getSelectedIdentifier() {
        return this._selectedIdentifier;
    }

    /**
     * Sets `selectedIdentifier` as the Identifier to be source for dropdown boxes on NavigationBar.
     * @param {Identifier} selectedIdentifier
     */
    setSelectedIdentifier( selectedIdentifier ) {
        if( !this._active ) return;

        this._selectedIdentifier = selectedIdentifier;
        this._emitter.emit( 'did-change-selected-identifier', {navigationBar: this, selectedIdentifier: selectedIdentifier} );
    }

    /**
     * Notifies subscriber about change of Identifier selected on dropdown boxes.
     *
     * @param  {function(event: {navigationBar: NavigationBar, selectedIdentifier: Identifier})} callback Function to invoke when selected Identifier changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeSelectedIdentifier( callback ) {
        return this._emitter.on( 'did-change-selected-identifier', callback );
    }

    /**
     * Notifies subscriber about change of active TextEditor.
     *
     * @param  {function(event: {navigationBar: NavigationBar, textEditor: TextEditor})} callback Function to invoke when active TextEditor changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeActiveTextEditor( callback ) {
        return this._emitter.on( 'did-change-active-text-editor', callback );
    }

    /**
     * Returns view for this NavigationBar.
     * @return {NavigationBarView} The view.
     */
    getView() {
        return this._view;
    }

    /**
     * Returns IdentifierProvider for given `textEditor` or null if no provider is available for that grammar.
     * @param  {TextEditor} textEditor
     * @return {IdentifierProvider|null}
     */
    getProviderForTextEditor( textEditor ) {
        return this._providers.getProviderForTextEditor( textEditor );
    }

    /**
     * Notifies subscriber that NavigationBar finished it's initiation and is ready to be used.
     *
     * @param  {function(event: {navigationBar: NavigationBar})} callback Function to invoke when NavigationBar was initialized.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidInitialize( callback ) {
        return this._emitter.once( 'did-initialize', callback );
    }

    getActiveTextEditor() {
        return this._activeEditor;
    }
}
