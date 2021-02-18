/*
It works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array.
*/

export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    if (n === 0) return []
    let array = [a, b, c];
    if (n < 3) return array.slice(0, n)
    for (let i = 3; i < n; i++) {
        array[i] = array[i - 1] + array[i - 2] + array[i - 3]
    }
    return array
}

// console.log(tribonacci([1, 1, 1], 10))