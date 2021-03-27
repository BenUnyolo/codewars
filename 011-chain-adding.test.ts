import add from "./011-chain-adding";

describe("testing various combinations of add solution", () => {
  test("correct solution when calling 2 times", () => {
    expect(add(2).valueOf()).toBe(2);
  });

  test("correct solution when calling 2 times", () => {
    expect(add(1)(2).valueOf()).toBe(3);
  });

  test("correct solution when calling 3 times", () => {
    expect(add(1)(2)(3).valueOf()).toBe(6);
  });

  test("correct solution when calling 5 times", () => {
    expect(add(1)(2)(3)(4)(5).valueOf()).toBe(15);
  });

  let addTwo = add(2);

  test("correct value returned when stored in variable", () => {
    expect(addTwo.valueOf()).toBe(2);
  });

  test("stored value can be chained with one more function call", () => {
    expect(addTwo(3).valueOf()).toBe(5);
  });

  test("stored value can be chained with two more function calls", () => {
    expect(addTwo(3)(5).valueOf()).toBe(10);
  });

  test("stored value plus number returns correct value", () => {
    expect(addTwo.valueOf() + 5).toBe(7);
  });
});
