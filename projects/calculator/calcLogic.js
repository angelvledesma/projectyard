"use strict";

const display = document.getElementById("calcInput");
const displayText = document.getElementById("textDisplay");
const deleteCalc = document.getElementById("delete");
const submitCalc = document.getElementById("submit");
const backSpaceCalc = document.getElementById("backSpace");

let calcString = display.value;

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

  while (numbers.length !== 0) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === "**") {
        a = numbers[i - 1];
        b = numbers[i + 1];
        summation = summation + Math.pow(Number(a), Number(b));
        numbers.splice(i - 1, i, i + 1);
      } else if (numbers[i] === "*" || numbers[i] === "/") {
        a = numbers[i - 1];
        b = numbers[i + 1];
        if (numbers[i] === "*") {
          summation = summation + Number(a) * Number(b);
          numbers.splice(i - 1, i, i + 1);
        } else {
          summation = summation + Number(a) / Number(b);
          numbers.splice(i - 1, i, i + 1);
        }
      } else if (numbers[i] === "+" || numbers[i] === "-") {
        a = numbers[i - 1];
        b = numbers[i + 1];
        if (numbers[i] === "+") {
          summation = summation + (Number(a) + Number(b));
          numbers.splice(i - 1, i, i + 1);
        } else {
          summation = summation + (Number(a) - Number(b));
          numbers.splice(i - 1, i, i + 1);
        }
      } else if (typeof numbers[i] === "string") {
        continue;
      } else {
        numbers = [];
      }
    }
  }
  displayText.textContent = summation;

  summation = 0;
}

// const removedElements = myArray.splice(indexToRemove, 1);
document.addEventListener("click", (event) => {
  let activeButton = event.target;
  if (activeButton.tagName === "BUTTON") {
    deleteCalc.addEventListener("click", () => {
      display.value = "";
    });
    submitCalc.addEventListener("click", () => {
      calculateArray(display.value);
    });

    display.value = display.value + activeButton.value;
    calcString = display.value;
  }
});
