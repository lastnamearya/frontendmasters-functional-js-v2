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
    console.log(game.suspects[i]);
  }
}

foo();

for (let key in game) {
  // Here we can't use dot notation, because we're dynamically updating the value of key on each iteration
  console.log(game[key]);
}
