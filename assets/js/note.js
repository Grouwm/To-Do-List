const checkbox = document.getElementById("myCheckbox");
const labels = document.querySelectorAll(".label");

checkbox.addEventListener("change", () => {
  labels.forEach((label) => {
    label.classList.toggle("line-through", checkbox.checked);
  });
});
import { addNote, loadNotes } from "./functions.js";
document.addEventListener("DOMContentLoaded", loadNotes);
const addNoteButton = document.querySelector("button");
addNoteButton.addEventListener("click", (event) => {
  event.preventDefault();
  addNote();
});
