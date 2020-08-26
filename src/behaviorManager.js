
import { BehaviorManagerEmitter } from './behaviorManagerEmitter';

export class BehaviorManager {
    _emitter = new BehaviorManagerEmitter();
    _disposed = false;
    _navigationBar = null;
    _behaviors = new Set();
    
    _IdentifiersProviderForActiveTextEditor = null;
    
    _subscriptionToOnNavigationBarInitialize = null;
    _subscriptionToOnNavigationBarActivate = null;
    _subscriptionToOnNavigationBarDeactivate = null;
    _subscriptionToOnDidChangeActiveTextEditor = null;
    _subscriptionToOnDidGenerateIdentifiers = null;
    _subscriptionToOnDidChangeSelectedIdentifier = null;
    
    constructor( navigationBar ) {
        this._navigationBar = navigationBar;
        
        this._subscriptionToOnNavigationBarInitialize
        = this._navigationBar.onDidInitialize( ( event ) => {
                this.initialize( event );
            });
    }
    
    /**
     * Alias for {@link BehaviorManager#dispose}.
     */
    destroy() {
        this.dispose();
    }
    
    /**
     * Disposes of all resources owned by the instance of this class. Does nothing if object is already disposed of.
     */
    dispose() {
        if( this._disposed ) return;
        
        this._emitter.dispose();
        
        for( const behavior of this._behaviors ) {
            if( Object.prototype.hasOwnProperty.call( behavior, 'dispose' ) ) {
                behavior.dispose();
            }
        }
        
        if( this._subscriptionToOnNavigationBarInitialize ) {
            this._subscriptionToOnNavigationBarInitialize.dispose();
            this._subscriptionToOnNavigationBarInitialize = null;
        }
        
        if( this._subscriptionToOnNavigationBarActivate ) {
            this._subscriptionToOnNavigationBarActivate.dispose();
            this._subscriptionToOnNavigationBarActivate = null;
        }
        
        if( this._subscriptionToOnNavigationBarDeactivate ) {
            this._subscriptionToOnNavigationBarDeactivate.dispose();
            this._subscriptionToOnNavigationBarDeactivate = null;
        }
        
        if( this._subscriptionToOnDidChangeActiveTextEditor ) {
            this._subscriptionToOnDidChangeActiveTextEditor.dispose();
            this._subscriptionToOnDidChangeActiveTextEditor = null;
        }
        
        if( this._subscriptionToOnDidGenerateIdentifiers ) {
            this._subscriptionToOnDidGenerateIdentifiers.dispose();
            this._subscriptionToOnDidGenerateIdentifiers = null;
        }
        
        if( this._subscriptionToOnDidChangeSelectedIdentifier ) {
            this._subscriptionToOnDidChangeSelectedIdentifier.dispose();
            this._subscriptionToOnDidChangeSelectedIdentifier = null;
        }
        
        this._disposed = true;
    }
    
    initialize( initializeEvent ) {
        if( this._disposed ) return;
        
        this._subscriptionToOnNavigationBarActivate =
        this._navigationBar.onDidActivate(
            ( event ) => {
                console.log('BehaviorManager::onDidActivate');
                this._emitter.emit( 'did-navigation-bar-activate', event );
            }
        );
        
        this._subscriptionToOnNavigationBarDeactivate =
        this._navigationBar.onDidDeactivate(
            ( event ) => {
                console.log('BehaviorManager::onDidDeactivate');
                this._emitter.emit( 'did-navigation-bar-deactivate', event );
            }
        );
        
        this._subscriptionToOnDidChangeActiveTextEditor =
        this._navigationBar.onDidChangeActiveTextEditor(
            ( event ) => {
                console.log('BehaviorManager::onDidChangeActiveTextEditor');
                const {textEditor} = event;
                
                if( this._subscriptionToOnDidChangeSelectedIdentifier ) {
                    this._subscriptionToOnDidChangeSelectedIdentifier.dispose();
                    this._subscriptionToOnDidChangeSelectedIdentifier = null;
                }
                
                if( this._subscriptionToOnDidGenerateIdentifiers ) {
                    this._subscriptionToOnDidGenerateIdentifiers.dispose();
                    this._subscriptionToOnDidGenerateIdentifiers = null;
                }
                
                this._activeTextEditor = null;
                this._activeTextEditorIdentifiersProvider = null;
                
                if( textEditor ) {
                    this._activeTextEditor = textEditor;
                    const provider = this.getProviderForActiveTextEditor();
                    
                    this._subscriptionToOnDidGenerateIdentifiers =
                        provider.onDidGenerateIdentifiers(
                            ( event1 ) => {
                                console.log('BehaviorManager::onDidGenerateIdentifiers');
                                this._emitter.emit( 'did-generate-identifiers', event1 );
                            }
                        );
                                    
                    this._subscriptionToOnDidChangeSelectedIdentifier =
                        this._navigationBar.onDidChangeSelectedIdentifier(
                            ( event2 ) => {
                                console.log('BehaviorManager::onDidChangeSelectedIdentifier');
                                this._emitter.emit( 'did-change-selected-identifier', event2 );
                            }
                        );
                }
                
                this._emitter.emit( 'did-change-active-text-editor', event );
            }
        );
        
        console.log('BehaviorManager::did-navigation-bar-initialize');
        this._emitter.emit( 'did-navigation-bar-initialize', initializeEvent );
    }
    
