// A High-Order Function returning a Function

const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue() : isFalse();
};

const isTrue = () => console.log(true);

const isFalse = () => console.log(false);

ifElse(true, isTrue, isFalse);
