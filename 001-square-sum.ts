function squareSum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + (num * num), 0)
}

console.log(squareSum([]))

module.exports = squareSum