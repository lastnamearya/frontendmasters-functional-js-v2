// _.map() Exercise

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item) {
  return `broken ${item}`;
};

const _ = {};
_.map = function(list, callback) {
  if (Array.isArray(list)) {
    const returnArr = [];
    for (let i = 0; i < list.length; i++) {
      returnArr.push(callback(list[i]));
    }
    return returnArr;
  } else {
    console.error("Please pass array as an arugment to _.map()");
  }
};

const brokenWeapons = _.map(weapons, makeBroken);

console.log(brokenWeapons);

console.log(_.map({}, makeBroken));
