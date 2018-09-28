const chai = require("chai");
const assert = chai.assert;
const multTable = require("../app");

const expected = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

describe("Testing mult table function", () => {
  it("should return a 5 x 5 mult table", () => {
    assert.deepEqual(multTable(), expected);
  })
})