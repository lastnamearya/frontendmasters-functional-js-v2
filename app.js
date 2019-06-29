// A High-Order Function returning a Function

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

const isTrue = () => console.log(true);

const isFalse = () => console.log(false);

ifElse(true, isTrue, isFalse);

// Passing Arguments

var doMathSoIDontHaveTo = function(n, func) {
  return func(n);
};

var increment = function(n) {
  return n + 1;
};

var square = function(n) {
  return n * n;
};

console.log(doMathSoIDontHaveTo(4, increment));
console.log(doMathSoIDontHaveTo(4, square));
