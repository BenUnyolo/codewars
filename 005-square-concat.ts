/*
Square every digit of a number and concatenate them.
9119 -> 811181 because 92 is 81 and 12 is 1
*/
export class Kata {
    static squareDigits(num: number): number {
        return +num.toString().split("").map((n) => Math.pow(+n, 2)).join("")
    }
}

// console.log(Kata.squareDigits(9119))