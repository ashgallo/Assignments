var {assert} = require("chai");
var isPalindrome = require("../app");



describe("Test if string is a palindrome", function() {
  it("should be true", function() {
    assert.isTrue(isPalindrome("30racecar03"), true);
  })
  it("should be false", function() {
    assert.isFalse(isPalindrome("dog barks"), false);
  })
  it("should be true", function() {
    assert.isTrue(isPalindrome("Star Rats"), true)
  })
});
