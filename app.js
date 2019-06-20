// Filter

const mixArr = [2, 4, 3, 7, 8, 12, 13, 17, 18, 22, 23, 25];

const _ = {};

// It'll return new Array with Selected Indices

_.filter = function(list, callback) {
  if (Array.isArray(list)) {
    const filteredArr = new Array();
    for (let i = 0; i < list.length; i++) {
      let res = callback(list[i]);
      if (res) {
        filteredArr.push(list[i]);
      }
    }
    return filteredArr;
  }
};

// const filteredArr = mixArr.filter(function(i) {
//   return i % 2 === 0;
// });

const filteredArr = _.filter(mixArr, function(i) {
  return i % 2 === 0;
});

console.log(filteredArr);
