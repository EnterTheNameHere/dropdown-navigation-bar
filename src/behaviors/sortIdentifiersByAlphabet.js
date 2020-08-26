
import { CompositeDisposable } from 'atom';

import { TopScopeIdentifier, EmptyIdentifier } from '../identifiers';

import { DisplayIdentifiersOnDropdownBoxes } from './displayIdentifiersOnDropdownBoxes';

export class SortIdentifiersByAlphabet {
    _behaviorManager = null;
    _displayIdentifiersOnDropdownBoxes = null;
    _subscriptions = null;
    _active = false;
    
    constructor( behaviorManager, displayIdentifiersOnDropdownBoxes ) {
        this._behaviorManager = behaviorManager;
        this._displayIdentifiersOnDropdownBoxes = displayIdentifiersOnDropdownBoxes;
        this.initialize();
    }
    
    hasToRunBefore() {
        return DisplayIdentifiersOnDropdownBoxes;
    }
    
    dispose() {
        this._subscriptions.dispose();
        this._subscriptions = null;
    }
    
    initialize() {
        this._subscriptions = new CompositeDisposable();
        this._subscriptions.add( this._displayIdentifiersOnDropdownBoxes.onWillUpdateDropdownBoxes( (event) => {
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
            
            event.parentIdentifiers.sort( sortingFunction );
            event.childrenIdentifiers.sort( sortingFunction );
        }, this ));
    }
}
