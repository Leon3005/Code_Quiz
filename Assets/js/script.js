const questions = {
  question: "When did Javascript first appear?",
  answer: ["1995", "2000", "1990", "2005"],
  correctAnswer: "1995",
};

const remainingTime = document.getElementById("timer");
const startButton = document.getElementById("startButton");
let time = 60;

const startTimer = () => {
  setInterval(function () {
    remainingTime.innerHTML = time--;
  }, 1000);
};

const createQuestionCont = (questions) => {
  const questionCont = document.createElement("div");
  questionCont.setAttribute("class", "questionsContainer");
  questionCont.setAttribute("data-answer", questions.correctAnswer);

  const h2 = document.createElement("h2");
  h2.setAttribute("id", "question");
  h2.textContent = questions.question;

  console.log("hi");
};

const startQuiz = () => {
  // Begin timer
  startTimer();
  // create questionsCont
  // createQuestionCont(questions[0]);
  // remove startMainContainer
  // Append questionsCont
};

startButton.addEventListener("click", startQuiz);
