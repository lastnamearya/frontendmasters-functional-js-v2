// SPREAD Operator Multiple Cases in High Order Function

// Case 1 ~ Spreading args inside the body of the Main Parent Function

function test(...args) {
  // Now args only refrence to the first value passed.

  return example(...args);
}

function example(arg) {
  console.log(arg);
}

// It'll return 1

console.log(test(1, 2, 3, 4, 5));

// Case 2: Not Spreading the args in the body of Parent Function

function testTwo(...args) {
  return example(args);
}

// It'll return the Whole Array (args) ~ passed as argument.

console.log(testTwo(1, 2, 3, 4, 5));
