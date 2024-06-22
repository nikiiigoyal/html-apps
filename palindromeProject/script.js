
const userInput = document.querySelector("#text-input")
const checkPalindromeBtn = document.querySelector("#check-btn")
const result = document.querySelector("#result")

// function checkForPalindrome(input) {
//     if (!input) {
//       alert('Please input a value');
//       return;
//     }
//     let cleanInput=""
//     for( let i=0; i< input.length;i++) {
//       const char = input[i]  //It extracts the current character
//       if (/[a-z0-9]/.test(char)) { // Check if character is alphanumeric
//     cleanInput += char.toLowerCase(); // Add lowercase character
//     }

//    const reversed = cleanInput.split().reverse().join(); 
//  //Original String: "racecar"
// // Split String Array: ["r", "a", "c", "e", "c", "a", "r"]
// // Reversed Array: ["r", "a", "r", "c", "e", "a", "c"]
// // Joined (Reversed) String: "racecar"
//     const isPalindrome = cleanInput === reversed;
// const message = `"${input}" ${isPalindrome ? 'is a palindrome' : 'is not a palindrome'}. `;
//   result.textContent = message;
//   result.classList.remove('hidden'); 
  
//   console.log("cleanInput","isPalindrome",message)
// }
// } 
// checkPalindromeBtn.addEventListener('click', () => {
//   checkForPalindrome(userInput.value);
//   userInput.value = ''; // Clear input after checking
// });




checkPalindromeBtn.addEventListener("click",() => {
  const replaced = userInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g,"")
if(userInput.value === "") {
  alert("please input a value")
} else if(userInput.value.length === 1) {
  // result.style.display = "block"
  result.innerText = `${userInput.value} is a palindrome`;
} else if (replaced === [...replaced].reverse().join("")) {
  result.innerText = `${userInput.value} is a palindrome`; //...works same as split function
} else {
  result.innerText = `${userInput.value} is not a palindrome`;
}
// console.log("userInput.value")
})