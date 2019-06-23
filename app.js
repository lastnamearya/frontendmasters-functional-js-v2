// Some Object Properties

var exObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
};

// hasOwnProperty() ~ Checks whether a property exists on an Object or not.
console.log(exObj.hasOwnProperty(length));

// Object.values ~ return us an Array of Keys of the Object

const keyArr = Object.keys(exObj);

console.log(keyArr);

// Object.keys ~ return us an Array of Object key ~ values

const valuesArr = Object.values(exObj);

console.log(valuesArr);
