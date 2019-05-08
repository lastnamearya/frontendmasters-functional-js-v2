obj = {};

// Js will accept this function as key and stringify it.
obj[function() {}] = false;

// It'll coerced to a String Value. We can't call this function later on.
console.log(typeof Object.keys(obj)[0]);
