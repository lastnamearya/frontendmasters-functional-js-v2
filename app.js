// Closure

function closure(name) {
  const a = "Hello";

  function child() {
    console.log(`${a} ${name}`);
  }

  return child();
}

const ref = closure("JIGYASU");
