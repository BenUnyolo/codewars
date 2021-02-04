function squareSum(numbers) {
    return numbers.reduce(function (acc, num) { return acc + (num * num); }, 0);
}
console.log(squareSum([]));
module.exports = squareSum;
