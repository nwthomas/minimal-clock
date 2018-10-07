const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const timeText = document.querySelector(".text");

function getLength(x) {
    if (x.toString().length == 1) {
        return "0" + x.toString();
    } else {
        return x;
    }
}

function getDate(){
    let dayOfWeek = new Date().getDay();
    return isNaN(dayOfWeek) ? null : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 24) * 360) + 90;

    document.querySelector(".text").innerHTML = "Today is " + getDate(now) + ". The time is " + hours + ":" + getLength(minutes) + ".";

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);