//loop through 1-100
//check against conditions
//either a string or number to the output array

function fizzBuzz(){
  var numArray = [];
  for(var i = 1; i <= 100; i++) {
      if((i % 3 === 0) && (i % 5 !== 0)) {
          numArray.push("fizz");
      } else if((i % 3 !== 0) && (i % 5 === 0)) {
          numArray.push("buzz");
      } else if ((i % 3 === 0) && (i % 5 === 0)) {
          numArray.push("fizzbuzz");
      } else {
          numArray.push(i);
      }
  }
  return numArray;
} 

console.log(fizzBuzz);

//create an object to take the return of fizzbuzz & output a tally of times fizz, buzz, fizzbuzz is returned
//greedy method

// function tally (arr) {
//   var counter = {
//     fizz: 0,
//     buzz: 0,
//     fizzbuzz: 0,
//   }
//   for (var i = 0; i < arr.length; i++) {
//     switch(arr[i]) {
//       case "buzz": 
//         counter.buzz++;
//         break;
//       case "fizz":
//         counter.fizz++;
//         break;
//       case "fizzbuzz":
//         counter.fizzbuzz++;
//         break;
//     }
//   }
//   return counter;
// }

// const fizzArray = fizzBuzz();

// console.log(tally(fizzArray))

//has own property method

function tally (arr) {
  var counter = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0,
  }
  for (var i = 0; i < arr.length; i++) {
    if(counter.hasOwnProperty(arr[i])) {
      counter[arr[i]++];
    }
  }
  return counter;
}

const fizzArray = fizzBuzz();

console.log(tally(fizzArray))