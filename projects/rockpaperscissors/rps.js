"use strict";

let computerMove = Math.trunc(Math.random() * 3) + 1;
let playerChoice;
let rock = document.getElementById("rock");
rock.value = 1;
let paper = document.getElementById("paper");
paper.value = 2;
let scissors = document.getElementById("scissors");
scissors.value = 3;
let gameText = document.getElementById("gameText");
let submitText = document.getElementById("submitText");

let buttonSubmit = document.getElementById("submit");

rock.addEventListener("click", () => {
  if (playerChoice > 0) {
    paper.disabled = false;
    scissors.disabled = false;
    playerChoice = 0;
    gameText.textContent = `Make Your Choice!`;
  } else {
    paper.disabled = true;
    scissors.disabled = true;
    playerChoice = Number(rock.value);
    gameText.textContent = `ROCK 🪨`;
  }
});
paper.addEventListener("click", () => {
  if (playerChoice > 0) {
    rock.disabled = false;
    scissors.disabled = false;
    playerChoice = 0;
    gameText.textContent = `Make Your Choice!`;
  } else {
    rock.disabled = true;
    scissors.disabled = true;
    playerChoice = Number(paper.value);
    gameText.textContent = `PAPER 📃`;
  }
});
scissors.addEventListener("click", () => {
  if (playerChoice > 0) {
    rock.disabled = false;
    paper.disabled = false;
    playerChoice = 0;
    gameText.textContent = `Make Your Choice!`;
  } else {
    rock.disabled = true;
    paper.disabled = true;
    playerChoice = Number(scissors.value);
    gameText.textContent = `SCISSORS ✂️`;
  }
});

buttonSubmit.addEventListener("click", () => {
  console.log(playerChoice);
  console.log(computerMove);
  if (playerChoice === computerMove) {
    submitText.textContent = `Looks like we tied! Try again.`;
    restartRound();
  }
  switch (playerChoice) {
    case 1:
      if (computerMove === 2)
        submitText.textContent = `You lost, I chose paper 📃! Try again.`;
      else submitText.textContent = `You won, I chose Scissors ✂️! Try again.`;
      restartRound();
      break;
    case 2:
      if (computerMove === 1)
        submitText.textContent = `You won, I chose Rock 🪨! Try again.`;
      else submitText.textContent = `You lost, I chose Scissors ✂️! Try again.`;
      restartRound();
      break;
    case 3:
      if (computerMove === 1)
        submitText.textContent = `I won, I chose Rock 🪨! Try again.`;
      else submitText.textContent = `You Won, I chose Paper 📃! Try again.`;
      restartRound();
      break;
    default:
      playerChoice = 0;
      computerMove = Math.trunc(Math.random() * 3) + 1;
  }
});

function restartRound() {
  playerChoice = 0;
  computerMove = Math.trunc(Math.random() * 3) + 1;
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
