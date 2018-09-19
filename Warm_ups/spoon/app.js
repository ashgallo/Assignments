var coffee = {
  isHot: true,
  cupColor: "white & pink",
  howFull: 0.50,
  tellMe: function() {
    return "Is my coffee hot? " + this.isHot + " My cup is " + this.cupColor
  }
}

console.log(coffee.tellMe());

var computer = {
  brand: "Apple",
  type: "laptop",
  fullCharge: false,
}