// My own made _.each() Utility function

const _ = {};

_.each = function(list, callback) {
  if (typeof list === "object") {
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        callback(list[i]);
      }
    } else {
      for (let key in list) {
        callback(list[key]);
      }
    }
  }
};

const exArr = [1, 2, 3, 4];

const exObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

_.each(exArr, function(item) {
  console.log(item);
});

_.each(exObj, function(item) {
  console.log(item);
});
