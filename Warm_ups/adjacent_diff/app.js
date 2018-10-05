//Given an array of strings, find the 3 adjacent elements with the longest combined length. 
//Return them in the form of an array.

//const testArr = ["puppy", "kitten", "kid", "chick", "calf", "piglet"]

const adjacentArr = arr => {
  let total = 0;
  let indexOfLongest = 1;
  for(let i = 1; i < arr.length - 1; i++) {
    const totalCurrentLength = arr[i-1].length + arr[i].length + arr[i+1].length;
    if (totalCurrentLength > total) {
      total = totalCurrentLength;
      indexOfLongest = i;
    }
  }
  return arr.slice(indexOfLongest - 1, indexOfLongest + 2)
}

// adjacentArr(testArr);

module.exports = adjacentArr;