console.log("hello world");
let emoji = document.querySelector(".emoji");
let eyes = document.querySelector(".eyes");
let eyebrows = document.querySelector(".eyebrows");
let mouth = document.querySelector(".mouth");
let colorBtn = document.querySelector("#color");
let eyesBtn = document.querySelector("#eyes");
let eyebrowsBtn = document.querySelector("#eyebrows");
let mouthBtn = document.querySelector("#mouth");

let colors = ["#4bff81", "#4bb4ff", "#ff702e", "#b88cff", "#ffd21f"];

//setting up counters
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

//setting up total counts/variations for different images

let totalCounts = {
  eyeCount: 5,
  eyebrowsCount: 4,
  mouthCount: 5,
};

//adding event listeners

colorBtn.addEventListener("click", () => {
  // Set the emoji background color based on the counter
  emoji.style.backgroundColor = colors[counter1];

  // Increment counter or reset if at the end
  counter1 = counter1 < colors.length - 1 ? counter1 + 1 : 0;
});

eyesBtn.addEventListener("click", () => {
  eyes.setAttribute("src", `images/eye-${counter2}.svg`);
  counter2 = counter2 < totalCounts.eyeCount - 1 ? counter2 + 1 : 0;
});

eyebrowsBtn.addEventListener("click", () => {
  eyebrows.setAttribute("src", `images/eyebrow-${counter3}.svg`);
  counter3 = counter3 < totalCounts.eyebrowsCount - 1 ? counter3 + 1 : 0;
});

mouthBtn.addEventListener("click", () => {
  mouth.setAttribute("src", `images/mouth-${counter4}.svg`);
  counter4 = counter4 < totalCounts.mouthCount - 1 ? counter4 + 1 : 0;
});
