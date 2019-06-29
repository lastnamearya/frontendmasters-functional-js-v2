// A High-Order Function returning a Function

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

const isTrue = () => console.log(true);

const isFalse = () => console.log(false);

ifElse(true, isTrue, isFalse);

// Passing Arguments

const doMathSoIDontHaveTo = (n, func) => func(n);

const increment = n => n + 1;

const square = n => n * n;

console.log(doMathSoIDontHaveTo(4, increment));
console.log(doMathSoIDontHaveTo(4, square));
