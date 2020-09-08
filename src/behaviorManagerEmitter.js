
import { CompositeDisposable, Disposable } from 'atom';

export class BehaviorManagerEmitter {
    _disposed = false;
    _behaviorCallbackTupleByEventName = new Map();
    _subscriptions = new CompositeDisposable();
    
    dispose() {
        if( this._disposed ) return;
        
        this._subscriptions.dispose();
        this._behaviorCallbackTupleByEventName = null;
        this._disposed = true;
    }
    
    on( eventName, callback, behaviorInstance ) {
        if( this._disposed ){
            throw new Error('You are trying to add handler to emitter which is already disposed of!');
        }
        
        if( typeof eventName !== 'string' ) {
            throw new Error('First parameter must be event name!');
        }
        
        if( !eventName ) {
            throw new Error('Event name cannot be empty!');
        }
        
        if( typeof callback !== 'function' ) {
            throw new Error('Second parameter must be a function!');
        }
        
        if( !behaviorInstance ) {
            throw new Error('Third parameter must be instance of object implementing behavior!');
        }
        
        // Let's get array of tuples
        // (behaviorInstance and callback)
        // for this eventName.
        let tupleArray = this._behaviorCallbackTupleByEventName.get( eventName );
        if( !tupleArray ) {
            tupleArray = new Array();
            this._behaviorCallbackTupleByEventName.set( eventName, tupleArray );
        }
        
        // We store behaviorInstance and callback as a tuple...
        const bcTuple = { behaviorInstance: behaviorInstance, callback: callback };
        const findFunction = (element) => {
            if( element.behaviorInstance === bcTuple.behaviorInstance
                && element.callback === bcTuple.callback )
            {
                return true;
            }
            return false;
        };
        
        // Store tuple in array if it's not already there...
        if( tupleArray.findIndex( findFunction ) === -1 ) {
            tupleArray.push( bcTuple );
            
            // Create object which will remove the tuple
            // from array when it's not needed anymore...
            const cleaningHandler = new Disposable( () => {
                const tupleIndex = tupleArray.findIndex( findFunction );
                console.assert( tupleIndex !== -1, 'Tuple is not found in array, which should not happen!' );
                if( tupleIndex !== -1 ) {
                    tupleArray.splice( tupleIndex, 1 );
                }
                
                this._subscriptions.remove( cleaningHandler );
            });
            this._subscriptions.add( cleaningHandler );
            
            // Now we can store the cleaningHandler in the tuple too...
            (tupleArray.find( findFunction )).cleaningHandler = cleaningHandler;
        }
        
        // Return cleaning handler...
        return tupleArray.find( findFunction ).cleaningHandler;
    }
    
    async emit( eventName, value ) {
        if( this._disposed ) return;
        
        const tuplesArray = this._behaviorCallbackTupleByEventName.get( eventName );
        if( tuplesArray ) {
            for( const tuple of [...tuplesArray] ) {
                // Waiting for result is intended behavior.
                // We expect value parameter to be changed in called function.
                await tuple.callback( value ); // eslint-disable-line no-await-in-loop
            }
        }
    }
}
