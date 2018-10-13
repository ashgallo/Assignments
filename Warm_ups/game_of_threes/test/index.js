const { assert } = require("chai");
const isDivisible = require("../app.js");

const case1 = [
  [3, 6, 7]
]

describe("test recursive function", () => {
  it("should be divisible by three", () => {
    assert.deepEqual(isDivisible(...case1))
  })
})