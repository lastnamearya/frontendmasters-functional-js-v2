var person = {};
person.name = "Mrs. White";

// Here Garbage collector won't remove old memory reference.
var who = person.name;
console.log(who);

person.name = "Mr. White";
console.log(who);
