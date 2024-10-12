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
