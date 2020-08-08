
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
    localConst as exportedNameOne,
    localLet,
    localVar,
    localFunction as exportedNameFour,
    localAsyncFunction,
    localGeneratorFunction as exportedNameSix,
    localAsyncGeneratorFunction,
    LocalClassName,
    LocalExtendedClassName as exportedNameNine
};
