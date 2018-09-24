//require the dependency
var readlineSync = require("readline-sync");

//Create an interactive program that asks you some information (name, age, favorite color, etc.) and reports back what you entered
var name = readlineSync.question("What is your name? ");
console.log("Hi " + name + "!");

var age = readlineSync.question("How old are you? ");
console.log("You are " + age + " years old");

var music = readlineSync.question("What musical artist is your favorite? ");
console.log(music.toUpperCase() + " makes great music!");

var hobby = readlineSync.question("What do you enjoy doing? ");
console.log(hobby + "." + " Wow, that sounds amazing. You really live life to the fullest!");
console.log("That was " + hobby.length + " characters long");


var color = readlineSync.question("What is your favorite color?");
var animal = readlineSync.question("What is your favorite animal?");
console.log(color.concat(" ", animal) + " is your spirit animal");


  var story = readlineSync.question("Tell me a story:");
  function returnHalf(){
    if (story.length > 20) {
      return story.split(20)
    } else {
      return story
    }
  }
console.log(returnHalf);




//String Manipulations
//Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)