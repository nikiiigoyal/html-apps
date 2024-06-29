const breakLengthEl = document.querySelector("#break-length")
const timeLeft = document.querySelector("#time-left")
const sessionLengthEl = document.querySelector("#session-length")
const startStopBtn = document.querySelector("#start-stop")
const resetBtn = document.querySelector("#reset")
const breakLeftEl = document.querySelector("#break-left")

let sessionLength = 25;
let breakLength = 5;
let remainingTime = sessionLength * 60;//to convert minutes to seconds
let isRunning = false;
let interval;

function updateTimeDisplay() {
    const minutes = Math.floor(remainingTime/60) //divide remaining time by 60sec per min
    const seconds = remainingTime % 60 //to calculate remainder
    timeLeft.textContent = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    console.log("minutes",seconds)
}


startStopBtn.addEventListener("click", () => {
    if(isRunning) {
        clearInterval(interval)
    } else{
        isRunning = true;
        interval = setInterval(() => {
            remainingTime--;
            updateTimeDisplay();
            if(remainingTime === 0) {
                clearInterval(interval)
                alert("pomodoro clock completed")
}updateBreakTimeDisplay()
breakLeft.computedStyleMap.display = "block"
        },1000);
    }
    // startStopBtn.textContent = isRunning ? "pause" : "play arrow";
})


resetBtn.addEventListener("click",() => {
    clearInterval(interval)
    isRunning = false
    remainingTime = sessionLength * 60;
    updateTimeDisplay()
    // startStopBtn.textContent = "play arrow";
})

const breakincrementButtons = document.querySelector("#break-increment");
const breakdecrementButtons = document.querySelector("#break-decrement");
const sessionincrementButtons = document.querySelector("#session-increment");
const sessiondecrementButtons = document.querySelector("#session-decrement");

function increaseBreakLength() {
    breakLength++;
    breakLengthEl.textContent = breakLength;
}

breakincrementButtons.addEventListener("click",increaseBreakLength)

function decreaseBreakLength() {
    breakLength--;
    breakLengthEl.textContent = breakLength;
}

breakdecrementButtons.addEventListener("click",increaseBreakLength)

function increasesessionLength() {
    sessionLength++;
    sessionLengthEl.textContent = sessionLength;
    timeLeft.textContent = `${sessionLength}:00`
}

sessionincrementButtons.addEventListener("click",increasesessionLength)

function decreasesessionLength() {
    sessionLength--;
    sessionLengthEl.textContent = sessionLength;
    timeLeft.textContent = `${sessionLength}:00`

}

sessiondecrementButtons.addEventListener("click",decreasesessionLength)



