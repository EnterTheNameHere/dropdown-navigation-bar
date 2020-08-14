/* global atom */

import { CompositeDisposable, Emitter } from 'atom'; // eslint-disable-line import/no-unresolved
import { ProviderRegistry } from './providerRegistry';

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
    _previousActiveEditor = null;

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
     * Creates new NavigationBar instance.
     */
    constructor() {
        // Create the UI first
        this._view = atom.views.getView(this);

        this.observeActiveTextEditor();
    }

    /**
     * Releases all resources used by NavigationBar.
     */
    destroy() {
        this.getView().destroy();
        this._providers.destroy();
        if( this._subscriptions ) this._subscriptions.dispose();
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
        this._previousActiveEditor = null;
    }

    /**
     * Deactivates NavigationBar, stopping it's functionality.
     */
    deactivate() {
        this._active = false;

        if( this._subscriptions ) this._subscriptions.dispose();
        this._previousActiveEditor = null;
        this._emitter.emit( 'did-deactivate' );
    }

    /**
     * Notifies subscriber that NavigationBar is deactivated.
     *
     * @param  {Function} callback Function to invoke when Navigation bar is deactivated.
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
        this._emitter.emit( 'did-activate' );
    }

    /**
     * Notifies subscriber that NavigationBar is activated.
     *
     * @param  {Function} callback Function to invoke when Navigation bar is activated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidActivate( callback ) {
        return this._emitter.on( 'did-activate', callback );
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
            //console.log('NavigationBar::observeActiveTextEditor', textEditor);
            if( textEditor === undefined ) {
                // No TextEditor is curretly active
                this._previousActiveEditor = null;
                if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();

                this._selectedIdentifier = null;
                this._emitter.emit( 'did-change-active-text-editor' );
            } else if ( this._previousActiveEditor !== textEditor ) {
                // Different TextEditor is now active
                this._previousActiveEditor = textEditor;
                if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();

                if( !this._activeEditorSubscriptions ) this._activeEditorSubscriptions = new CompositeDisposable();
                this._activeEditorSubscriptions.add( textEditor.onDidSave( () => {
                    const provider = this.getProviderForTextEditor( textEditor );
                    if( provider ) provider.generateIdentifiers();
                    this._emitter.emit( 'did-change-active-text-editor' );
                }));
                this._activeEditorSubscriptions.add( textEditor.onDidChangeGrammar( () => {
                    const provider = this.getProviderForTextEditor( textEditor );
                    if( provider ) provider.generateIdentifiers();
                    this._emitter.emit( 'did-change-active-text-editor' );
                }));

                this._selectedIdentifier = null;
                const provider = this.getProviderForTextEditor( textEditor );
                if( provider ) provider.generateIdentifiers();
                this._emitter.emit( 'did-change-active-text-editor' );
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
        this._emitter.emit( 'did-change-selected-identifier' );
    }

    /**
     * Notifies subscriber about change of Identifier selected on dropdown boxes.
     *
     * @param  {Function} callback Function to invoke when selected Identifier changes.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidChangeSelectedIdentifier( callback ) {
        return this._emitter.on( 'did-change-selected-identifier', callback );
    }

    /**
     * Notifies subscriber about change of active TextEditor.
     *
     * @param  {Function} callback Function to invoke when active TextEditor changes.
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
}
