
class AbstractClass {
    static staticProperty = '';
    nonStaticProperty = 42;
    nonStaticArray = [];
    nonStaticArrayNew = new Array();

    constructor() {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    }

    static staticMethod() {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    }

    method() {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    }

    propertyMethod = () => {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    }

    aFunctionWithFor( { objectArgumentOne, objectArgumentTwo } ) {
        let aVariable = 42;

        for( let letSimple of constBracketArray ) {
            const someConstInFor = 42;
        }
    }

    *generatorFunction() {
        let index = 0;
        while( true ) yield id++;
    }

    get getterSetterProperty() {
        return this._getterSetterProperty;
    }
    set getterSetterProperty( value ) {
        this._getterSetterProperty = value;
    }
}

class ExtendingClass extends AbstractClass {
    constructor() {
        super();
        let someVar = 42;
    }

    static AnotherStaticProperty = 0;

    static StaticMethodTwo() {
        let someVar;
    }

    method() {
        super.method();
    }

    itsAPromiseMethod( amount ) {
        return new Promise( (resolve, reject) => {
            if (amount < 500) {
                reject( new Error('the value is too small') );
            }
            setTimeout( () => resolve(`waited for ${amount}ms`), amount );
        });
    }

    async itsAsyncMethod() {
        const res = await this.itsAPromiseMethod(500);
        const res2 = await this.itsAPromiseMethod(600);
        const res3 = await this.itsAPromiseMethod(700);
        const res4 = await this.itsAPromiseMethod(800);
        const res5 = await this.itsAPromiseMethod(900);
    }
}

let LikeAbstractOnlyWithoutClassKeyword = {
    staticProperty: '',
    nonStaticProperty: 42,
    nonStaticArray: [],
    nonStaticArrayNew: new Array(),

    constructor() {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    },

    method() {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    },

    propertyMethod: () => {
        const someConst = 42;
        let someVar = 0;
        const someLambda = () => {
            return 42;
        };
    },

    aFunctionWithFor( { objectArgumentOne, objectArgumentTwo } ) {
        let aVariable = 42;

        for( let letSimple of constBracketArray ) {
            const someConstInFor = 42;
        }
    },

    *generatorFunction() {
        let index = 0;
        while( true ) yield id++;
    }
};
