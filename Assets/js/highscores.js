const importScores = () => {
  getUsername = localStorage.getItem("username");
  const spanUsername = document.createElement("span");
  spanUsername.classList.add("data");
  spanUsername.textContent = `${getUsername}`;
  highscoresDiv.append(spanUsername);
};

const highscoresDiv = document.getElementById("highscores");
highscoresDiv.addEventListener("load", importScores());
