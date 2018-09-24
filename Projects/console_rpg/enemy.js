//The enemy is random (can be chosen out of a minimum of 3 different enemy names)
//The user can decide to attack or run
//If attacking, you will choose a random attack power between a min and max
//If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
//After the player attacks or runs the enemy attacks back for a random damage amount
//If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory
//If the enemy kills the player the console prints an cool death message and the game ends


//Heatwave:  1. Attack - Face the heat & continue on your way.
          // 2. Run - Outrun the storm
              // Not prepared for the cold & you died from exposure to the elements
//ColdVirus:  1. Attack - Super C  
            //2. Run - You caught a ColdVirus & died from low HP
//RampantHuman:  1. Attack - Stop the crazy
               //2. Run - Human annoys you to death

function Enemy(name, hp, attackpower, item) {
    this.name = name;
    this.hp = hp;
    this.attackpower = attackpower;
    this.item = item;
}
var enemies = [
    new Enemy("RogueStorm", 25, 10, "Uggs & cozy knit blanket"),
    new Enemy("ColdVirus", 50, 30, "Immunity"),
    new Enemy("RampantHuman", 100, 50, "Pumpkin spice latte & muffin"),
]
module.exports = enemies;
