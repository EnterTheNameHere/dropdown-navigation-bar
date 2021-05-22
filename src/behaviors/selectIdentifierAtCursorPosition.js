
import { DisplayIdentifiersOnDropdownBoxes } from './displayIdentifiersOnDropdownBoxes';
import { SortIdentifiersOnDropdownBoxes } from './sortIdentifiersOnDropdownBoxes';

/**
 * Behavior selecting {@link Identifier} under {@link TextEditor}'s cursor if it's available on DropdownBoxes.
 * If cursor is inside a method, it will select corresponding method {@link Identifier} on DropdownBox.
 *
 * @implements {Behavior}
 */
export class SelectIdentifierAtCursorPosition {
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
     * Boolean value representing whether this behavior is disposed of. It is not safe to change state of disposed object.
     * @type {boolean}
     *
     * @private
     */
    _disposed = false;
    
    /**
     * Holds instance of {@link DisplayIdentifiersOnDropdownBoxes} this Behavior is connected to.
     * @type {DisplayIdentifiersOnDropdownBoxes}
     *
     * @private
     */
    _displayIdentifiersOnDropdownBoxes = null;
    
    /**
     * Subscription to {@link BehaviorManager}'s `did-change-active-text-editor` event.
     * @type {Disposable}
     *
     * @private
     */
    _observeActiveTextEditorSubscription = null;
    
    /**
     * Subscription to listener to active {@link TextEditor}'s `did-change-cursor-position` event.
     * @type {Disposable}
     *
     * @private
     */
    _didChangeCursorPositionListenerSubscription = null;
    
    /**
     * Subscription to listener to {@link DisplayIdentifiersOnDropdownBoxes}'s `will-update-dropdown-boxes` event.
     * @type {Disposable}
     *
     * @private
     */
    _didUpdateDropdownBoxesSubscription = null;
    
    /**
     * Holds instance to active {@link TextEditor}.
     * @type {TextEditor}
     *
     * @private
     */
    _currentActiveTextEditor = null;
    
    /**
     * Creates new instance.
     * @param {BehaviorManager} behaviorManager
     * @param {DisplayIdentifiersOnDropdownBoxes} displayIdentifiersOnDropdownBoxes
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
     */
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
            { after: SortIdentifiersOnDropdownBoxes }
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
            { before: DisplayIdentifiersOnDropdownBoxes, after: SortIdentifiersOnDropdownBoxes }
        );
    }
    
    /**
     * Stops observing changing of atom's active {@link TextEditor}, started with
     * {@link this#startObservingChangeOfActiveTextEditor}.
     *
     * @private
     */
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
    async selectIdentifierAtPosition( position ) {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        if( this._currentActiveTextEditor ) {
            const provider = await this._behaviorManager.getProviderForActiveTextEditor();
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
     * @return {object} Schema of Behavior's settings.
     */
    settings() {
        return {
            name: 'Select identifier at cursor position'
        };
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
