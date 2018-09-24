//creates a password
//number specifies length
//returns random password with specified length
function randomPasswordGenerator(num) {
  var password = '';
  for (var i=0; i<number; i++) {
      password += String.fromCharCode(Math.floor(Math.random() * 93) + 33);
  }
  return password;
}

console.log(result(num[5]))


// console.log(Math.floor(Math.random() * 10) + 1); //this generates a random number

// console.log(String.fromCharCode(97)); //references the acsii codes