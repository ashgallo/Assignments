//Given an array of integers and a target integer, 
//return the indices of the FIRST two numbers which add up to the target.

//Assume the same element may not be used twice.

const twoSum = (arr, int) => {
  const output = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === int) {
        return [i, j];
      }
    }
  }
  throw Error("No numbered pair equals sum")
}

module.exports = twoSum;



