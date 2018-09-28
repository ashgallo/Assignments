//function that returns a 10 X 10 multiplication table (2D array)
//function to take a parameter n and return a table with n * n cells

const multTable = () => {
  const output= [];
  for(let row = 1; row <= 5; row++) {
    output.push([]);
    for( let col = 1; col <= 5; col++){
      output[row - 1].push(row * col)
    }
  }
  return output;
}

module.exports = multTable;
