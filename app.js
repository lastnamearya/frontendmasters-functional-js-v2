// Write this function in ES5

const add = function(a, b = 2) {
  console.log(arguments);
  return a + b;
};

console.log(add(3));

// ES5 Way

function addES5(a, b) {
  // Here using Js ~ arguments keyword we can check b is undefined or not, If it's undefine then we set value of b to whatever we like to set as default value.

  if (!arguments[1]) {
    b = 2;
  }

  return a + b;
}

// It'll return 5
console.log(addES5(3));

// It'll return 6
console.log(addES5(3, 3));
