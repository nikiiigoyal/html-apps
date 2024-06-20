//taking values and storing in varibles
const numberInput = document.querySelector("#number-input");
const convertBtn = document.querySelector("#convert-btn");
const result = document.querySelector("#result");

//function to convert binary number to decimal
function binarytoDecimal(binaryInput) {
    let errorMessage = "";
    let decimal;
  
    if (isNaN(parseInt(binaryInput, 2)) || binaryInput.length > 8) {
      errorMessage = "Invalid binary input. Please enter only 0s and 1s (up to 8 digits).";
    } else {
      try {
        decimal = parseInt(binaryInput, 2);
      } catch (error) {
        // Handle conversion error (optional)
      }
    }
  
    result.textContent = errorMessage ? errorMessage : `${binaryInput} (binary no.) is equal to ${decimal} (decimal no.)`;
  }
  
  convertBtn.addEventListener("click", () => {
    const binaryInput = numberInput.value.trim();
    binarytoDecimal(binaryInput);
  });