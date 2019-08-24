const timediff = require('timediff')

const calculateElapsedTime = (startTime, endTime) => {
  const elapsedTimeRaw = timediff(startTime, endTime, 's')
  return elapsedTimeRaw.milliseconds
}

const bestTime = () => {

}

module.exports = { calculateElapsedTime, bestTime }