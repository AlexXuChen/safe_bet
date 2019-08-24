const timediff = require('timediff');

var startTime;
var stopTime;

function setTime(element) {
  var thisButton = element;
  var currentTime = new Date();

  if (element.id == "startButton") {
    console.log("Start time captured");
    startTime = currentTime;
  } else {
    console.log("Stop time captured");
    stopTime = stopTime;
    calculateElapsedTime(startTime, stopTime);
  }
}

const calculateElapsedTime = (startTime, endTime) => {
  const elapsedTimeRaw = timediff(startTime, endTime, 's')
  return elapsedTimeRaw.milliseconds
}

const safeDrivingRate = (safeTrips, totalTrips) => {
  return safeTrips / totalTrips
}


const getDate = () => {
  return new Date()
}



module.exports = {
  calculateElapsedTime,
  safeDrivingRate
}