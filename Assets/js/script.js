const remainingTime = document.getElementById("timer");
const startButton = document.getElementById("startButton");
let time = 60;

const startTimer = () => {
  remainingTime.innerHTML = time;
};

// const countdown = () => {
//   time -= 1;
//   setInterval(countdown, 1000);
// };

startButton.addEventListener("click", startTimer);
