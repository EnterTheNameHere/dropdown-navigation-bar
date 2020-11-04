// Borrowed from https://github.com/atom/github

import { createRunner } from '@atom/mocha-test-runner';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import until from 'test-until';

chai.use( chaiAsPromised );
global.assert = chai.assert;

// Give tests that rely on filesystem event delivery lots of breathing room.
until.setDefaultTimeout( parseInt( process.env.UNTIL_TIMEOUT || '3000', 10 ) );

const testSuffixes = ['test.js'];

module.exports = createRunner({
    htmlTitle: `Dropdown Navigation Bar Tests - pid ${process.pid}`,
    reporter: 'mochawesome',
    overrideTestPaths: [/spec$/u, /test/u],
    testSuffixes,
}, ( mocha ) => {
    mocha.timeout( parseInt( process.env.MOCHA_TIMEOUT || '5000', 10 ) );
    mocha.reporter( require('mocha-multi-reporters'), {
        reporterEnabled: 'mochawesome, list',
    });
});
