//loop through string
//check if the letter is in the string already
//if not, track it by adding as a key value pair to the ouput (set to 1)
//if have seen, add one to the key value pair
//greedy algorithm (its going into a bucket)

function countTotal(str) {
  var count = {}
  for(var i = 0; i < str.length; i++){
    if(count[str[i]]){
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }
  var dupesRemoved = "";
  for(var key in count) {
    dupesRemoved += key;
  }
  return count;
}

console.log(countTotal("testing counter"));