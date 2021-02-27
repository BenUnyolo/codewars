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

    test('expect MCMXC to equal 1990', () => {
        expect(solution('MCMXC')).toBe(1990);
    });

    test('expect MMMCMXCIX to equal 3999', () => {
        expect(solution('MMMCMXCIX')).toBe(3999);
    });
})