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
    time = time - 1;
  };
  setInterval(function () {
    countdown();
  }, 1000);
  console.log(time);
};

const createQuestionCont = () => {
  const questionCont = document.createElement("div");
  questionCont.setAtrribute("class", "questionsContainer");
  questionCont.setAtrribute("data-answer", questions.correctAnswer);
};

const startQuiz = () => {
  // create questionsCont
  // remove startMainContainer
  // Append questionsCont
};

startButton.addEventListener("click", startTimer);
