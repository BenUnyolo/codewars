"use strict";
exports.__esModule = true;
exports.makeNegative = void 0;
var makeNegative = function (num) {
    if (num > 0)
        return 0 - num;
    return num;
};
exports.makeNegative = makeNegative;
console.log(exports.makeNegative(4));
module.exports = exports.makeNegative;
