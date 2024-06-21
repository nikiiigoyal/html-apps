const minInput = document.querySelector("#min-input")
const maxInput = document.querySelector("#max-input")
const generateBtn = document.querySelector("#generate-btn")
const result = document.querySelector("#view-result")

generateBtn.addEventListener("click",function() {
    const min = parseInt(minInput.value, 10); // Ensure numeric values
  const max = parseInt(maxInput.value, 10);
    console.log(min,max)


if (isNaN(min) || isNaN(max)) {
    alert('Please enter valid numbers for minimum and maximum values.');
     return;
  } else if (min >= max) {
    alert('Minimum must be less than maximum.');
    return;
  }

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  result.textContent = `${randomNumber}`;
});
// Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
// Multiplied by max - min + 1 to get a range from 0 to the difference between max and min (inclusive).
// Added min to shift the range to start at min.
// Math.floor() ensures the result is an integer.