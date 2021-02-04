const validatePin = require('./003-regex-pin')

describe('testing various pins', () => {
    test('1 returns false', () => {
        expect(validatePin('1')).toBe(false);
    });

    test('123 returns false', () => {
        expect(validatePin('123')).toBe(false);
    });

    test('1234 returns true', () => {
        expect(validatePin('1234')).toBe(true);
    });

    test('12345 returns false', () => {
        expect(validatePin('12345')).toBe(false);
    });

    test('123456 returns true', () => {
        expect(validatePin('123456')).toBe(true);
    });

    test('123.4 returns false', () => {
        expect(validatePin('123.4')).toBe(false);
    });

    test('-1234 returns false', () => {
        expect(validatePin('-1234')).toBe(false);
    });
})