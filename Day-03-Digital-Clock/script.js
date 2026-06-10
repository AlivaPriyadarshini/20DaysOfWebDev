const time = document.getElementById("time");
const date = document.getElementById("date");

function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    second = String(second).padStart(2,"0");

    time.textContent = `${hours}:${minutes}:${second}`;

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const months =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    date.textContent - `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear}`;
}

updateClock();

setInterval(updateClock,1000);