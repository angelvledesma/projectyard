"use strict";

const display = document.getElementById("calcInput");
const displayText = document.getElementById("textDisplay");
const deleteCalc = document.getElementById("delete");
const submitCalc = document.getElementById("submit");
const backSpaceCalc = document.getElementById("backSpace");

function calculateArray(calcStr) {
  let numCalc = [];
  let subStr = "";

  for (let i = 0; i < calcStr.length; i++) {
    // prettier-ignore
    if (calcStr[i] === "/" || calcStr[i] === "+" || calcStr[i] === "-" || calcStr[i] === "*") {  
      if (subStr) numCalc.push(subStr);
      numCalc.push(calcStr[i]);
      subStr = "";
      continue;
    }
    subStr = subStr + calcStr[i];
  }
  if (subStr) {
    numCalc.push(subStr);
  }

  if (validate(numCalc)) {
    actuallyCalculateFinally(numCalc);
  } else {
    numCalc = [];
  }
}

function validate(calcArray) {
  let validate = 0;
  if (
    calcArray[0] === "+" ||
    calcArray[0] === "-" ||
    calcArray[0] === "*" ||
    calcArray[0] === "/"
  ) {
    displayText.textContent = "Invlaid! Try Again.";
    return false;
  }

  if (
    calcArray[calcArray.length - 1] === "+" ||
    calcArray[calcArray.length - 1] === "-" ||
    calcArray[calcArray.length - 1] === "*" ||
    calcArray[calcArray.length - 1] === "/"
  ) {
    displayText.textContent = "Invlaid! Try Again.";
    return false;
  }

  for (let i = 0; i < calcArray.length; i++) {
    if (Number(calcArray[i])) {
      validate = 0;
      continue;
    } else {
      validate++;
      if (validate === 2) {
        displayText.textContent = "Invlaid! Try Again.";
        return false;
      }
    }
  }
  displayText.textContent = "Passed!";
  return true;
}

function actuallyCalculateFinally(numbers) {
  let a;
  let b;
  let summation = 0;
  let specialCharacter;
  let index;

  while (numbers.length !== 0 || numbers.length === 1) {
    specialCharacter = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === "*" || numbers[i] === "/") {
        specialCharacter = numbers[i];
        index = i;
        break;
      }
      specialCharacter = numbers[0];
    }

    for (let j = 0; j < numbers.length; j++) {
      if (specialCharacter === "*" || specialCharacter === "/") {
        break;
      } else {
        if (numbers[j] === "+" || numbers[j] === "-") {
          specialCharacter = numbers[j];
          index = j;
          break;
        } else {
          continue;
        }
      }
    }

    a = numbers[index - 1];
    b = numbers[index + 1];

    switch (specialCharacter) {
      case "*":
        summation = Number(a) * Number(b);
        numbers.splice(index - 1, 3);
        numbers.splice(index - 1, 0, summation);
        break;

      case "/":
        summation = Number(a) / Number(b);
        numbers.splice(index - 1, 3);
        numbers.splice(index - 1, 0, summation);
        break;
      case "+":
        summation = Number(a) + Number(b);
        numbers.splice(index - 1, 3);
        numbers.splice(index - 1, 0, summation);
        break;
      case "-":
        summation = Number(a) - Number(b);
        numbers.splice(index - 1, 3);
        numbers.splice(index - 1, 0, summation);
        break;
      default:
        numbers = [];
        break;
    }
  }
  summation = Math.round(summation * 100) / 100;
  displayText.textContent = summation;
}

let removeElement = [];
// const removedElements = myArray.splice(indexToRemove, 1);
document.addEventListener("click", (event) => {
  let activeButton = event.target;

  if (activeButton.tagName === "BUTTON") {
    deleteCalc.addEventListener("click", () => {
      display.value = "";
      display.style.fontSize = "4rem";
      displayText.textContent = "";
    });

    submitCalc.addEventListener("click", () => {
      calculateArray(display.value);
    });

    display.value = display.value + activeButton.value;
  }

  if (display.value.length > 7) {
    display.style.fontSize = "2rem";
  }
  if (display.value.length > 20) {
    display.style.fontSize = "1.5rem";
  }
});
