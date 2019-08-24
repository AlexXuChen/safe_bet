const driveDataStub = require('../drivingRoute/driveData.stub')

const gameData = {
  gameId: '123',
  timestampStarted: '2019-08-24',
  players: [
    ...driveDataStub
  ],
  thresholdDrives: 1,
  thresholdTimeElapsed: 1000
}