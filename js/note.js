// importing the functions file
import { addNote, loadNotes } from "./functions.js";

const redColor = document.querySelector("#red");
const greenColor = document.querySelector("#green");
const yellowColor = document.querySelector("#yellow");

redColor.addEventListener("click", () => {
  toggleSelectedColor("red");
});

greenColor.addEventListener("click", () => {
  toggleSelectedColor("green");
});

yellowColor.addEventListener("click", () => {
  toggleSelectedColor("yellow");
});

function toggleSelectedColor(color) {
  redColor.classList.remove("selected");
  greenColor.classList.remove("selected");
  yellowColor.classList.remove("selected");

  if (color === "red") {
    redColor.classList.add("selected");
  } else if (color === "green") {
    greenColor.classList.add("selected");
  } else if (color === "yellow") {
    yellowColor.classList.add("selected");
  }
}
// save btn eventlistener
const addNoteButton = document.querySelector("#save-btn");
addNoteButton.addEventListener("click", (event) => {
  event.preventDefault();
  addNote();
});

// Loading the notes when page is loading
document.addEventListener("DOMContentLoaded", loadNotes);
