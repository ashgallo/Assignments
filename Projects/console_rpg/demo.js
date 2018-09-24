var readlineSync = require("readline-Sync");

//DEPENDENCIES
var player = require("./player.js");
var enemies = require("./enemy.js");

//Game Messages
var victory = "You won!";
var loss = "You lost! Better luck next season.";
var exit = "Please come again!";
var denied;
var endMessage;

player.name = readlineSync.question("Welcome Quester... What shall I call you?");

while (true) {
  var choice = readlineSync.keyInSelect(["walk", "check inventory"], "What would you like to do next?");
  if (choice === 0) {
    //handle walking
    console.log("Im walking");
    var chance = Math.random();
      if (chance < .25){
        var index = Math.floor(Math.random() * enemies.length);
        var singleEnemy = enemies[index];
        console.log(`You've encountered ${singleEnemy.name}`);
        
      }


  } else if (choice === 1) {
    console.log(player.inventory);
  } else {
    endMessage = exit;
    break;
  }
}

console.log(endMessage);