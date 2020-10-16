
import { DisplayIdentifiersOnDropdownBoxes } from './displayIdentifiersOnDropdownBoxes';
import { EmptyIdentifier } from './../identifiers/emptyIdentifier';

export class JumpToIdentifierWhenItIsSelectedOnDropdownBox {
    /**
     * Holds instance of {@link BehaviorManager} this behavior is registered with.
     * @type {BehaviorManager}
     *
     * @private
     */
    _behaviorManager = null;
    
    /**
     * Boolean value representing whether this behavior is disposed of. It is not safe to change state of disposed object.
     * @type {boolean}
     *
     * @private
     */
    _disposed = false;
    
    /**
     * Boolean value representing whether this behavior is active, that is if it should perform it's behavior.
     * @type {boolean}
     *
     * @private
     */
    _behaviorActive = false;
    
    /**
     * Subscription to {@link BehaviorManager}'s `did-change-selected-identifier` event.
     * @type {Disposable|null}
     */
    _subscriptionToOnDidChangeSelectedIdentifier = null;
    
    /**
     * Creates new instance.
     * @param {BehaviorManager} behaviorManager BehaviorManager instance this behavior is registered with.
     */
    constructor( behaviorManager ) {
        this._behaviorManager = behaviorManager;
    }
    
    /**
     * Releases resources held by this behavior.
     */
    dispose() {
        // Wont hurt to run even if object is already disposed of...
        
        this._behaviorActive = false;
        this._disposed = true;
    }
    
    /**
     * Behavior contract function. Called when Behavior can perform it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    activateBehavior() {
        if( this._disposed || this._behaviorActive ) return;
        
        this._behaviorActive = true;
        
        this.registerOnDidChangeSelectedIdentifier();
    }
    
    /**
     * Behavior contract function. Called when Behavior must stop performing it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    deactivateBehavior() {
        if( this._disposed || !this._behaviorActive ) return;
        
        this._behaviorActive = false;
        
        this.unregisterOnDidChangeSelectedIdentifier();
    }
    
    /**
     * Registers to `did-change-selected-identifier` of {@link BehaviorManager} event.
     * If object has been disposed of, this method has no effect.
     * @throws {Error} if object is already disposed of.
     */
    registerOnDidChangeSelectedIdentifier() {
        if( this._disposed ) throw new Error('Trying to call function of object that is already disposed of!');
        if( !this._behaviorActive ) return;
        
        this._subscriptionToOnDidChangeSelectedIdentifier = this._behaviorManager.onDidChangeSelectedIdentifier(
            (evnt) => {
                // We want to act only on user input, not code input
                if( !evnt.selectedByUser ) return;
                
                const pos = evnt.selectedIdentifier instanceof EmptyIdentifier
                    ? evnt.selectedIdentifier.getEndPosition()
                    : evnt.selectedIdentifier.getStartPosition();
                
                if( pos ) {
                    evnt.selectedIdentifier.getTextEditor().setCursorBufferPosition( pos );
                }
            },
            this, // instance of this behavior
            { after: [ DisplayIdentifiersOnDropdownBoxes ] } // requirements for order - need to run after behavior ...
        );
    }
    
    /**
     * Unregisters listener registered with {@link this#registerOnDidChangeSelectedIdentifier}.
     */
    unregisterOnDidChangeSelectedIdentifier() {
        // Won't hurt to run even if disposed...
        
        if( this._subscriptionToOnDidChangeSelectedIdentifier ) {
            this._subscriptionToOnDidChangeSelectedIdentifier.dispose();
        }
        this._subscriptionToOnDidChangeSelectedIdentifier = null;
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
                name: 'Jump to identifier when it is selected on dropdown box'
            },
        ];
    }
}
