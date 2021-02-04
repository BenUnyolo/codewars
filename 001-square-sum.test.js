const squareSum = require('./001-square-sum')

describe('testing various arrays', () => {
    test('array of 1, 2 returns 5', () => {
        expect(squareSum([1,2])).toBe(5);
    });

    test('array of 0, 3, 4, 5 returns 50', () => {
        expect(squareSum([0, 3, 4, 5])).toBe(50);
    });

    test('array of 99 returns 9801', () => {
        expect(squareSum([99])).toBe(9801);
    });

    test('empty array returns 0', () => {
        expect(squareSum([])).toBe(0);
    });
})

