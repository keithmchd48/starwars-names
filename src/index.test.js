var expect = require('chai').expect;
var starWars = require('./index');

describe('all', function () {
  it('should be an array of strings', function () {
    expect(starWars.all).to.satisfy(isArrayOfStrings);
    function isArrayOfStrings(arr) {
      return arr.every(function (item) {
        return typeof item === 'string';
      })
    }
  });
  it('should include Luke Skywalker', function () {
    expect(starWars.all).to.include('Luke Skywalker')
  })
});

describe('random', function () {
  it('should include random item', function () {
    var randomItem = starWars.random();
    expect(starWars.all).to.include(randomItem);
  })
});
