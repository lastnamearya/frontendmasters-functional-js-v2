// _.filter() Method ~ Array

const exArr = [1, 5, 7, 6, 4, 9, 2, 13, 17, 12, 19, 18];

const _ = {};

_.filter = function(list, callback) {
  if (Array.isArray(list)) {
    const filteredArr = [];
    for (let i = 0; i < exArr.length; i++) {
      if (callback(list[i])) {
        filteredArr.push(list[i]);
      }
    }
    return filteredArr;
  }
};

const result = _.filter(exArr, function(i) {
  return i % 2 === 0;
});

console.log(result);
