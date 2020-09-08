
import { CompositeDisposable } from 'atom';
import { BehaviorManagerEmitter } from './behaviorManagerEmitter';
import { BehaviorSettingsManager } from './behaviorSettingsManager';

import { logged } from './debug';

export class Behavior {
    initialize() {}
    dispose() {}
    activateBehavior() {}
    deactivateBehavior() {}
    settings() {}
}

/**
 * Manages {@link Behavior}'s defining how {@link NavigationBar} should behave, like displaying {@link Identifier}s
 * on it's {@link DropdownBox}es implemented in {@link DisplayIdentifiersOnDropdownBoxes}. Behaviors should use
 * this class to access {@link NavigationBar}'s and {@link IdentifiersProvider}'s properties and register to their
 * events.
 */
export class BehaviorManager {
    /**
     * Holds a custom {@link Emitter} allowing controlled order of event firing.
     * @type {BehaviorManagerEmitter}
     */
    _emitter = new BehaviorManagerEmitter();
    
    /**
     * Boolean representing if this BehaviorManager is disposed of.
     * @type {boolean}
     */
    _disposed = false;
    
    /**
     * Holds {@link NavigationBar} this BehaviorManager is assigned to.
     * @type {NavigationBar}
     */
    _navigationBar = null;
    
    /**
     * Holds {@link Behavior}s registered.
     * @type {Set}
     */
    _behaviors = new Set();
    
    /**
     * Holds {@link BehaviorSettingsManager} assigned to this BehaviorManager.
     * @type {BehaviorSettingsManager}
     */
    _settings = new BehaviorSettingsManager();
    
    /**
     * Holds subscriptions of BehaviorManager which are alive through this BehaviorManager's life.
     * @type {CompositeDisposable}
     */
    _subscriptions = new CompositeDisposable();
    
    /**
     * Subscription to {@link NavigationBar}'s did-initialize event.
     * @type {Disposable}
     */
    _subscriptionToOnNavigationBarInitialize = null;
    
    /**
     * Subscription to active editor's {@link IdentifiersProvider} did-generate-identifiers event. Changes when
     * Atom's active {@link TextEditor} changes.
     * @type {Disposable}
     */
    _subscriptionToOnDidGenerateIdentifiers = null;
    
    /**
     * Subscription to {@NavigationBar}'s did-change-selected-identifier event. Changes when Atom's active
     * {@link TextEditor} changes.
     * @type {Disposable}
     */
    _subscriptionToOnDidChangeSelectedIdentifier = null;
    
    /**
     * Creates new instance of BehaviorManager assigned to `navigationBar`.
     *
     * @param {NavigationBar} navigationBar NavigationBar instance to which this BehaviorManager will be assigned to.
     */
    constructor( navigationBar ) {
        this._navigationBar = navigationBar;
        
        this._subscriptionToOnNavigationBarInitialize =
            this._navigationBar.onDidInitialize(( navigationBarInitializeEvent ) => {
                this.initialize( navigationBarInitializeEvent );
            });
    }
    
    /**
     * Disposes of all resources owned by the instance of this class.
     * If object has been disposed of, this method has no effect.
     */
    @logged
    dispose() {
        if( this._disposed ) return;
        
        this._emitter.dispose();
        
        for( const behavior of this._behaviors ) {
            if( typeof behavior.deactivateBehavior === 'function' ) {
                behavior.deactivateBehavior();
            }
            if( typeof behavior.dispose === 'function' ) {
                behavior.dispose();
            }
        }
        
        if( this._subscriptionToOnNavigationBarInitialize ) {
            this._subscriptionToOnNavigationBarInitialize.dispose();
            this._subscriptionToOnNavigationBarInitialize = null;
        }
        
        if( this._subscriptionToOnDidGenerateIdentifiers ) {
            this._subscriptionToOnDidGenerateIdentifiers.dispose();
            this._subscriptionToOnDidGenerateIdentifiers = null;
        }
        
        if( this._subscriptionToOnDidChangeSelectedIdentifier ) {
            this._subscriptionToOnDidChangeSelectedIdentifier.dispose();
            this._subscriptionToOnDidChangeSelectedIdentifier = null;
        }
        
        this._subscriptions.dispose();
        this._subscriptions = null;
        
        this._disposed = true;
    }
    
    /**
     * Initializes BehaviorManager after {@link NavigationBar} finished initialization.
     * If object has been disposed of, this method has no effect.
     *
     * @param {function(ev: {navigationBar: NavigationBar})} navigationBarInitializeEvent
     *
     * @private
     */
    @logged
    initialize( navigationBarInitializeEvent ) {
        if( this._disposed ) return;
        
        this._subscriptions.add(
            this._navigationBar.onDidActivate(( activateEvent ) => {
                console.debug('BehaviorManager::onDidActivate');
                this._emitter.emit( 'did-navigation-bar-activate', activateEvent );
            })
        );
        
        this._subscriptions.add(
            this._navigationBar.onDidDeactivate(( deactivateEvent ) => {
                console.debug('BehaviorManager::onDidDeactivate');
                this._emitter.emit( 'did-navigation-bar-deactivate', deactivateEvent );
            })
        );
        
        this._subscriptions.add(
            this._navigationBar.onDidChangeActiveTextEditor(( changeActiveTextEditorEvent ) => {
                console.debug('BehaviorManager::<anon>onDidChangeActiveTextEditor');
                
                const textEditor = changeActiveTextEditorEvent.textEditor;
                
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
                    
                    if( provider ) {
                        this._subscriptionToOnDidGenerateIdentifiers =
                            provider.onDidGenerateIdentifiers(( generateIdentifiersEvent ) => {
                                console.debug('BehaviorManager::<anon>onDidGenerateIdentifiers');
                                
                                this._emitter.emit( 'did-generate-identifiers', generateIdentifiersEvent );
                            });
                    }
                                    
                    this._subscriptionToOnDidChangeSelectedIdentifier =
                        this._navigationBar.onDidChangeSelectedIdentifier(( changeSelectedIdentifierEvent ) => {
                            console.debug('BehaviorManager::<anon>onDidChangeSelectedIdentifier');
                            
                            this._emitter.emit( 'did-change-selected-identifier', changeSelectedIdentifierEvent );
                        });
                }
                
                this._emitter.emit( 'did-change-active-text-editor', changeActiveTextEditorEvent );
            })
        );
        
