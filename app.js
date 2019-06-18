// Find Rusty

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    if (game.suspects[i].name === "Rusty") {
      console.log("Rusty found");
    }
  }
}

foo();

function bar() {
  for (let key in game.suspects) {
    if (game.suspects[key]["name"] === "Rusty") {
      console.log("We found Rusty");
    }
  }
}

bar();

// for (let key in game) {
//   // Here we can't use dot notation, because we're dynamically updating the value of key on each iteration
//   console.log(game[key]);
// }
