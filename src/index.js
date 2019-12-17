var starWarsNames = require('./starwars-names.json');
var uniqueRandomArr = require('unique-random-array');
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArr(starWarsNames)
};
