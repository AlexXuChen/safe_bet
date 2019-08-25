const initializeDriver = (name, username, email, gameId) => {
  return {
    name: name,
    username: username,
    email: email,
    gameId: gameId,
    timestamp: new Date(),
    drivingData: [],
    totalTime: 0,
    eligible: false
  }
}
BobDriver = initializeDriver("Bob", "bob_driver", "bob@gmail.com", "1234");


function addDrivingData(driverInstance, tripData, startTime, endTime) {
  const elapsedTimeToAdd = tripData;
  const drivingTimeData = {
    startTime: startTime,
    endTime: endTime,
    elapsedTime: elapsedTimeToAdd,
    estimatedDuration: document.getElementById("predictedTime").innerHTML,
    // milesTravelled: tripData.rows[0].elements[0].distance.value
  }
  driverInstance.drivingData.push(drivingTimeData)
  driverInstance.totalTime += elapsedTimeToAdd
}