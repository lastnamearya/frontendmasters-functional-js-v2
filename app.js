var exArr = [1, 2, 3, 4];

var exObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

const _ = new Object();

_.each = function(list, callback) {
  if (typeof list === "object") {
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        callback(list[i], i, list);
      }
    }
  }
};

_.map = function(list, callback) {
  if (typeof list === "object" && Array.isArray(list)) {
    const returnArr = [];
    for (let i = 0; i < list.length; i++) {
      returnArr.push(callback(i));
    }
    return returnArr;
  }
};

_.each(exArr, function(i) {
  console.log(i);
});

const result = _.map(exArr, function(i) {
  return i + 1;
});

console.log(result);
