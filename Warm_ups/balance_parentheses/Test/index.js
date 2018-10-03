//Given a string including parentheses, write a function that returns true if every 
//opening parenthesis has a closing parenthesis.
//Also, every closing parentheses needs an opening partner before it.

var {assert} = require("chai");
const strParentheses = require("../app.js");

const hasOpeningParenthesis = ["() ()", "(())"]

const hasNone = ["()))", "))"]

describe("Test string for opening parenthesis", () => {
  it("should return True", () => {
    assert.isTrue(strParentheses(hasOpeningParenthesis[0]));
  })
  it("should return True", () => {
    assert.isTrue(strParentheses(hasOpeningParenthesis[1]));
  })
})

describe("Test string for opening parenthesis", () => {
  it("should return False", () => {
    assert.isFalse(strParentheses(hasNone[0]));
  })
  it("should return False", () => {
    assert.isFalse(strParentheses(hasNone[1]));
  })
})
