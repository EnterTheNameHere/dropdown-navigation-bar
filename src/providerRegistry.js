
import { CompositeDisposable, Emitter } from 'atom';
import { BabelProvider } from './babelProvider';

export class ProviderRegistry {
    _existingProviderInstances = new Map();
    _subscriptions = new CompositeDisposable();
    _emitter = new Emitter();

    getProviderForTextEditor( textEditor ) {
        console.log('getProviderForTextEditor');
        if( !textEditor ) {
            return null;
        }

        let provider = this._existingProviderInstances.get( textEditor );
        if( provider ) {
            return provider;
        }

        switch( textEditor.getRootScopeDescriptor().scopes[0] ) {
        case 'source.js':
            provider = new BabelProvider( textEditor );
            this._subscriptions.add( textEditor.onDidDestroy( () => {
                this._existingProviderInstances.delete( textEditor );
            }));
            this._existingProviderInstances.set( textEditor, provider );
            return provider;
        default:
            return null;
        }
    }

    destroy() {
        this._existingProviderInstances.clear();
    }

    /**
     * Notifies subscriber that ProviderRegistry is destroyed.
     *
     * @param  {Function} callback Function to invoke when ProviderRegistry is destroyed.
     * @return {Disposable} Returns a Disposable on which .dispose() can be called to unsubscribe.
     */
    onDidDestroy( callback ) {
        return this._emitter.on( 'did-destroy', callback );
    }
}
