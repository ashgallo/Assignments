var {assert} = require("chai");

var missingNum = require("../app.js");

var testCases = {
  one: [2,1,3,5],
  two: [12,10,9],
  three: [-3,0,-2,3,2,-1]
}

describe("find missing number from array", function() {
  it("should return 4", function() {
    assert.strictEqual(missingNum(testCases.one), 4);
  })
  it("should return 11", function() {
    assert.strictEqual(missingNum(testCases.two), 11);
  })
  it("should return 1", function() {
    assert.strictEqual(missingNum(testCases.three), 1);
  })
})