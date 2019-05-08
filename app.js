var box = {};

// We can use Bracket Notation on an Object to define Properties on an Object
box["material"] = "cardboard";

// We can use Dot Notation on an Object to define Properties on an Object.
box.color = "red";

// Here Numeric Value is going to be coerced to a String Value as Property.
box[0] = "Zero";

box["$^&"] = "testing `123`";

// We can't assign a string as a property on Object using Dot Notation. It'll throw Unexpected Error;

// box."abc" = "Not Possible";

// Dot Notation behind the scenes covert that Numeric or passed value into String behind the scenes.

// For that we've to use Brakcet Notation
box["abc"] = "Not Possible";

// We can write an Expression in Bracket Notation.
box[2 + 2] = 4;

console.log(box);
