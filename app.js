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

// My own Reduce Implementation

const _ = {};

_.reduce = function(list, callback, initialValue) {
  if (Array.isArray(list)) {
    let callbackString = callback.toString();

    const stringArr = [...callbackString];

    let result = initialValue;

    if (stringArr.includes("+")) {
      for (let i = 0; i < list.length; i++) {
        result += callback(initialValue, list[i]);
      }
    } else if (stringArr.includes("*")) {
      for (let i = 0; i < list.length; i++) {
        result *= callback(initialValue, list[i]);
      }
    }

    return result;
  }
};

const reduceSum = _.reduce(
  [1, 2, 3, 4],
  function(a, b) {
    return a + b;
  },
  0
);

const reduceMultiple = _.reduce(
  [1, 2, 3, 4],
  function(a, b) {
    return a * b;
  },
  1
);

console.log(reduceSum);

console.log(reduceMultiple);
