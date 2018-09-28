// Create a function that accepts the inscription.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.

//split string into an array
//loop thorugh the array
//check the first index & last index of each word
//add item to output array based on above

function matchWords(str) {
  const toArray = str.split(" ");
  const output = [];
  for (let i = 0; i < toArray.length; i++) {
    if(i !== toArray.lastIndexOf(toArray[i]) && !output.inlcudes(toArray[i])) {
      output.push(toArray[i]);
    }
  }
  return output;
}

matchWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")

//more optimal
const matchWords = str => {
  const toArray = str.split(" ");
  const count = {};
  const output = {};
  for(let i = 0; i < toArray.length; i++) {
    if(!count[toArray[i]]) {    //there is no count
      count[toArray[i]] = 1;
    } else if(count[toArray [i]] === 1){      //the count is one
      count[toArray[i]++];
      output.push(toArray[i]);
    }
  }
  return output;
}

matchWords("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")
