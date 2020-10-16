
import { DisplayIdentifiersOnDropdownBoxes } from './displayIdentifiersOnDropdownBoxes';
import { SortIdentifiersByAlphabet } from './sortIdentifiersByAlphabet';

//import { logged } from './../debug';

export class SelectIdentifierAtCursorPosition {
    _disposed = false;
    _behaviorManager = null;
    _displayIdentifiersOnDropdownBoxes = null;
    _observeActiveTextEditorSubscription = null;
    _didChangeCursorPositionListenerSubscription = null;
    _didUpdateDropdownBoxesSubscription = null;
    _behaviorActive = false;
    _currentActiveTextEditor = null;
    
    /**
     * Creates new instance.
     * @param {BehaviorManager} behaviorManager
     */
    constructor( behaviorManager, displayIdentifiersOnDropdownBoxes ) {
        if( !behaviorManager ) throw Error('behaviorManager argument is required!');
        if( !displayIdentifiersOnDropdownBoxes ) throw Error('displayIdentifiersOnDropdownBoxes argument is required!');

        this._behaviorManager = behaviorManager;
        this._displayIdentifiersOnDropdownBoxes = displayIdentifiersOnDropdownBoxes;
    }
    
    /**
     * Behavior contract function. Behavior is told it can perform it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    activateBehavior() {
        if( this._disposed ) return;
        if( this._behaviorActive ) return;
        
        this._behaviorActive = true;
        
        //this.registerDidUpdateDropdownBoxesListener();
        this.startObservingChangeOfActiveTextEditor();
        this.selectIdentifierAtPosition();
    }
    
    /**
     * Behavior contract function. Behavior is told it must stop performing it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    deactivateBehavior() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this.stopObservingChangeOfActiveTextEditor();
        this.unregisterDidUpdateDropdownBoxesListener();
        this.unregisterDidChangeCursorPositionListener();
        
        this._behaviorActive = false;
    }
    
    /**
     * Releases resources held by this object.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    dispose() {
        // Run even if disposed, won't hurt...
        
        this.stopObservingChangeOfActiveTextEditor();
        this.unregisterDidUpdateDropdownBoxesListener();
        this.unregisterDidChangeCursorPositionListener();
        
        this._disposed = true;
    }
    
    /**
     * Registers listener for {@link DisplayIdentifiersOnDropdownBoxes} event `did-update-dropdown-boxes`.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    registerDidUpdateDropdownBoxesListener() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this._didUpdateDropdownBoxesSubscription = this._displayIdentifiersOnDropdownBoxes.odDidUpdateDropdownBoxes(
            () => {
                this.selectIdentifierAtPosition();
            },
            this,
            { after: SortIdentifiersByAlphabet }
        );
    }
    
    /**
     * Unregisters listener for event `did-update-dropdown-boxes` registered with
     * {@link this#registerDidUpdateDropdownBoxesListener}.
     *
     * @private
     */
    unregisterDidUpdateDropdownBoxesListener() {
        // Run even if disposed, won't hurt...
        
        if( this._didUpdateDropdownBoxesSubscription ) {
            this._didUpdateDropdownBoxesSubscription.dispose();
        }
        this._didUpdateDropdownBoxesSubscription = null;
    }
    
    /**
     * Registers listener on atom's active {@link TextEditor} for event `did-change-cursor-position`.
     * Does nothing if there is no active TextEditor.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    //@logged
    registerDidChangeCursorPositionListener() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        if( this._currentActiveTextEditor ) {
            this._didChangeCursorPositionListenerSubscription =
            this._currentActiveTextEditor.onDidChangeCursorPosition(
                ( changeCursorPositionEvent ) => {
                    this.selectIdentifierAtPosition( changeCursorPositionEvent.newBufferPosition );
                }
            );
        }
    }
    
    /**
     * Unregisters listener for event `did-change-cursor-position` registered with
     * {@link this#registerDidChangeCursorPositionListener}.
     *
     * @private
     */
    //@logged
    unregisterDidChangeCursorPositionListener() {
        // Run even if disposed, won't hurt...
        
        if( this._didChangeCursorPositionListenerSubscription ) {
            this._didChangeCursorPositionListenerSubscription.dispose();
        }
        this._didChangeCursorPositionListenerSubscription = null;
    }
    
    /**
     * Starts observing changing of atom's active {@link TextEditor} and registers/unregisters
     * listener to `did-change-cursor-position` event when the active TextEditor changes.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    //@logged
    startObservingChangeOfActiveTextEditor() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this._observeActiveTextEditorSubscription = this._behaviorManager.onDidChangeActiveTextEditor(
            ( {textEditor} ) => {
                if( textEditor ) {
                    if( this._currentActiveTextEditor !== textEditor ) {
                        this._currentActiveTextEditor = textEditor;
                        this.unregisterDidChangeCursorPositionListener();
                        this.registerDidChangeCursorPositionListener();
                        this.selectIdentifierAtPosition();
                    }
                } else {
                    this.unregisterDidChangeCursorPositionListener();
                }
            },
            this,
            { before: DisplayIdentifiersOnDropdownBoxes, after: SortIdentifiersByAlphabet }
        );
    }
    
    /**
     * Stops observing changing of atom's active {@link TextEditor}, started with
     * {@link this#startObservingChangeOfActiveTextEditor}.
     *
     * @private
     */
    //@logged
    stopObservingChangeOfActiveTextEditor() {
        // Run even if disposed, won't hurt...
        
        if( this._observeActiveTextEditorSubscription ) {
            this._observeActiveTextEditorSubscription.dispose();
        }
        this._observeActiveTextEditorSubscription = null;
    }
    
    /**
     * Selects {@link Identifier} at `position` on {@link NavigationBar}'s {@link DropdownBox}.
     * If no `position` is set, Cursor's position is used.
     * If object has been disposed of, this method has no effect.
     *
     * @param {Point} [position] Position in atom's TextEditor; Cursor's position if not set.
     */
    selectIdentifierAtPosition( position ) {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        if( this._currentActiveTextEditor ) {
            const provider = this._behaviorManager.getProviderForActiveTextEditor();
            // Without IdentifiersProvider no Identifiers will be available...
            if( !provider ) return;
            
            if( position === undefined ) {
                position = this._currentActiveTextEditor.getCursorBufferPosition();
            }
            
            const identifier = provider.getIdentifierForPosition( position );
            this._behaviorManager.getNavigationBar().setSelectedIdentifier( identifier );
        }
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
                type: 'behavior',
                name: 'Select identifier at cursor position'
            },
        ];
    }
}
