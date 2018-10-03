const strParentheses = str => {
  //track with counter
  let counter = 0;
  //check each character
  for(let i = 0; i < str.length; i++) {
     //if left  --
    if (str[i] === "(") {
      counter--;
    } 
    if (str[i] === ")") {
      //if right ++
      counter++;
      //if > 0 return false immediately
      if(counter > 0) return false;
    }
    //after loop, check if count is 0
  }
  return counter === 0;  
}

module.exports = strParentheses;