const makeNegative = require('./002-return-negative')

describe('testing various numbers', () => {
    test('4 returns -4', () => {
        expect(makeNegative(4)).toBe(-4);
    });

    test('0 returns 0', () => {
        expect(makeNegative(0)).toBe(0);
    });

    test('-102 returns -102', () => {
        expect(makeNegative(-102)).toBe(-102);
    });

    test('3.14159 returns -3.14159', () => {
        expect(makeNegative(3.14159)).toBe(-3.14159);
    });
})