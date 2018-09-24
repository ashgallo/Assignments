var display = document.getElementById("time-display");

function getTime() {
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  display.textContent = `${hour}:${min}:${sec}`//template literal/string
}

//these take in two arguments.  1st is calling the function getTime, 2nd is the time argument
//setTimeout(getTime, 3000)  //this will only happen once
//setInterval(getTime, 3000)  //this will coninously happen

//To stop the interval
//var timeIntervalID = setInterval(getTime, 1000);
//clearInterval(timeIntervalID, 5000)
getTime();