//constructor is where the properties go
class Player{
  constructor(){
    this.name = "";
    this.totalCoins = 0;
    this.status = "small";
    this.hasStar = false;
    this.gameActive = true;
  }
  //methods on a class go here & property in the ()
  setName(namePicked) {
    this.name = namePicked;   //refer to the object itself using 'this'
  }
  gotHit(){
    if (this.status === "Powered Up") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Small";
    } else {
      this.status = "Dead";
      this.gameActive = false;
    }
  }
  gotPoweredUp(){
    if (this.status === "Small") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Powered Up";
    } else if(this.status === "Powered Up") {
      this.hasStar = true;
    }
  }
  addCoin(){
    this.totalCoins++;
  }
  print() {
    console.log(
      `Name: ${this.name}, 
      Status: ${this.status}, 
      Total Coins: ${this.totalCoins},  
      Stars: ${this.hasStar}\n`
    )
  }
}

//assign name to player
const luigi = new Player();
luigi.setName("luigi");

//game loop
const game = setInterval( () => {
  //generate number
  const value = Math.floor(Math.random() * 3);
  //check what number it is & what action to perform
  if (value === 0) {
    luigi.gotHit();
  } else if (value === 1) {
    luigi.gotPoweredUp();
  } else {
    luigi.addCoin();
  }
  //print stats
 luigi.print();
 //check if game is active
 if (!luigi.gameActive){
   clearInterval(game);
 }
 //interval
 }, 750);