const timeCalculation = require('../timeCalculation')

const initializeDriver = (name, username, email, gameId, ) => {
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

const addDrivingData = (driverInstance, tripData) => {

}

module.exports = { initializeDriver }