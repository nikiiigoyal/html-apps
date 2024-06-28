const breakLengthEl = document.querySelector("#break-length")
const timeLeft = document.querySelector("#time-left")
const sessionLengthEl = document.querySelector("#session-length")
const startStopBtn = document.querySelector("#start-stop")
const resetBtn = document.querySelector("#reset")

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
            }
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

const incrementButtons = document.querySelectorAll('.btn-level[value="+"]');
const decrementButtons = document.querySelectorAll('.btn-level[value="-"]');





