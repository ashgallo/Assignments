function getLongestString(arr) {
  for (i = 0; i < arr.length; i++) {
    if(arr[i].length > arr[0].length) arr[0] = arr[i];
  }
  return arr[0];
}

module.exports = getLongestString;