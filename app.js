// _.map() Method ~ Array

const exArr = [5, 1, 3, 7, 4];

const _ = {};

// Default Implementation only accepts an Array

_.sort = function(list) {
  if (Array.isArray(list)) {
    const sortedArray = [];

    function compare(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else if (a == b) {
        return 0;
      }
    }

    for (let i = 0; i < list.length; i += 2) {
      console.log(list[i]);
      console.log(list[i + 1]);

      let res = compare(list[i], list[i + 1]);

      if (res < 0) {
        sortedArray.push(list[i]);
        sortedArray.push(list[i + 1]);
      } else if (res > 0) {
        sortedArray.push(list[i + 1]);
        sortedArray.push(list[i]);
      } else {
        sortedArray.push(list[i]);
      }
    }
    return sortedArray;
  }
};

const result = _.sort(exArr);

console.log(result);
