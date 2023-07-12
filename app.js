const timeWrapper = document.querySelector(".time-wrapper");
const dateWrapper = document.querySelector(".date-wrapper");

const display = () => {
  // Current date
  const today = new Date();

  // Time
  const hours = today.getHours();
  const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
  //
  timeWrapper.innerHTML = `<span>${hours}:${minutes}</span>`;

  // today
  const days = today.toLocaleString("default", { weekday: "long" });
  const date = today.getDate();
  const months = today.toLocaleString("default", { month: "long" });
  //
  dateWrapper.innerHTML = `<span>${days}</span>
  <span class="num-days">${date}</span>
  <span>${months}</span>`;
};

//
window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    display();
  }, 1000);
});
