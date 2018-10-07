const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const timeText = document.querySelector(".text");
var seconds = 0;
var minutes = 0;
var hours = 0;

var counter = {
    s: 0,
    m: 0,
    h: 0 
};

// adds 0 to front of minutes in string
function getLength(x) {
    if (x.toString().length == 1) {
        return "0" + x.toString();
    } else {
        return x;
    }
}



// gets text for week day
function getDate(){
    let dayOfWeek = new Date().getDay();
    return isNaN(dayOfWeek) ? null : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday"][dayOfWeek];
}

// get text for month
function getMonth() {
    let monthOfYear = new Date().getMonth();
    return isNaN(monthOfYear) ? null : ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"][monthOfYear];
}

function setDate() {
    var previous = {
        s: seconds,
        m: minutes,
        h: hours
    }

    const now = new Date();
    const currentDate = now.getDate();
    seconds = now.getSeconds();
    minutes = now.getMinutes();
    hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 24) * 360) + 90;

    // remove 24 time
    if (hours > 12) { hours -= 12; }
    
    // new code to stop 360 backwards rotation
    if (seconds < previous.s) { counter.s += 1; }
    if (minutes < previous.m) { counter.m += 1; }
    if (hours < previous.h) { counter.h += 1; }

    // text display
    document.querySelector(".text").innerHTML = "Today is " + getDate() + ", " + getMonth() + " " 
        + currentDate + ". The time is " + hours + ":" + getLength(minutes) + ".";

    // rotation of clock hands
    secondHand.style.transform = `rotate(${(secondsDegrees + (360 * counter.s))}deg)`;
    minuteHand.style.transform = `rotate(${(minutesDegrees + (360 * counter.m))}deg)`;
    hourHand.style.transform = `rotate(${(hoursDegrees + (360 * counter.h))}deg)`;
    console.log(counter.m);
}

setInterval(setDate, 1000);


