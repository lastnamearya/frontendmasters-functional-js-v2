// My own made _.each() Utility function

const exArr = [1, 2, 3, 4];

const exObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const _ = {};

_.each = function(list, callback) {
  // First We'll check if it's an Array and Object or not by checking type to continue with

  if (typeof list === "object") {
    // Then, we check if it's an Array Data Structure or not?

    if (Array.isArray(list)) {
      // Then we loop over the Arugment Array and pass that indices to our calllback function as arugment.

      for (let i = 0; i < list.length; i++) {
        // We can additionally also pass index and whole array itself as well.

        callback(list[i], i, list);
      }
    } else {
      // Else, If it's not array then it's going to be Object itself.

      for (let key in list) {
        // Passing Object value to the callback as argument.
        callback(list[key], key, list);
      }
    }
  }
};

// Testing with Array

_.each(exArr, function(item, i, list) {
  console.log(`${item} is ${i + 1} value of [${list}] array.`);
});

// Testing with Object

_.each(exObj, function(item) {
  console.log(item);
});
