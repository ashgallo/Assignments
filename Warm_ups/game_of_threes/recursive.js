//recursive function is a function that calls itself inside itself
//requires:  base case & recursion

function addOneUntil10(n) {
  console.log(n);
  //case case
  if(n >= 10) return 10;
  //recursion
  return addOneUntil10(n + 1);
}

console.log(addOneUntil10(-1000));