        this._emitter.emit( 'did-navigation-bar-initialize', navigationBarInitializeEvent );
    }
    
    /**
     * Returns atom's currently active {@link TextEditor} or undefined if no TextEditor is active.
     *
     * @return {TextEditor|undefined} Currently active TextEditor
     */
    @logged
    getActiveTextEditor() {
        return this._navigationBar.getActiveTextEditor();
    }
    
    /**
     * Returns {@link IdentifiersProvider} for atom's currently active {@link TextEditor} or null if no
     * {@link TextEditor} is active or no {@link IdentifiersProvider} is available.
     *
     * @return {IdentifiersProvider|null} IdentifiersProvider for currently active TextEditor or null.
     */
    @logged
    getProviderForActiveTextEditor() {
        return this._navigationBar.getProviderForTextEditor( this.getActiveTextEditor() );
    }
    
    /**
     * Returns {@link NavigationBar} this BehaviorManager is assigned to.
     *
     * @return {NavigationBar} NavigationBar.
     */
    @logged
    getNavigationBar() {
        return this._navigationBar;
    }
    
    /**
     * Returns {@link NavigationBarView} for {@link NavigationBar} this BehaviorManager is assigned to.
     *
     * @return {NavigationBarView} View for NavigationBar.
     */
    @logged
    getNavigationBarView() {
        return this._navigationBar.getView();
    }
    
    /**
     * Registers behavior instance.
     * If object has been disposed of, this method has no effect.
     *
     * @param {object} behavior Instance of object implementing a behavior.
     * @returns {BehaviorManager} Chainable.
     */
    @logged
    registerBehavior( behavior ) {
        if( this._disposed ) return this;
        
        this._behaviors.add( behavior );
        this._settings.registerBehavior( behavior );
        
        if( typeof behavior.activateBehavior === 'function' ) {
            behavior.activateBehavior();
        }
        
        return this;
    }
    
    /**
     * Unregisters behavior instance.
     * If object has been disposed of, this method has no effect.
     *
     * @param  {object} behavior Previously registered behavior.
     * @return {BehaviorManager} Chainable.
     */
    @logged
    unregisterBehavior( behavior ) {
        if( this._disposed ) return this;
        
        if( typeof behavior.deactivateBehavior === 'function' ) {
            behavior.deactivateBehavior();
        }
        
        this._settings.unregisterBehavior( behavior );
        this._behaviors.remove( behavior );
        
        return this;
    }
    
    /**
     * Notifies subscriber that {@link NavigationBar} was activated.
     *
     * @param  {function(callback: function, behaviorInstance: Behavior)} callback Function to invoke when NavigationBar was activated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     * @throws {Error} If object is already disposed of.
     */
    onDidNavigationBarActivate() {
        throw new Error('onDidNavigationBarActivate is obsolete');
    }
    
    /**
     * Notifies subscriber that {@link NavigationBar} was deactivated.
     *
     * @param  {function(callback: function, behaviorInstance: Behavior)} callback Function to invoke when NavigationBar was deactivated.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     * @throws {Error} If object is already disposed of.
     */
    onDidNavigationBarDeactivate() {
        throw new Error('onDidNavigationBarDeactivate is obsolete');
    }
    
    /**
     * Notifies subscriber that atom's active {@link TextEditor} has changed.
     *
     * @param  {function(callback: function, behaviorInstance: Behavior)} callback Function to invoke when atom's active {@link TextEditor} has changed.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     * @throws {Error} If object is already disposed of.
     */
    onDidChangeActiveTextEditor( callback, behaviorInstance ) {
        if( this._disposed ) throw new Error('Trying to call function of object that is already disposed of!');
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-change-active-text-editor', callback, behaviorInstance );
    }
    
    /**
     * Notifies subscriber when {@link IdentifiersProvider} of atom's active {@link TextEditor} has
     * generated {@Identifier}s.
     *
     * @param  {function(callback: function, behaviorInstance: Behavior)} callback Function to invoke when {@link IdentifiersProvider} of atom's active {@link TextEditor} has generated {@Identifier}s.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     * @throws {Error} If object is already disposed of.
     */
    onDidGenerateIdentifiers( callback, behaviorInstance ) {
        if( this._disposed ) throw new Error('Trying to call function of object that is already disposed of!');
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-generate-identifiers', callback, behaviorInstance );
    }
    
    /**
     * Notifies subscriber when {@link NavigationBar}'s selected {@link Identifier} has changed.
     *
     * @param  {function(callback: function, behaviorInstance: Behavior)} callback Function to invoke when {@link NavigationBar}'s selected {@link Identifier} has changed.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     * @throws {Error} If object is already disposed of.
     */
    onDidChangeSelectedIdentifier( callback, behaviorInstance ) {
        if( this._disposed ) throw new Error('Trying to call function of object that is already disposed of!');
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing a behavior!');
        }
        
        return this._emitter.on( 'did-change-selected-identifier', callback, behaviorInstance );
    }
}
