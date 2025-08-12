"use strict";

let randomNumber = Math.floor(Math.random() * 101);
if (randomNumber === 0) randomNumber++;

let guess = document.getElementById("guess");
let displayGuess = document.getElementById("guessWrapper");
let buttonCheck = document.getElementById("check");
let guessInfo = document.getElementById("guessInfo");
let highScoreInfo = document.getElementById("highScoreInfo");
let currentScore = 0;
let highScore = 100;
let buttonRestart = document.getElementById("restart");

const hints = function (randomNumber, guess) {
  let hintInfo = document.getElementById("hint");
  if (Number(guess.value) > randomNumber) {
    hintInfo.textContent = `Your guess is too high`;
  } else if (Number(guess.value) === randomNumber) {
    hintInfo.textContent = `Correct Number!`;
  } else {
    hintInfo.textContent = `Your guess is too low`;
  }
};

buttonCheck.addEventListener("click", () => {
  guessWrapper.textContent = guess.value;
  if (Number(guess.value) === randomNumber) {
    guessInfo.textContent = `Correct Guess!`;
    guess.readOnly = true;
    buttonCheck.disabled = true;
    if (currentScore < highScore) {
      highScore = currentScore;
      highScoreInfo.textContent = `High Score: ${highScore}`;
      currentScore = 1;
    }
  } else {
    guessInfo.textContent = `Incorrect Guess!`;
    hints(randomNumber, guess);
    currentScore++;
    document.getElementById(
      "scoreInfo"
    ).textContent = `Current Score ${currentScore}`;
    60;
  }
});

buttonRestart.addEventListener("click", () => {
  guess.readOnly = false;
  buttonCheck.disabled = false;
  guessWrapper.textContent = ` `;
  guess.value = "";
  currentScore = 0;
  document.getElementById(
    "scoreInfo"
  ).textContent = `Current Score ${currentScore}`;
  guessInfo.textContent = `Make a Guess!`;
  randomNumber = Math.floor(Math.random() * 21);
  if (randomNumber === 0) randomNumber++;
  currentScore = 0;
  console.log(randomNumber);
});
