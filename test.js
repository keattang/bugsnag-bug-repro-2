const theFunctionIWantToTest = require('./index');

describe('theFunctionIWantToTest', () => {
    it('should return true', () => {
        expect(theFunctionIWantToTest()).toBe(true);
    });
});
