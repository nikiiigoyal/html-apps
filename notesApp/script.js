const addNotesDiv = document.getElementById("add-notes-div");
const notesList = document.getElementById("notes-list");
const showPopupContainer = document.querySelector("#popup-container");
const newNoteTextarea = document.getElementById("new-note");
const saveNoteButton = document.getElementById("save-note");
const cancelNoteButton = document.getElementById("cancel-note");
const editNoteButton = document.getElementById("editBtn");
const deleteNoteButton = document.getElementById("deleteBtn");
const listItemText = document.querySelector(".note");
//to show popup

addNotesDiv.addEventListener("click", showpopup);

function showpopup() {
  showPopupContainer.style.display = "block";
  newNoteTextarea.value = "";
  //empty the textarea when clciked
}
//to close
function closepopup() {
  showPopupContainer.style.display = "none";
}
cancelNoteButton.addEventListener("click", closepopup);

//to create a new note
function createNewNote(noteText) {
  listItemText.style.display = "block";
  newNoteTextarea.textContent = noteText;
}

editNoteButton.addEventListener("click", createNewNote);
deleteNoteButton.addEventListener("click", () => {
  listItemText.style.display = "none";
  closepopup();
});
