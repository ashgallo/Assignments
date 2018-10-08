//Write two functions that mimic the .every and .some array methods.

//every(arr, callback): Given an array and a callback function, 
//return true or false based on whether each element of the array, 
//when inserted as a parameter to the callback, returns true.


//some(arr, callback): Given an array and a callback function, 
//return true or false based on whether at least ONE element of the array, 
//when inserted as a parameter to the callback, returns true.

const every = (arr, cb) => {
  //loop through array, and perform the cb on each element
  for(let i = 0; i < arr.length; i++) {
    if(!cb(arr[i])) return false;
  }
  return true;  
}

const some = (arr, cb) => {
  for(let i = 0; i < arr.length; i++) {
    if(cb(arr[i])) return true;
  }
  return false; 
}

module.exports = { every, some };