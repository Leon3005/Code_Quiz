const position = [1, 2, 3, 4, 5];
let i = 0;
const importScores = () => {
  const getUsername = localStorage.getItem("username");
  const getScore = localStorage.getItem("highscore");
  const savedScore = JSON.parse(getScore);
  const savedUsername = JSON.parse(getUsername);
  // for (let i = 0; i < position.length; i++) {
  const spanPosition = document.createElement("span");
  spanPosition.classList.add("data");
  spanPosition.textContent = `${position[i]}`;
  importData.append(spanPosition);

  const spanUsername = document.createElement("span");
  spanUsername.classList.add("data");
  spanUsername.textContent = `${savedUsername[i]}`;
  importData.append(spanUsername);

  const spanScore = document.createElement("span");
  spanScore.classList.add("data");
  spanScore.textContent = `${savedScore[i]}`;
  importData.append(spanScore);
  // }
};

const importData = document.getElementById("importedData");
const highscoresDiv = document.getElementById("highscores");
highscoresDiv.addEventListener("load", importScores());
