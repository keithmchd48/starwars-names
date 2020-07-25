import starWarsNames from './starwars-names.json';
import uniqueRandomArr from 'unique-random-array';
module.exports = {
  all: starWarsNames,
  random: uniqueRandomArr(starWarsNames)
};
