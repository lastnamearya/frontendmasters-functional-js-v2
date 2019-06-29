// A High-Order Function returning a Function

// Here condition is like Flag: Returns true or false and conditional operates on this Flag.

const ifElse = (condition, fnOne, fnTwo, ...args) => {
  return condition ? fnOne(...args) : fnTwo(...args);
};

const isTrue = args => console.log(args);

const isFalse = args => console.log(args);

ifElse(true, isTrue, isFalse, "one", "two", "three");
