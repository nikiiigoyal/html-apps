// Get DOM elements
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Regular expression for US phone number validation
const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

//to validate phone number
function validatePhoneNumber(phoneNumber) {
    return phoneRegex.test(phoneNumber)
}

checkBtn.addEventListener("click",() => {
    const phoneNumber = userInput.value.trim()

    if (phoneNumber === '') {
        alert('Please provide a phone number')
        return;
    }
     if (validatePhoneNumber(phoneNumber)) {
        resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    } else {
      resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    }
  });
  
  // Event listener for Clear button
  clearBtn.addEventListener('click', () => {
    userInput.value = '';
    resultsDiv.textContent = '';
  });