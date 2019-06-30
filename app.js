// Composition Function

const _ = {};

_.composition = function(func1, func2) {
  if (typeof func1 === "function" && typeof func2 === "function") {
    const func2output = func2();

    const finaloutput = func1(func2output);

    return finaloutput;
  }
};

const one = x => {
  return x + 1;
};

const two = () => {
  return 1;
};

const testResult = _.composition(one, two);

console.log(testResult);
