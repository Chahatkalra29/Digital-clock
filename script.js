let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
    let currentTime = new Date();

    hours.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    minutes.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    seconds.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
}, 1000);
