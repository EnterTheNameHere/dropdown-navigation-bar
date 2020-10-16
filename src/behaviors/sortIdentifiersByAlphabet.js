
import { TopScopeIdentifier, EmptyIdentifier } from '../identifiers';

//import { logged } from './../debug';

export class SortIdentifiersByAlphabet {
    _behaviorManager = null;
    _displayIdentifiersOnDropdownBoxes = null;
    _listenToWillUpdateDropdownBoxesSubscription = null;
    _behaviorActive = false;
    _disposed = false;
    
    /**
     * Creates new instance.
     * @param {BehaviorManager} behaviorManager
     * @param {DisplayIdentifiersOnDropdownBoxes} displayIdentifiersOnDropdownBoxes
     */
    constructor( behaviorManager, displayIdentifiersOnDropdownBoxes ) {
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
        
        this.registerWillUpdateDropdownBoxesListener();
    }
    
    /**
     * Behavior contract function. Behavior is told it must stop performing it's behavior.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    deactivateBehavior() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this.unregisterWillUpdateDropdownBoxesListener();
        
        this._behaviorActive = false;
    }
    
    /**
     * Releases resources held by this object.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    dispose() {
        // Run even if disposed, won't hurt...
        
        this.unregisterWillUpdateDropdownBoxesListener();
        
        this._disposed = true;
    }

    
    /**
     * Registers listener to {@link DisplayIdentifiersOnDropdownBoxes}'s `will-update-dropdown-boxes` event.
     * Unregisters any previous existing listener.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    registerWillUpdateDropdownBoxesListener() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this.unregisterWillUpdateDropdownBoxesListener();
        this._listenToWillUpdateDropdownBoxesSubscription = this._displayIdentifiersOnDropdownBoxes.onWillUpdateDropdownBoxes(
            ( willUpdateDropdownBoxesEvent ) => {
                this.sortIdentifiersByAlphabet( willUpdateDropdownBoxesEvent );
            },
            this,
            null
        );
    }
    
    /**
     * Unregisters listener to {@link DisplayIdentifiersOnDropdownBoxes}'s `will-update-dropdown-boxes` event.
     */
    //@logged
    unregisterWillUpdateDropdownBoxesListener() {
        // Run even if disposed, won't hurt...
        
        if( this._listenToWillUpdateDropdownBoxesSubscription ) {
            this._listenToWillUpdateDropdownBoxesSubscription.dispose();
        }
        this._listenToWillUpdateDropdownBoxesSubscription = null;
    }
    
    /**
     * Sorts {@link Identifier}s by alphabet. Supply {@link DisplayIdentifiersOnDropdownBoxes}'s
     * `will-update-dropdown-boxes` event to the function.
     * @param {function(parentIdentifiers: Array, childrenIdentifiers: Array>)} willUpdateDropdownBoxesEvent
     */
    //@logged
    sortIdentifiersByAlphabet( willUpdateDropdownBoxesEvent ) {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        // Sort the identifiers by alphabet
        // What to skip: TopScopeIdentifier, EmptyIdentifier - those are always on top...
        // param kind are not to be sorted!
        const sortingFunction = ( first, second ) => {
            // TopScopeIdentifier is always top
            if( first instanceof TopScopeIdentifier ) {
                return -1;
            } else if ( second instanceof TopScopeIdentifier ) {
                return 1; // Shouldn't really happen, but to be sure...
            }
            
            // EmptyIdentifier is always top
            if( first instanceof EmptyIdentifier ) {
                return -1;
            } else if ( second instanceof EmptyIdentifier ) {
                return 1; // Shouldn't really happen either, but to be sure too...
            }
            
            // Ignore param kind
            if( typeof first.hasKind === 'function'
                && typeof second.hasKind === 'function' ) {
                if( first.hasKind('param') || second.hasKind('param') ) {
                    // Do not sort
                    return 0;
                }
            }
            
            // Normal sorting
            if( typeof first.getName === 'function'
                && typeof second.getName === 'function' ) {
                const firstName = first.getName();
                const secondName = second.getName();
                
                if( firstName < secondName ) return -1;
                if( firstName > secondName ) return 1;
            }
            
            // Equal or unable to sort
            return 0;
        };
        
        console.debug( 'sortLeft', this.sortLeft, 'sortRight', this.sortRight );
        
        if( this.sortLeft ) {
            willUpdateDropdownBoxesEvent.parentIdentifiers.sort( sortingFunction );
        }
        
        if( this.sortRight ) {
            willUpdateDropdownBoxesEvent.childrenIdentifiers.sort( sortingFunction );
        }
        
        if( !this.sortLeft && !this.sortRight ) {
            this.deactivateBehavior();
        }
    }
    
    /**
     * Behavior contract function returning Behavior's settings schema.
     * @return {object|Array<object>} Schema of Behavior's settings.
     */
    //@logged
    settings() {
        return [
            {
                type: 'group',
                text: 'Sort Identifiers by Alphabet:',
                items: [
                    {
                        text: 'on the left dropdown box',
                        keyPath: 'sortIdentifiersByAlphabet.sortLeftDropdownBoxActive',
                        property: 'sortLeft',
                        default: false,
                        type: 'checkbox'
                    },
                    {
                        text: 'on the right dropdown box',
                        keyPath: 'sortIdentifiersByAlphabet.sortRightDropdownBoxActive',
                        property: 'sortRight',
                        default: false,
                        type: 'checkbox'
                    }
                ]
            }
        ];
    }
    
    /**
     * Behavior contract function called when Behavior's settings are changed. Can be used when Behavior needs to
     * perform update right after settings are changed.
     * If object has been disposed of, this method has no effect.
     */
    //@logged
    settingsChanged() {
        if( this._disposed ) return;
        if( !this.activateBehavior ) return;
        
        this._displayIdentifiersOnDropdownBoxes.updateDropdownBoxes();
    }
}
