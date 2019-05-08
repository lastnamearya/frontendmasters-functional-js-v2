var person = [];
var plea = "wouldShe";

person.name = "Mrs. White";

var who = person.name;

// That's how we create Properties on our Array Object.
person["hello"] = "HI";

// Here 0 will be stringified to "0"
person[0] = "I was not in the Billiards room";

person[plea] = "I would never!";

console.log(person);

// person.length will be 1 and "hello" & plea ("wouldShe") are going to be properties.

var x = [];
var b = 1;

// Here Numeric Value is going as an Entry in Memory Location of Array.
x[b] = "hello";

console.log(x);
