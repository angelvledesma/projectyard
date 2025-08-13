"use strict";

const numPad = [7, 8, 9, `/`, 4, 5, 6, `*`, 1, 2, 3, `-`, 0, `.`, "=", "+"];
// prettier-ignore
const numPadID = ["seven", "eight", "nine", "divide", "four", "five", "six", 
  "multiply", "one", "two", "three", "subtract", "zero", "period", 
  "equal", "plus"];

const buttonWrapper = document.getElementById("buttonWrapper");
const table = buttonWrapper.appendChild(document.createElement("table"));
let numID = 0;

// tr
for (let r = 1; r <= 4; r++) {
  const currentTR = table.appendChild(document.createElement("tr"));

  //   td
  for (let c = 1; c <= 4; c++) {
    const currentTD = currentTR.appendChild(document.createElement("td"));
    const currentButton = currentTD.appendChild(
      document.createElement("button")
    );
    currentButton.textContent = numPad[numID];
    currentButton.id = numPadID[numID];
    numID++;
  }
}

for (let i = 0; i < numPadID.length; i++) {
  const setID = document.getElementById(numPadID[i]);
  setID.value = numPad[i];
}

const extraDiv = document.getElementById("extraControls");
// prettier-ignore
const deleteButton = buttonWrapper.appendChild(document.createElement("button"));
extraDiv.appendChild(deleteButton);
deleteButton.id = "delete";
deleteButton.textContent = "Delete";

const backSpace = buttonWrapper.appendChild(document.createElement("button"));
extraDiv.appendChild(backSpace);
backSpace.id = "backSpace";
backSpace.textContent = "BackSpace";
