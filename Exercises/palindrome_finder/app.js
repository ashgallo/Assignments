//Write a function that accepts a string as an argument and returns true 
//if the string is a palindrome (the string is the same forward and backward), 
//or false if it is not.

function isPalindrome(str) {
  str = str.replace(/[^A-z]/gi, "").toLowerCase();
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - (1 + i)]) {
          return false;
      }
  }
  return true;
}

module.exports = isPalindrome;