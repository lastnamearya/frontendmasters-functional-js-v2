// Practice ~ My own ~ forEach / map / filter / reduce Functions

const exArr = [1, 4, 3, 5, 9];

// forEach

const forEach = (list, callback) => {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  } else {
    console.error("Please pass an array");
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
  } else {
    console.error("Please pass an array");
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
  } else {
    console.error("Please pass an array");
  }
};

const filterResult = filter(exArr, function(i) {
  return i % 2 === 0;
});

console.log(filterResult);

// reduce ~ Function

const reduce = (list, callback, initialValue) => {
  if (Array.isArray(list)) {
    const callbackString = callback.toString();
    const stringArr = [...callbackString];

    let result;

    if (stringArr.includes("+")) {
      if (initialValue || initialValue === 0) {
        result = initialValue;
      } else {
        initialValue = 0;
        result = initialValue;
      }

      for (let i = 0; i < list.length; i++) {
        result += callback(initialValue, list[i]);
      }
    } else if (stringArr.includes("*")) {
      if (initialValue || initialValue === 0) {
        result = initialValue;
      } else {
        initialValue = 1;
        result = initialValue;
      }

      for (let i = 0; i < list.length; i++) {
        result *= callback(initialValue, list[i]);
      }
    }

    return result;
  } else {
    console.error("Please pass an array");
  }
};

const reduceSum = reduce(exArr, function(a, b) {
  return a + b;
});

const reduceMultiple = reduce(exArr, function(a, b) {
  return a * b;
});

console.log(reduceSum);

console.log(reduceMultiple);
