
import { CompositeDisposable } from 'atom';
import { OutlineProvider } from './outlineProvider';

export class IdentifiersProviderRegistry {
    _registry = new Set();
    
    _existingProviderInstances = new Map();
    _subscriptions = new CompositeDisposable();
    
    async getProviderForTextEditor( textEditor, runGenerateIdentifiersForNewProvider = true ) {
        if( !textEditor ) {
            return null;
        }
        
        // First we want to check if we already look for a provider for this TextEditor.
        // In such case we can just return the provider.
        let provider = this._existingProviderInstances.get( textEditor );
        console.log('existing provider found:', provider);
        if( provider ) {
            return provider;
        }
        
        // OK, we don't have provider for this TextEditor. First let's check our registry
        // if it has provider which could give us some Identifiers...
        if( this._registry ) {
            console.log('registry:', this._registry);
            for( const registeredProvider of this._registry ) {
                if( registeredProvider.isSupported( textEditor ) ) {
                    if( (registeredProvider.getPriority()) > (provider?.getPriority() ?? -1) ) {
                        provider = new registeredProvider( textEditor );
                        console.log('Created new Provider from Registry', provider);
                    }
                }
            }
            
            // Good, we found a provider, so lets save it.
            if( provider ) {
//                this._existingProviderInstances.set( textEditor, provider );
                console.log('provider from registry:', provider);
//                this._subscriptions.add( textEditor.onDidDestroy( () => {
//                    this._existingProviderInstances.delete( textEditor );
//                }));
                
                return provider;
            }
        }
        
        // We don't have any suitable provider in our registry. Last option is to get a default one...
        if( !provider ) {
            provider = new OutlineProvider( textEditor ); // default provider
            console.log('default provider:', provider);
//            this._existingProviderInstances.set( textEditor, provider );
//            this._subscriptions.add( textEditor.onDidDestroy( () => {
//                this._existingProviderInstances.delete( textEditor );
//            }));
        }
        
        return provider;
    }

    dispose() {
        this._existingProviderInstances.clear();
    }
    
    addProvider( providersRegistry ) {
        console.log('addProvider', providersRegistry);
        this._registry.add( providersRegistry );
        this._existingProviderInstances.clear();
    }
}

export const identifiersProviderRegistry = new IdentifiersProviderRegistry();
