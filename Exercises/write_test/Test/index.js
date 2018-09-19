var chai = require("chai");
var assert = chai.assert;

var getLongestString = require("../app.js");

var testCases = {
  one: ["", "a", "bb", "cc", "dd", "ee"],
  two: ["abc", "abcd", "ab", "xyzz"],
  three: [""]
}

describe("Testing longest string function", function (){
  it("should return 'bb' ", function() {
    assert.strictEqual(getLongestString(testCases.one), "bb");
  })
  it("should return 'abcd' ", function() {
    assert.strictEqual(getLongestString(testCases.two), "abcd");
  })
  it("should return empty string", function() {
    assert.strictEqual(getLongestString(testCases.three), "");
  })
})
