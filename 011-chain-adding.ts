/*
We want to create a function that will add numbers together when called in succession.
add(1)(2); // returns 3
add(1)(2)(3)(4)(5); // 15

We should be able to store the returned values and reuse them.
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
*/

export default function add(x: number): any {
  // receives the next number in the sequence
  const addNum = (next: number): number => {
    // returns the outer function, with cumulative number so far as the argument
    return add(x + next)
  }

  // sets value of method of inner function to return value of x for final number
  addNum.valueOf = () => {
    return x
  }

  // returns addNum function which will be called with next number as argument
  return addNum
}

// quick tests
// let addTwo = add(2);
// console.log(addTwo.valueOf(), "addTwo")
// console.log(addTwo + 5)