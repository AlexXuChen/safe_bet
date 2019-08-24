const timeCalculation = require('../timeCalculation/timeCalculation')
const driverData = require('../driver/driverData')

const checkEligiblity = (gameInstance) => {
  gameInstance.players.foreach((player) => {
    if (player.drivingData.length >= gameInstance.thresholdDrives && driverData.totalTime ) {

    }
  })
}

module.exports = {checkEligiblity} 
