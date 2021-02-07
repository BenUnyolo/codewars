import {Kata} from "./005-square-concat";

describe('testing various numbers', () => {
    test('9119', () => {
        expect(Kata.squareDigits(9119)).toBe(811181);
    });

    test('0', () => {
        expect(Kata.squareDigits(0)).toBe(0);
    });

    test('1', () => {
        expect(Kata.squareDigits(1)).toBe(1);
    });
})