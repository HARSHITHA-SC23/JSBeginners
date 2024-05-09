timer = document.getElementById("timer")
// startButton = document.getElementById("startButton").disabled

// Set the initial timer values
let stopwatch = {
    hour: 0,
    minute: 0,
    seconds: 0
}

function initialValues() {
    timer.textContent =
        `   0${stopwatch.hour} :
        0${stopwatch.minute} :
        0${stopwatch.seconds}
    `
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000)
    document.getElementById("startButton").disabled = true
    document.getElementById("stopButton").disabled = false
}

function stopTimer() {
    clearInterval(timerInterval)
    document.getElementById("startButton").disabled = false
    document.getElementById("stopButton").disabled = true
}

function resetTimer() {
    stopwatch = {
        hour: 0,
        minute: 0,
        seconds: 0
    }
    initialValues()
}

function updateTimer() {
    stopwatch.seconds++
    if (stopwatch.seconds > 59) {
        stopwatch.minute++
        stopwatch.seconds = 0
    }
    if (stopwatch.minute > 59) {
        stopwatch.hour++
        stopwatch.minute = 0
    }
    timer.textContent =
        `
        ${stopwatch.hour < 10 ? '0' + stopwatch.hour : stopwatch.hour} :
        ${stopwatch.minute < 10 ? '0' + stopwatch.minute : stopwatch.minute} :
        ${stopwatch.seconds < 10 ? '0' + stopwatch.seconds : stopwatch.seconds}
    `
}

initialValues()