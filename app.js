// Currying in Functional Programming

const abc = (a, b) => {
  return [a, b];
};

// Sample Example for 2 Arguments

const curry = fn => {
  return arg => {
    return arg2 => {
      return fn(arg, arg2);
    };
  };
};

const curried = curry(abc);

console.log(curried(1)(2));
