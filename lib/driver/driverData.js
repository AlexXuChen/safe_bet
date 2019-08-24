const timeCalculation = require('../timeCalculation')

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

const addDrivingData = (driverInstance, tripData, startTime, endTime) => {
  const elapsedTimeToAdd = timeCalculation.calculateElapsedTime(startTime, endTime)
  const drivingTimeData = {
    startTime: startTime,
    endTime: endTime,
    elapsedTime: elapsedTimeToAdd,
    estimatedDuration: tripData.rows[0].elements[0].duration.value*1000,
    milesTravelled: tripData.rows[0].elements[0].distance.value
  }
  driverInstance.drivingData.push(drivingTimeData)
  driverInstance.totalTime += elapsedTimeToAdd
}

module.exports = { initializeDriver, addDrivingData }