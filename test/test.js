const assert = require('assert');
const CodeWatchman = require('../index');

describe('CWMInit', () => {
    const cwm = new CodeWatchman("rJ0SGEMNaOsggLEXHAC4", "25fb9f04465b1591893909369");

    describe('Validate Token', () => {
        it('Successfully send a log', (done) => {
            cwm.validate()
            .then((response) => {
                console.log(response);
                done();
            });
        });
    });

    describe('Send Token', () => {
        it('Successfully send a log', (done) => {
            cwm.sendLog({ logCode: "TESTLOG", message: "Test log", payload: { "Test": true } })
            .then((response) => {
                console.log(response);
                done();
            });
        });
    });
});