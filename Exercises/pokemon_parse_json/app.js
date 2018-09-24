// var body = document.querySelector("body");

// var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200)
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();

//need to loop through objects.pokemon