
//loop through the string, remove duplicate letters, create new string without the dupes
//greedy algorithm
//use objects w/in the function to store
//undefined is falsey

//1st
function lettersRemoved(str) {
  //check each character against every other character to see if they're the same
  //remove the duplicate character

  var pastCharacters = {};
  var output = "";

  //loop through string
  for(var i = 0; i < str.length; i++){
    //get current letter
    var currentLetter = str[i];
    //check if letter is in the record object
    if(pastCharacters[currentLetter] === undefined) {
      //add property to record
      pastCharacters[currentLetter] = i;
    } else {
      //add letter to output
      output += currentLetter;
    }
  }
  return output;
}
// console.log(lettersRemoved("busy bumble bee"));

//2nd
function removeDupes(str) {
  var pastCharacters = {};
  var output = "";

  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    if (pastCharacters[currentLetter] === undefined){
      output += currentLetter;
      pastCharacters[currentLetter] = i;
    }
  }
  return output;
}

console.log(removeDupes("busy bumble bee"));