    /**
     * Returns atom's currently active {@link TextEditor}. Can be undefined if no
     * TextEditor is active or BehaviorManager is disposed.
     * @return {TextEditor|undefined} Currently active TextEditor
     */
    getActiveTextEditor() {
        if( this._disposed ) return undefined;
        
        return this._navigationBar.getActiveTextEditor();
    }
    
    /**
     * Returns IdentifiersProvider for atom's currently active {@link TextEditor}. Can
     * be null if no {@link TextEditor} is currently active or BehaviorManager is disposed.
     * @return {IdentifiersProvider|null} IdentifiersProvider for currently active TextEditor
     */
    getProviderForActiveTextEditor() {
        if( this._disposed ) return null;
        
        return this._navigationBar.getProviderForTextEditor( this.getActiveTextEditor() );
    }
    
    /**
     * Returns {@link NavigationBar} this BehaviorManager belongs to.
     * @return {NavigationBar} NavigationBar
     */
    getNavigationBar() {
        if( this._disposed ) return;
        
        return this._navigationBar;
    }
    
    /**
     * Returns {@link NavigationBarView} for NavigationBar this BehaviorManager
     * belongs to or null if BehaviorManager is disposed.
     * @return {NavigationBarView|null} View for NavigationBar
     */
    getNavigationBarView() {
        if( this._disposed ) return null;
        
        return this._navigationBar.getView();
    }
    
    /**
     * Registers behavior instance.
     * @param {object} behavior Instance of object implementing a behavior.
     * @returns {BehaviorManager} Chainable.
     */
    registerBehavior( behavior ) {
        if( this._disposed ) return;
        
        this._behaviors.add( behavior );
        return this;
    }
    
    /**
     * Unregisters behavior instance.
     * @param  {object} behavior Previously registered behavior.
     * @return {BehaviorManager} Chainable.
     */
    unregisterBehavior( behavior ) {
        if( this._disposed ) return;
        
        this._behaviors.remove( behavior );
        return this;
    }
    
    onDidNavigationBarInitialize( callback, behaviorInstance ) {
        if( this._disposed ) return;
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-navigation-bar-initialize', callback, behaviorInstance );
    }
    
    onDidNavigationBarActivate( callback, behaviorInstance ) {
        if( this._disposed ) return;
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-navigation-bar-activate', callback, behaviorInstance );
    }
    
    onDidNavigationBarDeactivate( callback, behaviorInstance ) {
        if( this._disposed ) return;
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-navigation-bar-deactivate', callback, behaviorInstance );
    }
    
    onDidChangeActiveTextEditor( callback, behaviorInstance ) {
        if( this._disposed ) return;
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-change-active-text-editor', callback, behaviorInstance );
    }
    
    onDidGenerateIdentifiers( callback, behaviorInstance ) {
        if( this._disposed ) return;
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-generate-identifiers', callback, behaviorInstance );
    }
    
    onDidChangeSelectedIdentifier( callback, behaviorInstance ) {
        if( this._disposed ) return;
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-change-selected-identifier', callback, behaviorInstance );
    }
}
