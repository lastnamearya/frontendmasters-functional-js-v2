// _.from()

const _ = {};

_.from = function(arguments) {
  if (typeof arguments === "object") {
    const arr = new Array();
    for (let key in arguments) {
      // Now It won't check for Prototype Properties

      if (arguments.hasOwnProperty(key)) {
        arr.push(arguments[key]);
      }
    }
    return arr;
  }
};

const obj = {
  0: "one",
  1: "two",
  2: "three"
};

const result = _.from(obj);

console.log(result);
