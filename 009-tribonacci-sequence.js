"use strict";
/*
It works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array.
*/
exports.__esModule = true;
exports.tribonacci = void 0;
function tribonacci(_a, n) {
    var a = _a[0], b = _a[1], c = _a[2];
    if (n === 0)
        return [];
    var array = [a, b, c];
    if (n < 3)
        return array.slice(0, n);
    for (var i = 3; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2] + array[i - 3];
    }
    return array;
}
exports.tribonacci = tribonacci;
// console.log(tribonacci([1, 1, 1], 10))
