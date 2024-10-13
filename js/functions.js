// Selecting elements
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const redColor = document.querySelector("#red");
const greenColor = document.querySelector("#green");
const yellowColor = document.querySelector("#yellow");
const addNoteButton = document.querySelector("#save-btn");
const noteList = document.querySelector("#items");
const dateInput = document.querySelector("#date");

// Unique ID generator
export function createID() {
  let dateNow = Date.now();
  let randomNum = (Math.random() * 1000).toFixed();
  let uniqueID = dateNow + randomNum;
  return uniqueID;
}

// Add note function
export function addNote() {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const date = dateInput.value;

  let selectedColor = "";
  if (redColor.classList.contains("selected")) {
    selectedColor = "red";
  } else if (greenColor.classList.contains("selected")) {
    selectedColor = "green";
  } else if (yellowColor.classList.contains("selected")) {
    selectedColor = "yellow";
  }

  if (title && description) {
    const noteData = {
      id: createID(),
      title,
      description,
      date,
      color: selectedColor,
    };
    saveNoteToLS(noteData);
    displayNoteInDOM(noteData);
    clearInputs();
  }
}

// Display Note functions that uses DOM
export function displayNoteInDOM(noteData) {
  const noteContainer = document.createElement("li");
  noteContainer.classList.add("note-item");
  if (noteData.color) {
    noteContainer.classList.add(noteData.color);
  }

  noteContainer.innerHTML = `
      <div class="note-title">${noteData.title}</div>
      <div class="note-description">${noteData.description}</div>
      <div class="note-date">${noteData.date}</div> 
  `;

  noteList.appendChild(noteContainer);
}
// Clearing input values
export function clearInputs() {
  titleInput.value = "";
  descriptionInput.value = "";
  redColor.classList.remove("selected");
  greenColor.classList.remove("selected");
  yellowColor.classList.remove("selected");
  dateInput.value = ""; 

}
// Saving note to LS
export function saveNoteToLS(noteData) {
  const notes = getNotesFromLS();
  notes.push(noteData);
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Getting notes from LS
export function getNotesFromLS() {
  const notesData = localStorage.getItem("notes");
  return notesData ? JSON.parse(notesData) : [];
}
// Loading notes
export function loadNotes() {
  const notes = getNotesFromLS();
  notes.forEach(displayNoteInDOM);
}
