const questions = [
  {
    question: "When did Javascript first appear?",
    answer: ["1995", "2000", "1990", "2005"],
    correctAnswer: "1995",
  },
  {
    question: "Which one of these is a Javascript framework?",
    answer: ["Judy", "Pumpkin", "React", "Angle"],
    correctAnswer: "React",
  },
];

const remainingTime = document.getElementById("timer");
const startButton = document.getElementById("startButton");
let i = 0;
let time = 5;

const startTimer = () => {
  let countdown = setInterval(function () {
    remainingTime.innerHTML = time--;
    if (time < 0) {
      clearInterval(countdown);
    }
  }, 1000);
};

const createQuestionCont = (questionParam) => {
  const questionCont = document.getElementById("questionsContainer");
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

  answerCont.addEventListener("click", chosenAnswer);
};

const chosenAnswer = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      i += 1;
      const questionRemove = document.getElementById("questionsContainer");
      questionRemove.remove();
      createQuestionCont(questions[0]);
    } else {
      alert("WRONG");
    }
  }
};

const intro = document.getElementById("introSection");

const startQuiz = () => {
  // Begin timer
  startTimer();
  // create questionsCont
  createQuestionCont(questions[0]);
  // remove startMainContainer
  intro.remove();
};

startButton.addEventListener("click", startQuiz);
