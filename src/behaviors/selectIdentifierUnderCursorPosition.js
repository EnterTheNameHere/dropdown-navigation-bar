
import { CompositeDisposable } from 'atom';

export class SelectIdentifierUnderCursorPosition {
    _behaviorManager = null;
    _subscriptions = new CompositeDisposable();
    _activeEditorSubscriptions = null;
    _activeEditor = null;

    constructor( behaviorManager ) {
        if( !behaviorManager ) throw Error('behaviorManager argument is required!');

        this._behaviorManager = behaviorManager;
        this._subscriptions.add( behaviorManager.onDidNavigationBarInitialize( () => {
            this.initialize();
        }, this ));
    }

    initialize() {
        if( !this._subscriptions ) this._subscriptions = new CompositeDisposable();
        this._activeEditor = null;
        this._activeEditorSubscriptions = null;

        this._subscriptions.add(
            this._behaviorManager.onDidChangeActiveTextEditor( (event) => {
                console.log('SelectIdentifierUnderCursorPosition::onDidChangeActiveTextEditor');
                const {textEditor} = event;
                this.unregisterListenersForActiveTextEditor();
                this.setActiveTextEditor( textEditor );
                this.registerListenersForActiveTextEditor();
                this.selectIdentifierUnderCursor();
            }, this )
        );

        this._subscriptions.add( this._behaviorManager.onDidNavigationBarActivate( (event) => {
            const {navigationBar} = event;
            this.setActiveTextEditor( navigationBar.getActiveTextEditor() );
            this.registerListenersForActiveTextEditor();
            this.selectIdentifierUnderCursor();
        }, this ));

        this._subscriptions.add( this._behaviorManager.onDidNavigationBarDeactivate( () => {
            this.unregisterListenersForActiveTextEditor();
            this.setActiveTextEditor( null );
        }, this ));
        
        console.log('SelectIdentifierUnderCursorPosition::about to select first time');
        this.setActiveTextEditor( this._behaviorManager.getNavigationBar().getActiveTextEditor() );
        this.registerListenersForActiveTextEditor();
        this.selectIdentifierUnderCursor();
        console.log('SelectIdentifierUnderCursorPosition::initialize end');
    }
    
    hasToRunBefore() {
        return [];
    }

    /**
     * Sets active TextEditor to `textEditor`. Can be null if no TextEditor is active.
     * @param {TextEditor|null} textEditor Active TextEditor
     */
    setActiveTextEditor( textEditor ) {
        this._activeEditor = textEditor;
    }

    registerListenersForActiveTextEditor() {
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
        if( this._activeEditorSubscriptions ) this._activeEditorSubscriptions.dispose();
        this._activeEditorSubscriptions = null;
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
        if( !this._activeEditor ) return;

        const provider = this._behaviorManager.getNavigationBar().getProviderForTextEditor( this._activeEditor );
        if( provider ) {
            const identifier = provider.getIdentifierForPosition( position );
            this._behaviorManager.getNavigationBar().setSelectedIdentifier( identifier );
        }
    }
}
