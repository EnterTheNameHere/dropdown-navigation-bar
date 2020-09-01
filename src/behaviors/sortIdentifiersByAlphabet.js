/* global atom */

import { CompositeDisposable } from 'atom';

import { TopScopeIdentifier, EmptyIdentifier } from '../identifiers';

import { DisplayIdentifiersOnDropdownBoxes } from './displayIdentifiersOnDropdownBoxes';

export class SortIdentifiersByAlphabet {
    _behaviorManager = null;
    _displayIdentifiersOnDropdownBoxes = null;
    _subscriptions = null;
    _active = false;
    _behaviorActive = false;
    
    constructor( behaviorManager, displayIdentifiersOnDropdownBoxes ) {
        this._behaviorManager = behaviorManager;
        this._displayIdentifiersOnDropdownBoxes = displayIdentifiersOnDropdownBoxes;
        this.initialize();
    }
    
    hasToRunBefore() {
        return DisplayIdentifiersOnDropdownBoxes;
    }
    
    dispose() {
        this.saveSettings();
        
        this._subscriptions.dispose();
        this._subscriptions = null;
    }
    
    activateBehavior() {
        console.log('activateBehavior');
        if( this._behaviorActive ) return;
        
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
            
            console.log( 'sortLeft', this.sortLeft, 'sortRight', this.sortRight );
            
            if( this.sortLeft ) {
                event.parentIdentifiers.sort( sortingFunction );
            }
            
            if( this.sortRight ) {
                event.childrenIdentifiers.sort( sortingFunction );
            }
            
            if( !this.sortLeft && !this.sortRight ) {
                this.deactivateBehavior();
            }
        }, this ));
        
        this._behaviorActive = true;
    }
    
    deactivateBehavior() {
        console.log('deactivateBehavior');
        if( !this._behaviorActive ) return;
        
        if( this._subscriptions ) this._subscriptions.dispose();
        this._subscriptions = null;
        
        this._behaviorActive = false;
    }
    
    initialize() {
        const settings = this.settings();
        
        const stepIntoGroup = ( group ) => {
            for( const item of group.items ) {
                consumeItem( item );
            }
        };
        
        const consumeItem = ( item ) => {
            if( item.type === 'group' ) {
                stepIntoGroup( item );
            } else {
                this[item.property] = atom.config.get( `dropdown-navigation-bar.${item.keyPath}`, item.default );
                if( this[item.property] ) {
                    this.activateBehavior();
                }
                
                atom.config.onDidChange( `dropdown-navigation-bar.${item.keyPath}`, ({newValue}) => {
                    this[item.property] = newValue;
                    if( this[item.property] ) {
                        this.activateBehavior();
                    }
                    if( !this.sortLeft && !this.sortRight ) {
                        this.deactivateBehavior();
                    }
                    this._behaviorManager.getNavigationBarView().update();
                });
            }
        };
        
        for( const aSetting of settings ) {
            consumeItem( aSetting );
        }
    }
    
    settings() {
        return [
            {
                type: 'group',
                desc: 'Sort Identifiers by Alphabet:',
                items: [
                    {
                        shortDesc: 'on the left dropdown box',
                        keyPath: 'behaviors.sortIdentifiersByAlphabet.sortLeftDropdownBoxActive',
                        property: 'sortLeft',
                        default: false,
                        type: 'checkbox'
                    },
                    {
                        shortDesc: 'on the right dropdown box',
                        keyPath: 'behaviors.sortIdentifiersByAlphabet.sortRightDropdownBoxActive',
                        property: 'sortRight',
                        default: false,
                        type: 'checkbox'
                    }
                ]
            }
        ];
    }
    
    saveSettings() {
        const consumeItem = ( item ) => {
            if( item.type === 'group' ) {
                stepIntoGroup( item );
            }
            
            atom.config.set( `dropdown-navigation-bar.${item.keyPath}`, this[item.property] ?? item.default );
        };
        
        const stepIntoGroup = ( group ) => {
            for( const aSetting of group.items ) {
                consumeItem( aSetting );
            }
        };
        
        for( const aSetting of this.settings() ) {
            consumeItem( aSetting );
        }
    }
}
