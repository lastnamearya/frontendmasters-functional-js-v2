// _.map() Method ~ Array

const exArr = [5, 1, 3, 7, 4];

const _ = {};

// Default Implementation only accepts an Array

_.sort = function(input) {
  if (Array.isArray(input)) {
    const sortedArray = [];

    let resultArr = [];

    function test() {
      let list = Array.from(input);
      let iterable = 0;

      for (let i = 0; i < list.length; i += 2) {
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

        iterable++;

        if (iterable == Math.ceil(list.length / 2)) {
          console.log("loop over finally");
          resultArr = Array.from(sortedArray);
          sortedArray.length = [];
          console.log(sortedArray);
        }
      }
    }

    function compare(a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else if (a == b) {
        return 0;
      }
    }

    for (let i = 0; i < input.length; i++) {
      console.log(`loop ran ${i} time`);
      test();
    }

    test();

    return resultArr;
  }
};

const result = _.sort(exArr);

console.log(result);
