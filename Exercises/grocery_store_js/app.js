var shopper = {
  firstName: "Lily",
  age: 11,
  moneyToSpend: false,
  shoppingCart: ["bananas", "almonds", "avocado", "cheesecake"],
  nameAge: function() {
    return this.firstName + " " + this.age;
  }
};


console.log(shopper.nameAge());