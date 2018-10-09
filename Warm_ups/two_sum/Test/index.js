const { assert } = require("chai");
const twoSum = require("../app");

const case1 = [
  [1,2,3],
  4
];
const case2 = [
  [2,4,6,4],
  8
];
const case3 = [
  [3,5,7,2,1],
  7
]
const case4 = [
  [1,2,3,4,5],
  15
]

describe("test twoSum", () => {
  it("should return [0, 2]", () => {
    assert.deepEqual(twoSum(...case1), [0,2])
  })
  it("should return [0, 2]", () => {
    assert.deepEqual(twoSum(...case2), [0,2])
  })
  it("should return [1, 3]", () => {
    assert.deepEqual(twoSum(...case3), [1,3])
  })
  it("should throw an error)", () => {
    assert.throws(() => twoSum(...case4), "No numbered pair equals sum")
  })
})
