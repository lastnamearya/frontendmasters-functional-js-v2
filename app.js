// A High-Order Function returning a Function

// Here condition is like Flag: Returns true or false and conditional operates on this Flag.

const ifElse = function(condition, fnOne, fnTwo) {
  // It'll give us an array Starting from index 3

  const args = Array.prototype.slice.call(arguments, 3);

  return condition ? fnOne.apply(this, args) : fnTwo.apply(this, args);
};

const isTrue = args => console.log(args);

const isFalse = args => console.log(args);

ifElse(true, isTrue, isFalse, ["one", "two", "three"]);
