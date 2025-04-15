// its like this: When you grab a plant, the code remembers where you first grabbed it (pos3, pos4). As you move your pointer, it calculates how far you've moved from that original spot and moves the plant accordingly.

// sets up a plant element to be draggable
function dragElement(terrariumElement) {
  //set 4 positions for positioning on the screen
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  // Handles when you first click/touch a plant
  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX; // Save the starting X position
    pos4 = e.clientY; // Save the starting Y position

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  // Handles the movement while dragging
  function elementDrag(e) {
    // Calculate how far you've moved horizontally and verticlly since last position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    // Update the stored positions for next time
    pos3 = e.clientX;
    pos4 = e.clientY;
    console.log(pos1, pos2, pos3, pos4);
    // Move the plant vertically by the calculated amount
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    // Move the plant horizontally by the calculated amount
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }

  // Handles when you release the plant
  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }

  // Set initial pointer down event
  terrariumElement.onpointerdown = pointerDrag;
}

// Call dragElement for each plant
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));
