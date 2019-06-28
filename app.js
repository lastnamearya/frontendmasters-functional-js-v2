// Array Like Object

const constructArr = function() {
  // Here ~ Array.prototype.slice.call(arguments) will turn arguments object in an array

  const arr = Array.prototype.slice.call(arguments);
  arr.push("the billiards room?");

  console.log(Array.isArray(arr));

  return arr.join(" ");
};

// It'll return ~ "was it in the billiards room?"

console.log(constructArr("was", "it", "in"));

// False it's an Object that looks like an Array
console.log(Array.isArray(constructArr));
