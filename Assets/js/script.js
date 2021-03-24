const questions = {
  question: "When did Javascript first appear?",
  answer: ["1995", "2000", "1990", "2005"],
  correctAnswer: "1995",
};

const remainingTime = document.getElementById("timer");
const startButton = document.getElementById("startButton");
let time = 60;

const startTimer = () => {
  remainingTime.innerHTML = time;
  const countdown = () => {
    time -= 1;
  };
  setInterval(countdown, 1000);
};

startButton.addEventListener("click", startTimer);
