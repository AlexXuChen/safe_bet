const timediff = require('timediff')

const calculateElapsedTime = (startTime, endTime) => {
  const elapsedTime = timediff(startTime, endTime)
}

module.exports = { calculateElapsedTime }