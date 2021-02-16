/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
*/

export function solution(roman: string): number {
    // define numerals object
    const numerals: {[index: string]: number} = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    // split roman numbers argument into array
    const split = roman.split("");
    
    // reduce to numeric value
    return split.reduce((total, current, index) => {
        // checks for 4
        if (current === "I" && (split[index + 1] === "V")) return total - 1 
        return total + numerals[current]
    }, 0)
}

console.log(solution("MDCLXIV"))