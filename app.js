// A Simplest String Reversal

function reverseString(string) {
  const stringArr = [...string];

  const reverseArr = stringArr.reverse();

  return reverseArr.join("");
}

console.log(reverseString("abc"));

console.log(reverseString("testing"));

console.log(reverseString("JIGYASU"));
