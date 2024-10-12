const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#data");
const addNoteButton = document.querySelector("button");
const noteList = document.querySelector(".p-1.mt-5"); 
//id genetrator
export function createID() {
    let dateNow = Date.now(); 
    let randomNum = (Math.random() * 1000).toFixed();
    let uniqueID = dateNow + randomNum; 
    return uniqueID; 
}
// adding notes
export function addNote() {
}

// display note function
export function displayNoteInDOM(noteData) {
    const noteContainer = document.createElement("div");
    noteContainer.classList.add("flex", "justify-start");

    const noteItem = document.createElement("label");
    noteItem.classList.add("relative", "flex", "cursor-pointer", "items-center", "justify-center", "rounded-full", "p-3");
    noteItem.innerHTML = `
        <input type="checkbox" class="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-400 before:opacity-0 before:transition-opacity checked:border-blue-400 checked:bg-[#1976d2] checked:before:bg-blue-400 hover:before:opacity-10"/>
        <span class="pointer-events-none absolute top-2/4 left-4 -translate-y-2/4 -translate-x-1.5/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
        </span>
        <span class="ml-2 text-white text-base">${noteData.title}</span>
    `;

    const noteDescription = document.createElement("div");
    noteDescription.classList.add("pr-8");
    noteDescription.innerHTML = `<label class="label text-gray-100 text-sm">${noteData.description}</label>`;

    noteContainer.appendChild(noteItem);
    noteContainer.appendChild(noteDescription);
    noteList.appendChild(noteContainer);
}
// clearing value
export function clearInputs() {
    titleInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
}
// inserting notes into ls 
export function saveNoteToLS(noteData) {
    const notes = getNotesFromLS();
    notes.push(noteData);
    localStorage.setItem("notes", JSON.stringify(notes));
}
// getting the old notes from ls 
export function getNotesFromLS() {
    const notesData = localStorage.getItem("notes");
    return notesData ? JSON.parse(notesData) : [];
}
// loading the oldnotes
export function loadNotes() {
    const notes = getNotesFromLS();
    notes.forEach(displayNoteInDOM);
}
