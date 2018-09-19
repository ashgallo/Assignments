var colorBox = document.getElementById("box-one");

colorBox.addEventListener("mouseover", function() {
  colorBox.style.backgroundColor = "blue";
})


colorBox.addEventListener("mouseout", function() {
  colorBox.style.backgroundColor = "black";
})

colorBox.addEventListener("mousedown", function() {
  colorBox.style.backgroundColor = "red";
})

colorBox.addEventListener("mouseup", function() {
  colorbox.style.backgroundColor = "yellow";
})

colorBox.addEventListener("dblclick", function() {
  colorBox.style.backgroundColor = "green";
})

window.addEventListener("wheel", function(){
  colorBox.style.backgroundColor = "orange";
})

window.addEventListener("keypress", function(e) {
  if (e.keyCode === 114) {
    colorBox.style.backgroundColor = "red";
  } else if (e.keyCode === 103) {
      colorBox.style.backgroundColor = "green";
    } else if (e.keyCode === 98) {
      colorBox.style.backgroundColor = "blue";
    } else if (e.keyCode === 119) {
      colorBox.style.backgroundColor = "white";
    } else if (e.keyCode === 112) {
      colorbox.style.backgroundColor = "purple";
    } else if (e.keyCode === 121) {
      colorBox.style.backgroundColor = "yellow";
    } else if (e.keyCode === 111) {
      colorBox.style.backgroundColor = "orange";
    }
})

//use this to see what properties are available to you
// window.addEventListener("keypress", function(e) {
//  console.log(e)
// })