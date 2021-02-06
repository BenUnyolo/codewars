"use strict";
exports.__esModule = true;
exports.reverseWords = void 0;
function reverseWords(str) {
    return str.split(' ').map(function (word) {
        if (word === "")
            return "";
        var ind = word.length - 1;
        var revWord = "";
        for (var i = ind; i >= 0; i--) {
            revWord = revWord + word[i];
        }
        return revWord;
    }).join(" ");
}
exports.reverseWords = reverseWords;
// console.log(reverseWords('double  spaced  words   triple'))
