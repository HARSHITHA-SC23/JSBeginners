/*
- We will be having three functions:
    - getCurrentTime: In this function we need to =>
        1. Get the current time and store it in currentTime variable
        2. Now take hour, minute, seconds from the currentTime variable.
        3. And return the hour, minute, seconds value

    - getCurrentDate =>
        1. Get the current date and store it in currentDate variable.
        2. Now sepearte Year, Monthe, date from the currentDate variable.
        3. And return the values.

    - updateEvery1000ms => 
        1. using setTimeInterval method update current time every 1000ms
*/

hour = document.getElementById("hour")
ampm = document.getElementById("ampm")
seconds = document.getElementById("seconds")
date = document.getElementById("date")
const daysOfWeek = ['Sunday', 'Monday', 'Tueday', 'Wedday', 'Thuday', 'Friday', 'Satday'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getCurrentTime() {
    const d = new Date()
    const currentTime = {
        'hours': d.getHours(),
        'minutes': d.getMinutes(),
        'seconds': d.getSeconds()
    }
    const currentDate = {
        'day': d.getDay(),
        'month': d.getMonth(),
        'date': d.getDate()
    }
    let zone = currentTime.hours >= 12 ? 'PM' : 'AM'
    if (currentTime.hours < 10) {
        currentTime.hours = `0${currentTime.hours}`
    }
    if (currentTime.hours > 12) {
        currentTime.hours = `0${currentTime.hours - 12}`
    }
    if (currentTime.minutes < 10) {
        currentTime.minutes = `0${currentTime.minutes}`
    }
    if (currentTime.seconds < 10) {
        currentTime.seconds = `0${currentTime.seconds}`
    }
    hour.textContent = `${currentTime.hours} : ${currentTime.minutes}`
    ampm.textContent = zone
    seconds.textContent = currentTime.seconds
    date.textContent = `${monthsOfYear[currentDate.month]}, ${daysOfWeek[currentDate.day]} ${currentDate.date}`
}
setInterval(() => {
    getCurrentTime()
}, 1000)