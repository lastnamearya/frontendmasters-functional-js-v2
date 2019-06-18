// List Transformations

function createSuspectObject(name) {
  return {
    name: name,
    color: name.split("")[1],
    speak() {
      console.log("My name is ", name);
    }
  };
}

const suspects = ["Miss Scarlet", "Colonel1 Mustard", "Mr. White"];

// Mapping Over an Array using .map

const mapArr = suspects.map(person => createSuspectObject(person));

console.log(mapArr);

// forEach

const suspectsList = [];

suspects.forEach(function(element) {
  suspectsList.push(createSuspectObject(element));
});

console.log(suspectsList);
