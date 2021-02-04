export const makeNegative = (num: number): number => {
    if (num > 0) return 0 - num
    return num
};

console.log(makeNegative(4))

module.exports = makeNegative