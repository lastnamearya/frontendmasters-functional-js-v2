// Destructure

const suspects = [
  {
    name: "Rusty",
    color: "orange"
  },
  {
    name: "Miss Scarlet",
    color: "red"
  }
];

// Normal Developer Approach

const [color1, color2] = [suspects[0].color, suspects[1].color];

// Advanced Destructuring

const [{ color: firstColor }, { color: secondColor }] = suspects;

console.log(firstColor);
console.log(secondColor);

const { color } = suspects[0];

console.log(color1);
console.log(color2);
console.log(color);
