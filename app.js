// Practice ~ My own ~ forEach / map / filter / reduce Functions

const exArr = [1, 4, 3, 5, 9];

// forEach

const forEach = (list, callback) => {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  }
};

const forEachResult = forEach(exArr, function(i) {
  console.log(i);
});

// map

const map = (list, callback) => {
  if (Array.isArray(list)) {
    const result = new Array();

    for (let i = 0; i < list.length; i++) {
      let output = callback(list[i]);
      result.push(output);
    }
    return result;
  }
};

const mapResult = map(exArr, function(i) {
  return i + 1;
});

console.log(mapResult);

// filter ~ Truthy Test

const filter = (list, callback) => {
  if (Array.isArray(list)) {
    const result = new Array();

    for (let i = 0; i < list.length; i++) {
      let output = callback(list[i]);

      output ? result.push(list[i]) : null;
    }
    return result;
  }
};

const filterResult = filter(exArr, function(i) {
  return i % 2 === 0;
});

console.log(filterResult);

// reduce ~ Function

const reduce = (list, callback, initialValue) => {
  if (Array.isArray(list)) {
    let result = initialValue;

    const callbackString = callback.toString();
    const stringArr = [...callbackString];

    if (stringArr.includes("+")) {
      for (let i = 0; i < list.length; i++) {
        result += callback(initialValue, list[i]);
      }
    } else if (stringArr.includes("*")) {
      for (let i = 0; i < list.length; i++) {
        result *= callback(initialValue, list[i]);
      }
    }

    return result;
  }
};

const reduceSum = reduce(
  exArr,
  function(a, b) {
    return a + b;
  },
  0
);

const reduceMultiple = reduce(
  exArr,
  function(a, b) {
    return a * b;
  },
  1
);

console.log(reduceSum);

console.log(reduceMultiple);
