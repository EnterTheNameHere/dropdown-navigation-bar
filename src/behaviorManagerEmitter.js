
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
        if( this._disposed ) return;
        
        if( typeof callback !== 'function' ) {
            throw new Error('callback must be a function!');
        }
        
        if( !behaviorInstance ) {
            throw new Error('behaviorInstance must be instance of object implementing behavior!');
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
        };
        
        // Store tuple in array if it's not already there...
        if( tupleArray.findIndex(findFunction) === -1 ) {
            tupleArray.push(bcTuple);
            
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
            
            // In case the on function is called second
            // time with same behaviorInstance and
            // callback, store the cleaningHandler
            // in the tuple too...
            (tupleArray.find( findFunction )).cleaningHandler = cleaningHandler;
            
            // Now let's sort tuples array according
            // to requirement each behavior has...
            const sortFunction = ( firstTuple, secondTuple ) => {
                const firstBehavior = firstTuple.behaviorInstance;
                const secondBehavior = secondTuple.behaviorInstance;
                
                const firstHasToRunBefore = firstBehavior.hasToRunBefore();
                if( firstHasToRunBefore && firstHasToRunBefore.length > 0 ) {
                    for( const behavior of firstHasToRunBefore ) {
                        if( secondBehavior instanceof behavior ) {
                            return -1; // first has to run before second
                        }
                    }
                }
                
                const secondHasToRunBefore = secondBehavior.hasToRunBefore();
                if( secondHasToRunBefore && secondHasToRunBefore.length > 0 ) {
                    for( const behavior of secondHasToRunBefore ) {
                        if( firstBehavior instanceof behavior ) {
                            return 1; // second has to run before first
                        }
                    }
                }
                
                return 0; // no need to sort...
            };
            
            tupleArray.sort( sortFunction );
        }
        
        // Return cleaning handler...
        return tupleArray.find( findFunction ).cleaningHandler;
    }
    
    async emit( eventName, value ) {
        if( this._disposed ) return;
        
        const tuplesArray = this._behaviorCallbackTupleByEventName.get( eventName );
        if( tuplesArray ) {
            for( const tuple of [...tuplesArray] ) {
                await tuple.callback( value );
            }
        }
    }
}
