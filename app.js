const a = [1, 2, 3];

const b = a.reduce(function(prev, acc) {
  return prev + acc;
}, 0);

console.log(b);
