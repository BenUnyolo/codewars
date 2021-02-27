/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
*/

export function solution(number: number): string {
    const ref: { [index: string]: number } = {
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
    }
    let workingNum = number;
    let output = ""

    for (const key in ref) {
        // calculate amount of times roman number goes into input number
        let divide = Math.floor(workingNum / ref[key]);
        // repeat divide amounts of time
        output = output + key.repeat(divide)
        // update working number
        workingNum = workingNum - (divide * ref[key])
    }
    return output;
}

// console.log(solution(990))