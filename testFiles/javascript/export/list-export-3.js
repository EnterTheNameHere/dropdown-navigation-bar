
const localConst = "42";
let localLet = 42;
var localVar = {};
function localFunction() {}
async function localAsyncFunction() {}
function* localGeneratorFunction() {}
async function* localAsyncGeneratorFunction() {}
class LocalClassName {}
class LocalExtendedClassName extends LocalClassName {}

export {
    localConst,
    localLet,
    localVar,
    localFunction,
    localAsyncFunction,
    localGeneratorFunction,
    localAsyncGeneratorFunction,
    LocalClassName,
    LocalExtendedClassName
};
