//This is the array of questions and answers
const questions = [
  {
    question: "What year did Javascript first appear?",
    answer: ["1995", "2000", "1990", "2005"],
    correctAnswer: "1995",
  },
  {
    question: "Which one of these is a Javascript framework?",
    answer: ["Judy", "Pumpkin", "React", "Angle"],
    correctAnswer: "React",
  },
  {
    question: "Which of the below would you use for comments in HTML?",
    answer: ["<!-- -->", "//", "/*", "$$"],
    correctAnswer: "<!-- -->",
  },
  {
    question: "Which tag would you use to link a Javascript file in HTML?",
    answer: ["link", "script", "js", "href"],
    correctAnswer: "script",
  },
  {
    question: "What does CSS stand for?",
    answer: [
      "Cascading Style Sheet",
      "Country Singers Shop",
      "Cascading Simple Sheet",
      "Cascading Sheet Style",
    ],
    correctAnswer: "Cascading Style Sheet",
  },
  {
    question: "End of Quiz",
    answer: ["Go to Highscores!"],
    correctAnswer: "Go to Highscores!",
  },
];

//Created variables for ID's from the HTML file
const remainingTime = document.getElementById("timer");
const startButton = document.getElementById("startButton");
//Setting index to 0 (for arrays) and how many seconds the timer starts at. Also highscore value
let i = 0;
let time = 80;
const highscoreNum = 5;
const highscore = localStorage.getItem("highscore");


//making countdown available in global to use later on
let countdown;

//Function to start the timer and countdown to 0, then stop
const startTimer = () => {
  let countdown = setInterval(function () {
    //This will minus 1 second from time
    remainingTime.innerHTML = time--;
    if (time < 0) {
      prompt("GAME OVER! Enter your username to log your score:");
      clearInterval(countdown);
      window.location.replace("/Assets/html/highscores.html");
    }
  }, 1000);
};

//Function to create the question container with buttons.
//questionParam will be replaced with the questions array when function is called
const createQuestionCont = (questionParam) => {
  const questionCont = document.getElementById("questionsContainer");
  //data-answer will be used later to choose the correct answer
  questionCont.setAttribute("data-answer", questionParam.correctAnswer);

  const h2 = document.createElement("h2");
  h2.setAttribute("id", "question");
  h2.textContent = questionParam.question;

  const answerCont = document.createElement("div");
  answerCont.setAttribute("id", "answerBoxes");

  const answers = questionParam.answer;

  //This for loop will go through each object in the array, and create a button with a dynamic
  //ID for each one.
  for (let i = 0; i < answers.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("id", `answer${i + 1}`);
    //Setting the data answers for buttons. It will look at the objects in the array.
    button.setAttribute("data-answer", questionParam.answer[i]);
    button.setAttribute("data-correctanswer", questionParam.correctAnswer);
    button.textContent = answers[i];
    answerCont.appendChild(button);
  }

  //Appending the created elements to the question container
  questionCont.appendChild(h2);
  questionCont.appendChild(answerCont);

  //Event listener to run the chosenAnswer function when a button is clicked
  answerCont.addEventListener("click", chosenAnswer);
};

//Creating a function to look at the target(button) that is clicked
const chosenAnswer = (event) => {
  const target = event.target;

  //Creating an if statement to get the data attributes
  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = target.getAttribute("data-correctanswer");

    //if statement to tell JS what to do if an answer is correct or incorrect
    if (answer === correctAnswer) {
      i += 1;
      const questionCont = document.getElementById("questionsContainer");
      questionCont.removeChild(document.getElementById("question"));
      questionCont.removeChild(document.getElementById("answerBoxes"));
      createQuestionCont(questions[i]);
    } else {
      const answerCont = document.getElementById("answerBoxes");
      const h3 = document.createElement("h3");
      answerCont.appendChild(h3);
      h3.setAttribute("id", "wrongAnswer");
      h3.textContent = "Incorrect!";
      // alert("WRONG");
      time -= 9;
    }
    //This will look for if the last question is answered, then ask for a name for highscores.
    if (target.matches("button") && answer === "Cascading Style Sheet") {
      prompt("GAME OVER! Enter your username to log your score:");
      clearInterval(countdown);
      checkScore(account.time)
      window.location.replace("/Assets/html/highscores.html");
    }
  }
};

//Declaring a variable to grab the introSection of my HTML
const intro = document.getElementById("introSection");

//Calling all of the functions created above
const startQuiz = () => {
  // Begin timer
  startTimer();
  // create questionsCont
  createQuestionCont(questions[i]);
  // remove startMainContainer
  intro.remove();
};

startButton.addEventListener("click", startQuiz);

const checkScore = () => {
  const highscoreParse = JSON.parse(highscore) || [];
  const lowestScore = highscoreParse[highscoreNum — 1]?.time ?? 0;

  if (time > lowestScore) {
    saveHighscore(time, highscoreParse);
    showHighscore();

  }
}

// if (highscore !== null) {
//   if (time > highscore) {
//     localStorage.setItem("highscore", time);
//   }
// }
console.log(highscore);
