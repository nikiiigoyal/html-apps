const addNotesDiv = document.getElementById("add-notes-div");
const notesList = document.getElementById("notes-list");
const showPopupContainer = document.querySelector("#popup-container");
const newNoteTextarea = document.getElementById("new-note");
const saveNoteButton = document.getElementById("save-note");
const cancelNoteButton = document.getElementById("cancel-note");
const editNoteButton = document.querySelectorAll("editBtn");
const deleteNoteButton = document.querySelectorAll("deleteBtn");
// const deleteNoteButton = document.getElementById("deleteBtn");

// Function to show the popup
function showPopup() {
  showPopupContainer.style.display = "block";
  newNoteTextarea.value = ""; // Empty the textarea when clicked
}

// Function to close the popup
function closePopup() {
  showPopupContainer.style.display = "none";
}

// Function to create a new note list item
function createNewNote(noteText) {
  const newListItem = document.createElement("li"); // Create a new list item
  newListItem.classList.add("note"); // Add class for styling
  newListItem.textContent = noteText; // Set the note text
  // Create a container for the note text and buttons
  const noteContent = document.createElement("div");
  noteContent.classList.add("note-content");

  // Add the note text to the content container
  noteContent.textContent = noteText;

  // Create the edit button
  const editButton = document.createElement("button");
  editButton.classList.add("editBtn"); // Add class for styling
  editButton.textContent = "Edit"; // Set button text

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn"); // Add class for styling
  deleteButton.textContent = "Delete"; // Set button text

  // Append the note text and buttons to the content container
  noteContent.appendChild(editButton);
  noteContent.appendChild(deleteButton);
  // Append the content container to the new list item
  newListItem.appendChild(noteContent);

  // Add the new list item to the list
  notesList.appendChild(newListItem);
  newNoteTextarea.value = ""; // Clear the textarea after creating the note
}

// Function to save the note
function saveNote() {
  const noteText = newNoteTextarea.value.trim(); // Get trimmed note text
  if (noteText) {
    createNewNote(noteText); // Create a new note
    closePopup(); // Close the popup after saving
  }
}

// Event listeners
addNotesDiv.addEventListener("click", showPopup);
cancelNoteButton.addEventListener("click", closePopup);
saveNoteButton.addEventListener("click", saveNote);

// editNoteButton.addEventListener("click", createNewNote);
// deleteNoteButton.addEventListener("click", () => {
//   listItemText.style.display = "none";
//   closepopup();
// });
