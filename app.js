// How do we loop through an Object to get values or keys?

var obj = {};

obj[1] = "one";
obj[2] = "second";
obj[3] = "third";
obj[4] = "fourth";

var keyArr = Object.keys(obj); // [1, 2, 3, 4];

console.log(keyArr);

var valuesArr = Object.values(obj); // [“one”, “two”, “three”, “four”];

console.log(valuesArr);
