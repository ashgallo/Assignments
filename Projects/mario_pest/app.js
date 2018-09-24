var form = document.querySelector("form");

form.addEventListener("submit", function () {
  event.preventDefault();
  var num1 = this.goombas.value;
  var num2 = this.bobombs.value;
  var num3 = this.cheepcheeps.value;
  var totalBaddies = ((num1 * 5) + (num2 * 7) + (num3 * 11));
    alert("Princess Peach owes " + "$" + totalBaddies);
    document.getElementById("total").value = ("$" + totalBaddies);
})