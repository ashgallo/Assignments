var {assert} = require("chai");
const checkDataTypes = require ("../app.js");


//test cases
const notSameDataTypes = [[1,2,3],["a","b","c"],[3, "b", true]];
const sameDataTypes = [[true,false,true],[false,false,true]];


describe("Test data types", () => {
  it("should return False", () => {
    assert.isFalse(checkDataTypes(notSameDataTypes));
  })
})

describe("Test data types", () => {
  it("should return True", () => {
    assert.isTrue(checkDataTypes(sameDataTypes));
  })
})