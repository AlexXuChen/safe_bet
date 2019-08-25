var startTime;
var stopTime;

var actualTime = document.getElementById("actualTime");

const calculateElapsedTime = (startTime, endTime) => {
  const elapsedTimeRaw = (endTime - startTime) / 1000;
  console.log(elapsedTimeRaw);

  actualTime.innerHTML = elapsedTimeRaw;
  return elapsedTimeRaw
}

function setTime(element) {
  var thisButton = element;
  var currentTime = Date.now();

  if (element.id == "startButton") {
    console.log("Start time captured: " + currentTime);
    startTime = currentTime;

  } else {
    console.log("Stop time captured: " + currentTime);
    stopTime = currentTime;



    addDrivingData(BobDriver, calculateElapsedTime(startTime, stopTime), startTime, stopTime);



  }
}

const safeDrivingRate = (safeTrips, totalTrips) => {
  return safeTrips / totalTrips
}

const getDate = () => {
  return new Date()
}