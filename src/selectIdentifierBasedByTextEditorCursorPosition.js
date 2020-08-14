
import { CompositeDisposable, Emitter } from 'atom';

export class SelectIdentifierBasedByTextEditorCursorPosition {
    _navigationBar = null;
    _subscriptions = new CompositeDisposable();
    _activeEditorSubscriptions = null;
    _activeEditor = null;
    _emitter = new Emitter();

    constructor( navigationBar ) {
        if( !navigationBar ) throw Error('navigationBar argument is required!');

        this._navigationBar = navigationBar;
        this._subscriptions.add( navigationBar.onDidInitialize( () => {
            this.initialize();
        }));
    }

    initialize() {
        console.log('initialize');
        if( !this._subscriptions ) this._subscriptions = new CompositeDisposable();
        this._activeEditor = null;
        this._activeEditorSubscriptions = null;

        this._subscriptions.add(
            this._navigationBar.onDidChangeActiveTextEditor( (event) => {
                const {textEditor} = event;
                console.log('onDidChangeActiveTextEditor');
                this.unregisterListenersForActiveTextEditor();
                this.setActiveTextEditor( textEditor );
                this.registerListenersForActiveTextEditor();
                this.selectIdentifierUnderCursor();
            })
        );

        this._subscriptions.add( this._navigationBar.onDidActivate( (event) => {
            const {navigationBar} = event;
            this.setActiveTextEditor( navigationBar.getActiveTextEditor() );
            this.registerListenersForActiveTextEditor();
            this.selectIdentifierUnderCursor();
        }));

        this._subscriptions.add( this._navigationBar.onDidDeactivate( () => {
            this.unregisterListenersForActiveTextEditor();
            this.setActiveTextEditor( null );
        }));

        this.setActiveTextEditor( this._navigationBar.getActiveTextEditor() );
        this.registerListenersForActiveTextEditor();
        this.selectIdentifierUnderCursor();

        this._emitter.emit( 'did-initialize', this );
    }

    /**
     * Sets active TextEditor to `textEditor`. Can be null if no TextEditor is active.
     * @param {TextEditor|null} textEditor Active TextEditor
     */
    setActiveTextEditor( textEditor ) {
        this._activeEditor = textEditor;
    }

    registerListenersForActiveTextEditor() {
        console.log('registerListenersForActiveTextEditor', this._activeEditor);
        if( !this._activeEditor ) return;
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
        this._activeEditorSubscriptions = new CompositeDisposable();

        this._activeEditorSubscriptions.add(
            this._activeEditor.onDidChangeCursorPosition(
                (event) => {
                    this.selectIdentifierUnderPosition( event.newBufferPosition );
                }
            )
        );
    }

    unregisterListenersForActiveTextEditor() {
        console.log('unregisterListenersForActiveTextEditor');
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
        this._activeEditorSubscriptions = null;
    }

    /**
     * Notifies subscriber that SelectIdentifierBasedByTextEditorCursorPosition
     * finished it's initiation and is ready to be used.
     *
     * @param  {function(event: object{sender: SelectIdentifierBasedByTextEditorCursorPosition})} callback Function to invoke when initialization is finished.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidInitialize( callback ) {
        this._emitter.on( 'did-initialize', callback );
    }

    dispose() {
        if( this._subscriptions ) this._subscriptions.dispose();
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
    }

    selectIdentifierUnderCursor() {
        if( !this._activeEditor ) return;

        this.selectIdentifierUnderPosition( this._activeEditor.getCursorBufferPosition() );
    }

    selectIdentifierUnderPosition( position ) {
        console.log('selectIdentifierUnderPosition');
        if( !this._activeEditor ) return;

        const provider = this._navigationBar.getProviderForTextEditor( this._activeEditor );
        if( provider ) {
            const identifier = provider.getIdentifierForPosition( position );
            this._navigationBar.setSelectedIdentifier( identifier );
        }
    }
}
