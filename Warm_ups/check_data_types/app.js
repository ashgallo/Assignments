//Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), 
//write a function that returns whether EACH element within each subarray belongs to the same data type

//use the EVERY array method
const checkDataTypes = arr => {
  const firstDataType = typeof arr[0][0];
  return arr.every(nestedArray => nestedArray.every(el => typeof el === firstDataType));
}

//another solution
function checkTypes(arr) {
  var arrType = typeof arr[0][0]
  for(var i = 0; i< arr.length; i++){
    for(var y = 0; y < arr[i].length; y++){
    if(typeof arr[i][y] !== arrType) return false
    }
  }
  return true
}

//antoher solution
const checkDataTypes = (arr) => {
  return [].concat(...arr).every(i => typeof i === typeof arr[0][0]);
}

//these methods would work:  filter, map, sort, reduce, every, some

module.exports = checkDataTypes;

