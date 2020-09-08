
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

export function logged( element ) {
    const originalFunction = element.descriptor.value;
    
    const decoratedFunction = function (...args) {
        // Here this will point to decorated class instance...
        log4js.getLogger('@logged').info( `IN  ${this.constructor.name}::${element.key}` ); // eslint-disable-line @babel/no-invalid-this
        const returnValue = originalFunction.call(this, ...args); // eslint-disable-line @babel/no-invalid-this
        log4js.getLogger('@logged').info( `OUT ${this.constructor.name}::${element.key}` ); // eslint-disable-line @babel/no-invalid-this
        return returnValue;
    };
    
    element.descriptor.value = decoratedFunction;
    
    return element;
}
