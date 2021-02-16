import {solution} from "./007-roman-numerals";

describe('testing various roman numerals', () => {
    test('expect empty string to equal 0', () => {
        expect(solution('')).toBe(0);
    });

    test('expect XXI to equal 21', () => {
        expect(solution('XXI')).toBe(21);
    });

    test('expect I to equal 1', () => {
        expect(solution('I')).toBe(1);
    });

    test('expect IV to equal 4', () => {
        expect(solution('IV')).toBe(4);
    });

    test('expect MMVIII to equal 2008', () => {
        expect(solution('MMVIII')).toBe(2008);
    });

    test('expect MMVIII to equal 2008', () => {
        expect(solution('MDCLXIV')).toBe(1664);
    });
})