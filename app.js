const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const days = document.getElementById("days");
const numDays = document.getElementById("num-days");
const months = document.getElementById("months");

const display = () => {
    // Current date
    const date = new Date();

    // Time
    hours.textContent = date.getHours();
    minutes.textContent =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    // Date
    days.textContent = date.toLocaleString("default", { weekday: "long" });
    numDays.textContent = date.getDate();
    months.textContent = date.toLocaleString("default", { month: "long" });
};

//
window.addEventListener("DOMContentLoaded", display);
