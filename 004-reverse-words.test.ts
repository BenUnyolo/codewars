import {reverseWords} from "./004-reverse-words";

describe('testing various strings', () => {
    test('quick brown fox reverses', () => {
        expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
    });

    test('apple reverses', () => {
        expect(reverseWords('apple')).toBe('elppa');
    });

    test('a b c d doesn\'t change', () => {
        expect(reverseWords('a b c d')).toBe('a b c d');
    });

    test('double spaces work fine', () => {
        expect(reverseWords('double  spaced  words')).toBe('elbuod  decaps  sdrow');
    });
})