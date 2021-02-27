import { solution } from "./010-roman-numerals-encoder";

type caseType = [number, string]
const cases: caseType[] = [
    [1000, 'M'],
    [4, 'IV'],
    [1, 'I'],
    [1990, 'MCMXC'],
    [2008, 'MMVIII'],
    [1444, 'MCDXLIV'],
    [990, 'CMXC'],
    [3999, 'MMMCMXCIX']
]

describe('testing various routes', () => {
    test.each(cases)("input %p returns %p", (n, result) => {
        expect(solution(n)).toStrictEqual(result);
    });
})