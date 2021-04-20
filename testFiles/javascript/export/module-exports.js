
module.exports = test;
module.exports.one = test;
module.exports.one.two = test;
module.exports.one.two.three = test;
module.exports.one.two.three['string'] = test;
module.exports.one.two.three[value] = test;
module.exports.one.two.three[()=>{return 0;}] = test;

module.exports = require('electron').clipboard;

module.exports = async () => {};
module.exports = async ( param ) => {};
module.exports = async ( paramOne, paramTwo ) => {};
module.exports = () => {};
module.exports = ( param ) => {};
module.exports = ( paramOne, paramTwo ) => {};
module.exports = function() {};
module.exports = function named() {};
module.exports = function namedWithParam( param ) {};
module.exports = function namedWithTwoParams( paramOne, paramTwo ) {};
module.exports = async function namedAsync() {};
module.exports = async function namedAsyncWithParam( param ) {};
module.exports = async function namedAsyncWithTwoParams( paramOne, paramTwo ) {};

module.exports = function*() {};
module.exports = function* namedGenerator() {};
module.exports = function* namedGeneratorWithParam( param ) {};
module.exports = function* namedGeneratorWithTwoParams( paramOne, paramTwo ) {};
module.exports = async function* namedGeneratorAsync() {};
module.exports = async function* namedGeneratorAsyncWithParam( param ) {};
module.exports = async function* namedGeneratorAsyncWithTwoParams( paramOne, paramTwo ) {};

module.exports.STATE_NONE = TrackPlayer.STATE_NONE;
module.exports.STATE_READY = TrackPlayer.STATE_READY;
module.exports.STATE_PLAYING = TrackPlayer.STATE_PLAYING;

module.exports.setupPlayer = setupPlayer;
module.exports.destroy = TrackPlayer.destroy;

module.exports.TrackPlayerEvents = require('./eventTypes');
module.exports.useTrackPlayerEvents = require('./hooks').useTrackPlayerEvents;

var KalturaAppTokenStatus = module.exports.KalturaAppTokenStatus = {
    DISABLED : 1,
    ACTIVE : 2,
    DELETED : 3,
};

module.exports.base_url     = '/api/:version';
module.exports.node_port    = 8080;
module.exports.longerExports.evenLongerExports = something;

module.exports = {
    generateCustomKey: function(size, callback) {
        callback(rs.generate(size))
    },
    generateID: function(callback) {
    }
}

module.exports =
    (function(modules) {
    })
    ({});
    
module.exports['add'] = _add;
module.exports['addproject'] = _addproject;

module.exports = class ClassName {
    classPropertyNumber = 42;
    classPropertyString = "string";
    classPropertyArrowFunction = () => {};

    constructor() {}

    async memberAsyncMethod() {}
    async *memberAsyncGeneratorMethod() {}
    memberMethod() {}
    *memberGeneratorMethod() {}

    propertyArrowAsyncMethod = async () => {}
    propertyArrowMethod = () => {};
    propertyFunctionAsyncMethod = async function() {}
    propertyFunctionAsyncGeneratorMethod = async function*() {}
    propertyFunctionMethod = function() {}
    propertyFunctionGeneratorMethod = function*() {}
}
