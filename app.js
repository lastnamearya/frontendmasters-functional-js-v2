// Default Parameters

function example(a, b = 2, c) {
  console.log(arguments);
  console.log(a, b, c);
}

// Important Note: We've to explicity pass undefined here for the parameter b.

example(1, undefined, 4);

function exampleTwo(a, b = 2) {
  return a + b;
}

console.log(exampleTwo(3)); // It'll return 5
