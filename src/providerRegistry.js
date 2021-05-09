
import { CompositeDisposable } from 'atom';
import { OutlineProvider } from './outlineProvider';

export class ProviderRegistry {
    _registry = null;
    
    _existingProviderInstances = new Map();
    _subscriptions = new CompositeDisposable();

    getProviderForTextEditor( textEditor ) {
        if( !textEditor ) {
            return null;
        }
        
        let provider = this._existingProviderInstances.get( textEditor );
        if( provider ) {
            return provider;
        }
        
        if( this._registry ) {
            for( const registeredProvider of this._registry ) {
                if( registeredProvider.isSupported( textEditor ) ) {
                    if( registeredProvider.getPriority() > provider?.getPriority() ?? -1 ) {
                        provider = new registeredProvider( textEditor );
                    }
                }
            }
        }
        
        if( !provider ) {
            provider = new OutlineProvider( textEditor ); // default provider
            this._subscriptions.add( textEditor.onDidDestroy( () => {
                this._existingProviderInstances.delete( textEditor );
            }));
        }
        
        this._subscriptions.add( textEditor.onDidDestroy( () => {
            this._existingProviderInstances.delete( textEditor );
        }));
        
        return provider;
    }

    dispose() {
        this._existingProviderInstances.clear();
    }
    
    setRegistry( providersRegistry ) {
        this._registry = providersRegistry;
    }
}
