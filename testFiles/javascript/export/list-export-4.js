
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
    localLet as exportedNameTwo,
    localVar as exportedNameThree,
    localFunction as exportedNameFour,
    localAsyncFunction as exportedNameFive,
    localGeneratorFunction as exportedNameSix,
    localAsyncGeneratorFunction as exportedNameSeven,
    LocalClassName as exportedNameEight,
    LocalExtendedClassName as exportedNameNine
};
