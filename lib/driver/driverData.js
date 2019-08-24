const timeCalculation = require('../timeCalculation')

const initializeDriver = (name, username, email, gameId) => {
  return {
    name: name,
    username: username,
    email: email,
    gameId: gameId,
    timestamp: new Date(),
    drivingData: [],
    eligible: false
  }
}

const addDrivingData = (driverInstance, tripData, startTime, endTime) => {
  const drivingTimeData = {
    startTime: startTime,
    endTime: endTime,
    elapsedTime: timeCalculation.calculateElapsedTime(startTime, endTime),
    estimatedDuration: tripData.rows[0].elements[0].duration.value*1000,
    milesTravelled: tripData.rows[0].elements[0].distance.value
  }
  driverInstance.drivingData.push(drivingTimeData)
}

module.exports = { initializeDriver, addDrivingData }