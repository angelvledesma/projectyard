"use strict";

let randomNumber = Math.floor(Math.random() * 101);
if (randomNumber === 0) randomNumber++;

let guess = document.getElementById("guess");
let displayGuess = document.getElementById("guessWrapper");
let buttonCheck = document.getElementById("check");
let guessInfo = document.getElementById("guessInfo");
let highScoreInfo = document.getElementById("highScoreInfo");
let score = 0;
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
    if (score < highScore) {
      highScore = score;
      highScoreInfo.textContent = `High Score: ${highScore}`;
      score = 1;
    }
  } else {
    guessInfo.textContent = `Incorrect Guess!`;
    hints(randomNumber, guess);

    score++;
  }
});

buttonRestart.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 21);
  if (randomNumber === 0) randomNumber++;
  score = 0;
  console.log(randomNumber);
});
