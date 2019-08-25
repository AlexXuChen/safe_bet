const checkEligiblity = (gameInstance) => {
  gameInstance.players.foreach((player) => {
    //if enough trips
    if (player.drivingData.length >= gameInstance.thresholdDrives) {
      player.drivingData.foreach((drivingData) => {
        if (Math.abs(drivingData.elapsedTime - drivingData.estimatedDuration) > gameInstance.timeDeviation) {
          player.invalidTrips++;
        }
      })
    }
    if (player.invalidTrips <= gameInstance.invalidTripThreshold) {
      player.drivingData.eligible = true;
    }
  })
}