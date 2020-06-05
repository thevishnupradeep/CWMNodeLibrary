const assert = require('assert');
const CodeWatchman = require('../index');

describe('CWMInit', () => {
    const cwm = new CodeWatchman();
    describe('Validate', () => {
        it('Successfully initialized', (done) => {
            cwm.validateAsync("MnFmlGAQao5dp3VtKlzF", "ae3db243e56e1591027324")
            .then((response) => {
                console.log(response);
                done();
            });
        });
    });

    describe('Send Token', () => {
        it('Successfully send a log', (done) => {
            cwm.sendLogAsync({ message: "Test log", payload: { "Test": true } })
            .then((response) => {
                console.log(response);
                done();
            });
        });
    });
});