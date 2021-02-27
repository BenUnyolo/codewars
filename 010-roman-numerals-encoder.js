"use strict";
/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
*/
exports.__esModule = true;
exports.solution = void 0;
function solution(number) {
    var ref = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var workingNum = number;
    var output = "";
    for (var key in ref) {
        // calculate amount of times roman number goes into input number
        var divide = Math.floor(workingNum / ref[key]);
        // repeat divide amounts of time
        output = output + key.repeat(divide);
        // update working number
        workingNum = workingNum - (divide * ref[key]);
    }
    return output;
}
exports.solution = solution;
// console.log(solution(990))
