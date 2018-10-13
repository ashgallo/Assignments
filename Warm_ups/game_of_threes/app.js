//Write a recursive function that takes two integers, n and counter as parameters and does the following:

//If the n is divisible by three, divide it by three and call the function again, providing the new value as n and counter + 1 as counter

//If not, either add or subtract 1 to a get a new value that is divisible by three and repeat step 1.

//If n is one, simply return the value counter.

function gameOf3(n, counter) {
  //base case
  if (n===1) return counter;

  const addOne = (n + 1);
  const minusOne = (n - 1);

  //recursion
  if (n % 3 === 0) return gameOf3(n / 3, counter + 1)
  if (addOne % 3 === 0) return gameOf3(addOne / 3, counter + 1);
  if (minusOne % 3 === 0) return gameOf3(minusOne / 3, counter + 1)
}

console.log(gameOf3(1));

//module.exports = isDivisible;