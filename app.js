// Arguments Keyword

function test() {
  console.log(arguments);
}

test(1, 2);

// Note: Arrow Functions don't have arugments keyword

const arrowfun = () => console.log(arguments);

arrowfun();
