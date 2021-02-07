"use strict";
exports.__esModule = true;
exports.Kata = void 0;
/*
Square every digit of a number and concatenate them.
9119 -> 811181 because 92 is 81 and 12 is 1
*/
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.squareDigits = function (num) {
        return parseInt(num.toString().split("").map(function (n) { return Math.pow(parseInt(n), 2); }).join(""));
    };
    return Kata;
}());
exports.Kata = Kata;
// console.log(Kata.squareDigits(9119))
