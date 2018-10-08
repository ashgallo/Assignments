const {assert} = require("chai");
const {every, some } = require("../app.js");

//every test cases
const case1 = [
  [1, 2, "3", 4, 5],  
  num => typeof num === "number"
]
const case2 = [
  ["1", "2", "3", "4"],
  str => typeof str === "string"
]

//some test cases
const case3 = [
  ["1", "2", "3", "4"], 
  num => typeof num === "number"
]
const case4 = [
  [1, 2, "3", 4, 5],
  str => typeof str === "number"
]

describe("test every", () => {
  it("should return false", () => {
    assert.isFalse(every(...case1));
  })
})
it("should return true", () => {
  assert.isTrue(every(...case2));
})

describe("test some", () => {
  it("should return false", () => {
    assert.isFalse(some(...case3));
  })
})
it("should return true", () => {
  assert.isTrue(some(...case4));
})