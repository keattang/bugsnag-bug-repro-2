const Bugsnag = require('@bugsnag/js');

const bugsnag = Bugsnag({
    apiKey: 'my-api-key',
});

const theFunctionIWantToTest = () => (
    typeof window !== 'undefined' && // We need a browser environment
    bugsnag !== undefined
);

module.exports = theFunctionIWantToTest;