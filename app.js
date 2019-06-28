// Test ~ Function Parameter's length

function test(a, b) {
  console.log(`${a} ${b}`);
}

// In case of spread operator, Js will avoid ...dots

function test2(a, b, ...args) {}

// Js will return 0 here

function test3(...args) {}

console.log(test.length);

console.log(test2.length);

console.log(test3.length);
