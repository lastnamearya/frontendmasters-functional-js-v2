// _.map() Method ~ Array

const exArr = [1, 5, 7, 6, 4, 9, 2, 13, 17, 12, 19, 18];

const _ = {};

_.map = function(list, callback) {
  if (Array.isArray(list)) {
    let mappedArr = [];
    for (let i = 0; i < list.length; i++) {
      mappedArr.push(callback(list[i]));
    }
    return mappedArr;
  }
};

const resultArr = _.map(exArr, function(i) {
  return i + 1;
});

console.log(resultArr);
