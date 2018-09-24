var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// // //remove from the end of the array
console.log(vegetables.pop(3));
// console.log(vegetables);

// //remove from the beginning of the array
console.log(fruit.shift());
// console.log(fruit);

// //index of "orange"
console.log(fruit.indexOf("orange"));

// //add "orange" index number to end of the fruit array
console.log(fruit.push("1"));
// console.log(fruit);

//find length of vegetable array
console.log(vegetables.length);

//add vegetable length number to end of vegetable array
console.log(vegetables.push("3"));

//put fruit & vegetable arrays into one new array
var food = fruit.concat(vegetables);
console.log(food);

// //remove 2 elements from the new food array at index 4
console.log(food.splice(4, 2));

// //reverse the array
console.log(food.reverse());

//log array as string to console
console.log(food);

