var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];



//Prints the array of lyrics to the console, including necessary spaces
function printSong(lyrics) {
  return lyrics.join(" ");
}
console.log(printSong(lyrics));

//Prints lyrics backwards ("pretty so I'm myself kiss Gotta", ...)
function reverseSong(lyrics) {
  return lyrics.slice().reverse().join(" ");
  //want to use slice here so that a copy of the array is stored & then reversed, otherwise reverse would change the original array.
}
console.log(reverseSong(lyrics));

//Prints every other word to the console, (e.g. "this that cold Pfeiffer" ...)
//use the Greedy Method
function printEveryOther(lyrics) {
  var lyricString = "";
  for(var i = 0; i < lyrics.length; i++) {
    if(i % 2 === 0) { //or can do if(!(i % 2)){
      lyricString += lyrics[i] + " ";
    }
  }
  return lyricString;
}
console.log(printEveryOther(lyrics));

//Prints all of lyrics, but every two words are switched ( "hit This ice that Michelle cold" ...)
function switchLyrics(lyrics) {
  var lyricString = "";
  for(var i = 0; i < lyrics.length; i += 2) {
    if (lyrics[i + 1]) {
      lyricString += lyrics[i + 1] + " ";
    }
    lyricString += lyrics[i] + " ";
  }
  return  lyricString;
}
console.log(switchLyrics(lyrics));

//Prints lyrics in a random order
function randomLyrics(lyrics) {
  var output = [];
  var length = lyrics.length;
  for (var i = 0; i < length; i++) {
    var getRandom = Math.floor(Math.random() * lyrics.length);
    output.push(lyrics[getRandom]);
    lyrics.splice(getRandom, 1);
  }
  return output.join(" ");
}
console.log(randomLyrics(lyrics));