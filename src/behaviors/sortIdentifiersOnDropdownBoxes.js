
import { TopScopeIdentifier, EmptyIdentifier, Identifier } from '../identifiers';

/**
 * Behavior giving options to sort {@link Identifier}s on DropdownBoxes by file position or alphabet.
 * Left and right DropdownBox has option separate, allowing to choose sorting mode for both DropdownBoxes
 * independently.
 *
 * @implements {Behavior}
 */
export class SortIdentifiersOnDropdownBoxes {
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
     */
    _displayIdentifiersOnDropdownBoxes = null;
    
    /**
     * Subscription to listener to {@link DisplayIdentifiersOnDropdownBoxes}'s `will-update-dropdown-boxes` event.
     * @type {Disposable}
     */
    _listenToWillUpdateDropdownBoxesSubscription = null;
    
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
    dispose() {
        // Run even if disposed, won't hurt...
        
        this.unregisterWillUpdateDropdownBoxesListener();
        
        this._disposed = true;
    }

    
    /**
     * Registers listener to {@link DisplayIdentifiersOnDropdownBoxes}'s `will-update-dropdown-boxes` event.
     * Unregisters any previous existing listener.
     * If object has been disposed of, this method has no effect.
     *
     * @private
     */
    registerWillUpdateDropdownBoxesListener() {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        this.unregisterWillUpdateDropdownBoxesListener();
        this._listenToWillUpdateDropdownBoxesSubscription = this._displayIdentifiersOnDropdownBoxes.onWillUpdateDropdownBoxes(
            ( willUpdateDropdownBoxesEvent ) => {
                this.sortIdentifiers( willUpdateDropdownBoxesEvent );
            },
            this,
            null
        );
    }
    
    /**
     * Unregisters listener to {@link DisplayIdentifiersOnDropdownBoxes}'s `will-update-dropdown-boxes` event.
     *
     * @private
     */
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
     * 
     * @param {function(parentIdentifiers: Array<Identifier>, childrenIdentifiers: Array<Identifier>, parentSelectedIndex: number, childrenSelectedIndex: number)} willUpdateDropdownBoxesEvent
     *
     * @private
     */
    sortIdentifiers( willUpdateDropdownBoxesEvent ) {
        if( this._disposed ) return;
        if( !this._behaviorActive ) return;
        
        const { parentIdentifiers, childrenIdentifiers, parentSelectedIndex, childrenSelectedIndex } = willUpdateDropdownBoxesEvent;
        
        // We use values provided by event, which might be changed, so we better do some checks...
        if( typeof parentIdentifiers !== 'object' || !Array.isArray( parentIdentifiers ) ) return;
        if( typeof childrenIdentifiers !== 'object' || !Array.isArray( childrenIdentifiers ) ) return;
        if( typeof parentSelectedIndex !== 'number' ) return;
        if( typeof childrenSelectedIndex !== 'number' ) return;
        if( parentSelectedIndex >= parentIdentifiers.length || parentSelectedIndex < 0 ) return;
        if( childrenSelectedIndex >= childrenIdentifiers.length || childrenSelectedIndex < 0 ) return;
        
        const selectedParentIdentifier = parentIdentifiers[parentSelectedIndex]; // Do not silence eslint
        const selectedChildrenIdentifier = childrenIdentifiers[childrenSelectedIndex]; // Do not silence eslint
        
        if( !(selectedParentIdentifier instanceof Identifier) ) return;
        if( !(selectedChildrenIdentifier instanceof Identifier) ) return;
        
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
        
        if( this.sortingModeForLeftDropdown === 'Alphabet' ) {
            willUpdateDropdownBoxesEvent.parentIdentifiers.sort( sortingFunction );
            
            // If array order changes, we need to update selected index to show the correct identifier on DropdownBox header...
            if( selectedParentIdentifier.getID() !== parentIdentifiers[parentSelectedIndex].getID() ) { // Do not silence eslint
                willUpdateDropdownBoxesEvent.parentSelectedIndex = parentIdentifiers.findIndex( (item) => { return selectedParentIdentifier.getID() === item.getID(); } );
            }
        }
        
        if( this.sortingModeForRightDropdown === 'Alphabet' ) {
            willUpdateDropdownBoxesEvent.childrenIdentifiers.sort( sortingFunction );
            
            // If array order changes, we need to update selected index to show the correct identifier on DropdownBox header...
            if( selectedChildrenIdentifier.getID() !== childrenIdentifiers[childrenSelectedIndex].getID() ) { // Do not silence eslint
                willUpdateDropdownBoxesEvent.childrenSelectedIndex = childrenIdentifiers.findIndex( (item) => { return selectedChildrenIdentifier.getID() === item.getID(); } );
            }
        }
    }
    
    /**
     * Behavior contract function returning Behavior's settings schema.
     * @return {object} Schema of Behavior's settings.
     */
    settings() {
        return {
            name: 'Sort identifiers by alphabet',
            config: {
                sortingModeForLeftDropdown: {
                    title: 'left:',
                    type: 'string',
                    default: 'File position',
                    enum: [
                        { value: 'File position', description: 'Sort Identifiers by how they appear in file.' },
                        { value: 'Alphabet', description: 'Sort Identifiers by Alphabet' },
                    ],
                    radio: true,
                    group: 'Sort:'
                },
                sortingModeForRightDropdown: {
                    title: 'right:',
                    type: 'string',
                    default: 'File position',
                    enum: [
                        { value: 'File position', description: 'Sort Identifiers by how they appear in file.' },
                        { value: 'Alphabet', description: 'Sort Identifiers by Alphabet' },
                    ],
                    radio: true,
                    group: 'Sort:'
                }
            }
        };
    }
    
    /**
     * Behavior contract function called when Behavior's settings are changed. Can be used when Behavior needs to
     * perform update right after settings are changed.
     * If object has been disposed of, this method has no effect.
     */
    settingsChanged() {
        if( this._disposed ) return;
        if( !this.activateBehavior ) return;
        
        this._displayIdentifiersOnDropdownBoxes.updateDropdownBoxes();
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
