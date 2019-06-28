// REST and SPREAD Operator

// SPREAD Operator

const a = [1, 2, 3, 4];

const b = [5, 6, 7, 8];

// We can Merge two Arrays as well.

const c = [...a, ...b];

console.log(c);

// REST Operator

function example(a, b, ...c) {
  console.log(`${a} ${b} ${c}`);
}

example(a, b, 9, 10, 11, 12, 13, 14, 15);

// REST Operator ~ can return particular element

function test(a, b, ...c) {
  console.log(`${a} ${b} ${c[0]} ${c[1]}`);
}

test(a, b, 9, 10, 11, 12, 13, 14, 15);
