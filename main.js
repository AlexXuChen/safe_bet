const timediff = require('timediff');

var startTime;
var stopTime;

const calculateElapsedTime = (startTime, endTime) => {
    const elapsedTimeRaw = timediff(startTime, endTime, 's')
    return elapsedTimeRaw.milliseconds
}

// startButton.addEventListener('click', () => {
//     //var thisButton = element;
//     var currentTime = new Date();
//     console.log("here's the current time: " + currentTime);
//     // if (element.id == "startButton") {
//     //     console.log("Start time captured");
//     //     startTime = currentTime;
//     // } else {
//     //     console.log("Stop time captured");
//     //     stopTime = stopTime;
//     //     calculateElapsedTime(startTime, stopTime);
//     // }
// });

class Main {
    constructor() {
        this.startButton = document.getElementById("startButton");
        this.startButton.addEventListener('click', () => {
            this.timerClick;
            console.log("hi");
        })
    }

    timerClick() {
        console.log("hi");
    }
}

var main = null;
//Initializes the main class on window load



window.addEventListener('load', () => {
    main = new Main()
});


// const safeDrivingRate = (safeTrips, totalTrips) => {
//     return safeTrips / totalTrips
// }


const getDate = () => {
    return new Date()
}



// module.exports = {
//     calculateElapsedTime,
//     safeDrivingRate,
//     getDate,
//     setTime
// }