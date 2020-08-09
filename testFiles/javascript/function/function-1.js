
function namedWithoutArguments() {}

function namedWithArgumentsOne( arg ) {}
function namedWithArgumentsTwo( argOne, argTwo ) {}
function namedWithArgumentsThree( argOne, argTwo, argThree ) {}
function namedWithDefaultArgumentsOne( argOne = 42 ) {}
function namedWithDefaultArgumentsTwo( argOne = 42, argTwo = 'string' ) {}
function namedWithDefaultArgumentsThree( argOne = 42, argTwo = 'string', argThree = false ) {}
function namedWithSomeDefaultArgumentsOne( argOne, argTwo = 'string', argThree ) {}
function namedWithSomeDefaultArgumentsTwo( argOne, argTwo, argThree = false ) {}
function namedWithSomeDefaultArgumentsThree( argOne = 42, argTwo, argThree = false ) {}

function namedWithArgumentsRestOne( arg, ...rest ) {}
function namedWithArgumentsRestTwo( argOne, argTwo, ...rest ) {}
function namedWithArgumentsRestThree( argOne, argTwo, argThree, ...rest ) {}
function namedWithDefaultArgumentsRestOne( argOne = 42, ...rest ) {}
function namedWithDefaultArgumentsRestTwo( argOne = 42, argTwo = 'string', ...rest ) {}
function namedWithDefaultArgumentsRestThree( argOne = 42, argTwo = 'string', argThree = false, ...rest ) {}
function namedWithSomeDefaultArgumentsRestOne( argOne, argTwo = 'string', argThree, ...rest ) {}
function namedWithSomeDefaultArgumentsRestTwo( argOne, argTwo, argThree = false, ...rest ) {}
function namedWithSomeDefaultArgumentsRestThree( argOne = 42, argTwo, argThree = false, ...rest ) {}
