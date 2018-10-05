var { assert } = require('chai');
var adjacentArr = require('../app.js');

const testArr = ["puppy", "kitten", "kid", "chick", "calf", "piglet"]

describe("test logest adjacent strings", () => {
  it("should return chick, calf, piglet", () => {
    assert.deepEqual(adjacentArr(testArr));
  })
}) 
