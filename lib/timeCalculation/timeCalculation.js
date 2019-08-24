const timediff = require('timediff')

const calculateElapsedTime = (startTime, endTime) => {
  const elapsedTimeRaw = timediff(startTime, endTime, 's')
  return elapsedTimeRaw.milliseconds
}

const safeDrivingRate = (safeTrips, totalTrips) => {
  return safeTrips/totalTrips
}

const getDate = () => {
  return new Date()
}

module.exports = { calculateElapsedTime, safeDrivingRate, getDate }