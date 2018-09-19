document.getElementById("btn").addEventListener("click", displayCount);
var count = 0;

function displayCount() {
  count++;
  document.getElementById("show-count").innerHTML = count;
}