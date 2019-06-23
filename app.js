console.log(x);
console.log(y);
console.log(z);
console.log(arrFunc);

// The reason in Hoisting we get undefined on Line 1 is because assignmet will happen during Interpetation Phase.
var x = 1;

// Functions are Special Case where whole body of the function can be accessed above on line 2. Actually Now I got the reason ~ Here assignmet happens in Interpetatio Phase.

function y() {
  console.log("y");
}

// Objects ~ Still we get undefined on Line 3.
var z = {
  a: 1
};

// Here Assignment will happen in the Interpetation Step, so you'll get undefined on line 4.
var arrFunc = () => console.log("Arr Function");
