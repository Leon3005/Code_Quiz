const startQuiz = () => {
  const startTime = 60;
  const ticker = setInterval(() => {
    startTime - 1;
    document.getElementById("timer");
  }, 1000);
};

// startQuiz();
