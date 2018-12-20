const Bugsnag = require('@bugsnag/js');

const bugsnag = Bugsnag({
    apiKey: 'my-api-key',
});

const theFunctionIWantToTest = () => true;

module.exports = theFunctionIWantToTest;