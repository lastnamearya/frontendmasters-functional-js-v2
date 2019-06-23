// _.each()

const exArr = [1, 5, 7, 6, 4, 9, 2, 13, 17, 12, 19, 18];

const exObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

const _ = {};

_.each = function(list, callback) {
  // Case 1: If list is an Array

  if (typeof list === "object" && Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      // Here i and list is optional

      callback(list[i], i, list);
    }
  }

  // Case 2: Loop over an Object
  else if (typeof list === "object") {
    for (let key in list) {
      // Here i and list is optional

      callback(list[key], key, list);
    }
  } else {
    console.error("Please pass an Array");
  }
};

_.each(exArr, function(i) {
  console.log(i);
});

_.each(exObj, function(i) {
  console.log(i);
});
