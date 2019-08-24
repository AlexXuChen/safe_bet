const driveDataStub = require('../drivingRoute/driveData.stub')

const gameData = {
  gameId: '123',
  timestampStarted: '2019-08-24',
  players: [
    ...driveDataStub
  ],
  thresholdDrives: 1,
  timeDeviation: 120000,
  invalidTripThreshold: 0
}