var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
//loop & log final count computers

var computerCount = 0;
for (i = 0; i < officeItems.length; i++){    
  if(officeItems[i] === "computer"){
      computerCount++; //this adds 1 every time "computer" is in the array
    }
}
console.log(computerCount);

//Bonus Challenge
var on = false;
var numOfSwitches = [2, 3, 2];

for(var i = 0; i < numOfSwitches.length; i++){
  if(numOfSwitches[i] % 2 !== 0){
    on = !on;
  }
}

console.log(on);