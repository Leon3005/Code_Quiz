const importScores = () => {
  getUsername = localStorage.getItem("username");
  getScore = localStorage.getItem("highscore");
  savedScore = JSON.parse(getScore);
  savedUsername = JSON.parse(getUsername);
  // for (let index = 0; index < savedHighscores.length; index++) {
  const spanUsername = document.createElement("span");
  spanUsername.classList.add("data");
  spanUsername.textContent = `${savedUsername[0]}`;
  importData.append(spanUsername);

  const spanScore = document.createElement("span");
  spanScore.classList.add("data");
  spanScore.textContent = `${savedScore[0]}`;
  importData.append(spanScore);
  // }
};

const importData = document.getElementById("importedData");
const highscoresDiv = document.getElementById("highscores");
highscoresDiv.addEventListener("load", importScores());
