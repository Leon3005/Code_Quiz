const questions = [
  {
    question: "When did Javascript first appear?",
    answer: ["1995", "2000", "1990", "2005"],
    correctAnswer: "1995",
  },
];

const remainingTime = document.getElementById("timer");
const startButton = document.getElementById("startButton");
let time = 60;

const startTimer = () => {
  setInterval(function () {
    remainingTime.innerHTML = time--;
  }, 1000);
};

const createQuestionCont = (questionParam) => {
  const questionCont = document.getElementsByClassName("questionsContainer");
  questionCont.setAttribute("data-answer", questionParam.correctAnswer);

  const h2 = document.createElement("h2");
  h2.setAttribute("id", "question");
  h2.textContent = questionParam.question;

  const answerCont = document.createElement("div");
  answerCont.setAttribute("class", "answerBoxes");

  const answers = questionParam.answer;

  for (let i = 0; i < answers.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("id", `answer${i + 1}`);
    button.textContent = answers[i];
    answerCont.appendChild(button);
  }

  questionCont.appendChild(h2);
  questionCont.appendChild(answerCont);

  console.log("hi");
};

const startQuiz = () => {
  // Begin timer
  startTimer();
  // create questionsCont
  createQuestionCont(questions[0]);
  // remove startMainContainer
  // Append questionsCont
};

startButton.addEventListener("click", startQuiz);
