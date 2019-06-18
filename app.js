// Object.entries ~ Loop over Object key and Values

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

Object.entries(obj).map(([key, value]) =>
  console.log(`key: ${key} & value: ${value}`)
);
