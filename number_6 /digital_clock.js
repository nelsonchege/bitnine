function myDigitalClock() {
  var date = new Date();
  var hours = date.getHours(); // 0 - 23
  var minutes = date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds(); // 0 - 59
  var zone = "AM";

  if (hours >= 12) {
    zone = "PM";
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var digitalClock = hours + ":" + minutes + ":" + seconds + " " + zone;

  return digitalClock;
}

console.log(myDigitalClock());
