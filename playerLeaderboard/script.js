//selecting elements
const firstNameInput = document.querySelector("#first-name")
const lastNameInput = document.querySelector("#last-name")
const countryInput = document.querySelector("#select-country")
const score = document.querySelector("#Player-score")
const addPlayer = document.querySelector("#submit")
const firstNAmeError = document.querySelector("#first-name-error")
const lastNameError = document.querySelector("#last-name-error")
const countryError = document.querySelector("#country-error")

//displaying error msg if name is not entered
if(!firstNameInput) {
      firstNAmeError.style.display = "block";
} else if (!lastNameInput) {
      lastNAmeError.style.display = "block";
} else if (!countryInput) {
    countryError.style.display = "block";
} 

addPlayer.addEventListener("click" ,() => {})
console.log("hello world")