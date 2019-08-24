const timediff = require('timediff')

const calculateElapsedTime = (startTime, endTime) => {
  const elapsedTimeRaw = timediff(startTime, endTime, 's')
  return elapsedTimeRaw.milliseconds
}

const safeDrivingRate = (safeTrips, totalTrips) => {
  return safeTrips / totalTrips
}

module.exports = {
  calculateElapsedTime,
  safeDrivingRate
}