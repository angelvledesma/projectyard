"use strict";

const display = document.getElementById("calcInput");
const userArray = [];

function buttonClick() {
  document.addEventListener("click", (event) => {
    const activeButton = event.target;
    if (activeButton.tagName === "BUTTON") {
      return activeButton;
    }
  });
}

buttonClick();
display.value = buttonClick();
