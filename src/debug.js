
import * as log4js from 'log4js';
log4js.configure({
    appenders: {
        console: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['console'],
            level: ['debug']
        }
    }
});

/**
 * Javascript class function decorator to log entry end leave of function.
 *
 * @param  {Function} classFunctionElement Function to decorate.
 * @return {Function}
 *
 * @example```
class Example {
    @logged
    functionToBeLogged() {
        // doing something here...
    }
}```
 */
export function logged( classFunctionElement ) {
    // We want only methods
    if( !classFunctionElement.kind || classFunctionElement.kind !== 'method' ) return classFunctionElement;
    
    const originalFunction = classFunctionElement.descriptor.value;
    
    const decoratedFunction = function (...args) {
        // Here this will point to decorated class instance...
        log4js.getLogger('@logged').info( `ENTERING ${this.constructor.name}::${classFunctionElement.key}` ); // eslint-disable-line @babel/no-invalid-this
        const returnValue = originalFunction.call(this, ...args); // eslint-disable-line @babel/no-invalid-this
        log4js.getLogger('@logged').info( `LEAVING  ${this.constructor.name}::${classFunctionElement.key}` ); // eslint-disable-line @babel/no-invalid-this
        return returnValue;
    };
    
    classFunctionElement.descriptor.value = decoratedFunction;
    
    return classFunctionElement;
}
