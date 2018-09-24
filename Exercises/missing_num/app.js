//Write a function that returns the missing number from an unsorted array of numbers.
  //Find:  Create a function that identifies the range of numbers within a given array.
  //Return:  Have the function return all numbers missing within the range.
  //Note: array has at least 3 elements & no repeats

function missingNum(arr){
  arr.sort(function(a, b){
      return a - b;
  });
  for(var i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i + 1] - 1){
          return arr[i + 1] - 1;
      }
  }
}

module.exports = missingNum;