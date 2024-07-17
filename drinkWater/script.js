console.log("hello");

const smallCupElements = document.querySelectorAll(".cup-small");
const litersElement = document.querySelector(".liters");
const percentageFilledElement = document.querySelector(".percentage");
const remainedElement = document.querySelector(".remained");

// Add event listeners
for (let i = 0; i < smallCupElements.length; i++) {
  smallCupElements[i].addEventListener("click", () => {
    highlightCups(i);
  });
}

function highlightCups(index) {
  for (let i = 0; i < smallCupElements.length; i++) {
    if (i <= index) {
      smallCupElements[i].classList.add("full");
    } else {
      smallCupElements[i].classList.remove("full");
    }
  }

  updateBigCup(); // Call updateBigCup only once here
}

function updateBigCup() {
  const smallFilledCupElements = document.querySelectorAll(".cup-small.full");
  const totalSmallFilledCups = smallFilledCupElements.length;
  const totalSmallCups = smallCupElements.length;

  if (totalSmallFilledCups === 0) {
    percentageFilledElement.style.visibility = "hidden";
    percentageFilledElement.style.height = 0;
  } else {
    percentageFilledElement.style.visibility = "visible";
    percentageFilledElement.style.height = `${
      (totalSmallFilledCups / totalSmallCups) * 330
    }px`;
    percentageFilledElement.textContent = `${
      (totalSmallFilledCups / totalSmallCups) * 100
    }%`;
  }

  if (totalSmallFilledCups === totalSmallCups) {
    remainedElement.style.visibility = "hidden";
    remainedElement.style.height = 0;
  } else {
    litersElement.textContent = `${2 - (250 * totalSmallFilledCups) / 1000}L`;
  }
}
