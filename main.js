const day = document.querySelector('.date')
const daysTwo = document.querySelectorAll('.date-2')
const funcitionDate = () => {
    const today = new Date();
    let days = today.getDate()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;

    }
    if (seconds < 10) {
        seconds = "0" + seconds;

    }

    daysTwo.forEach(dayTwo => {
        dayTwo.textContent = `${days}`
    });

    day.textContent = `(${hours}:${minutes}:${seconds})`;

    setTimeout(funcitionDate, 1000)
}
window.addEventListener('DOMContentLoaded', funcitionDate)