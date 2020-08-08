
class ClassName {}
function localFunction() {}
async function localAsyncFunction() {}
function localGeneratorFunction() {}
async function localAsyncGeneratorFunction() {}
export {
    ClassName as default,
    localFunction as exportedNameOne,
    localAsyncFunction as exportedNameTwo,
    localGeneratorFunction as exportedNameThree,
    localAsyncGeneratorFunction as exportedNameFour
};
