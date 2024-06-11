//taking values from html
const numberInput = document.querySelector("#number-input");
const convertBtn = document.querySelector("#convert-btn");
const result = document.querySelector("#result");

//function to convert decimal number to binary 
const decimalToBinary = (input) => {
//creating array to store input quotient and remainder
    const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }
//used while loop to run until condition is true means it gives zero as a remainder.
// every quotient is new input until zero is remainder
//to get naearest integer math.floor
  while (input > 0) {
    const quotient = Math.floor(input / 2);  // 5/2 = 2.5  result wi;l be 2 due to math.floor
    const remainder = input % 2;      // 5% 2 = 1
//thses result storing into empty array
    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  //as remainder is reversed so to get desiered reversing

  result.innerText = remainders.reverse().join("");

};
//to check if the value is a positive and a integer number 
const checkUserInput = () => {
    if (
      !numberInput.value ||
      isNaN(parseInt(numberInput.value)) ||
      parseInt(numberInput.value) < 0
    ) {
      alert("Please provide a decimal number greater than or equal to 0");
      return;
    }
  //calling function
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = "";
  };
//adding event listener to work
  convertBtn.addEventListener("click", checkUserInput);

//to add functioning while enter key is pressed
  numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });