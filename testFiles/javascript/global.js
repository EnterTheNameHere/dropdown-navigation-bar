
const constString = '';
const constNumber = 42;
const constBoolean = true;
const constUndefined = undefined;
const constSymbol = new Symbol("Sym");
const constBigInt = 9007199254740991n;
const constBinary = 0b1010010;
const constOctal = 0o755;

let letString = '';
let letNumber = 42;
let letBoolean = true;
let letUndefined = undefined;
let letSymbol = new Symbol("Sym");
let letBigInt = 9007199254740991n;
let letBinary = 0b1010010;
let letOctal = 0o755;

var varString = '';
var varNumber = 42;
var varBoolean = true;
var varUndefined = undefined;
var varSymbol = new Symbol("Sym");
var varBigInt = 9007199254740991n;
var varBinary = 0b1010010;
var varOctal = 0o755;

const constBacktickString = `Hello`;
var varBacktickString = `Hello`;
let letBacktickString = `Hello`;

const constMultilineString = `
hello
world
`;
var varMultilineString = `
hello
world
`;
let letMultilineString = `
hello
world
`;


const constNewArray = new Array();
const constBracketArray = [];
const constNewObject = new Object();
const constCreateObject = Object.create( {} );
const constBracketObject = {};

let letNewArray = new Array();
let letBracketArray = [];
let letNewObject = new Object();
let letCreateObject = Object.create( {} );
let letBracketObject = {};

var varNewArray = new Array();
var varBracketArray = [];
var varNewObject = new Object();
var varCreateObject = Object.create( {} );
var varBracketObject = {};

const [ constFirst, constSecond ] = [ 'first', 'second' ];
let [ letFirst, letSecond ] = [ 'fist', 'second' ];
var [ varFirst, varSecond ] = [ 'fist', 'second' ];

let multipleLetFirst, multipleLetSecond, multipleLetThird;

const { constInObjectFirst, constInObjectSecond } = { one: 'first', two: 'second' };
let { letInObjectFirst, letInObjectSecond } = { one: 'first', two: 'second' };
var { varInObjectFirst, varInObjectSecond } = { one: 'first', two: 'second' };

const { constDestructuring, ...withConstRest } = constBracketObject;
let { letDestructuring, ...withLetRest } = letBracketObject;
var { varDestructuring, ...withVarRest } = varBracketObject;

for( let letSimple of constBracketArray ) {
    const someConstInFor = 42;
}

for( let { letTupleFirst, letTupleSecond } of constBracketArray ) {
    const someOtherConstInAnotherFor = 42;
}

function aFunctionWithNoArgument() {
    let aVariable = 42;
}

function aFunctionWithOneArgument( argumentOne ) {
    let aVariable = 42;
}

function aFunctionWithTwoArguments( argumentOne, argumentTwo ) {
    let aVariable = 42;
}

function aFunctionWithObjectArgument( { objectArgumentOne, objectArgumentTwo } ) {
    let aVariable = 42;
}

function aFunctionWithFor( { objectArgumentOne, objectArgumentTwo } ) {
    let aVariable = 42;

    for( let letSimple of constBracketArray ) {
        const someConstInFor = 42;
    }
}

let testCompute = 'test';
let propertyName = {
    [`${testCompute}Property`]: 'testProperty'
};

function* generatorFunction() {
    let index = 0;
    while( true ) yield id++;
}

function itsAPromiseFunction( amount ) {
    return new Promise( (resolve, reject) => {
        if (amount < 500) {
            reject( new Error('the value is too small') );
        }
        setTimeout( () => resolve(`waited for ${amount}ms`), amount );
    });
}

async function itsAsyncFunction() {
    const res = await itsAPromiseFunction(500);
    const res2 = await itsAPromiseFunction(600);
    const res3 = await itsAPromiseFunction(700);
    const res4 = await itsAPromiseFunction(800);
    const res5 = await itsAPromiseFunction(900);
}
