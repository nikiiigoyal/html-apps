// Array with the list of all quotes
const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
];
let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("message");
const typedValueElement = document.getElementById("typed-value");

// Define the input handler function outside so we can reference it for removal
function inputHandler() {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${
      elapsedTime / 1000
    } seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = "";
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = "";
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = "highlight";
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = "";
  } else {
    // error state
    typedValueElement.className = "error";
  }
}

document.getElementById("start").addEventListener("click", () => {
  // Remove existing event listener to avoid duplicates
  typedValueElement.removeEventListener("input", inputHandler);

  // get a quote randomly from quotes array
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  // convert quote into array of words
  const quote = quotes[quoteIndex];
  // put quote into array of words
  words = quote.split(" ");
  // reset word index for tracking
  wordIndex = 0;

  const spanWords = words.map(function (word) {
    return `<span>${word}</span>`;
  });
  quoteElement.innerHTML = spanWords.join(" "); // Added space between words
  quoteElement.childNodes[0].className = "highlight";
  messageElement.innerText = "";

  // Clear the textbox
  typedValueElement.value = "";
  // set focus
  typedValueElement.focus();

  // Start the timer
  startTime = new Date().getTime();

  // Add the event listener
  typedValueElement.addEventListener("input", inputHandler);
});
