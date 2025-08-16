"use strict";

const buttonModal = document.querySelectorAll("button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".escape");

const modalShow = document.querySelector(".modal").classList;

const openModal = () => {
  modalShow.remove("hidden");
  overlay.classList.remove("hidden");
  closeButton.classList.remove("hidden");
};

const closeModal = () => {
  modalShow.add("hidden");
  overlay.classList.add("hidden");
  closeButton.classList.add("hidden");
};

for (let i = 0; i < buttonModal.length; i++) {
  buttonModal[i].addEventListener("click", openModal);
}

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
