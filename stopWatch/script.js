
let displayTime = document.querySelector("#time")
let timer = null;
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")

let [hours ,minutes, seconds] = [0, 0, 0];

function stopWatchTime () {
    seconds++ 
    if (seconds === 60) {
        seconds= 0;
        minutes++
        if(minutes === 60) {
            minutes = 0
            hours++
        }
        console.log("hours")
    }
    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    displayTime.innerHTML = h + ":"+ m +":"+ s
}
startBtn.addEventListener("click", function() {
    if(timer!= null) {
        clearInterval(timer)
     }
     timer = setInterval(stopWatchTime, 1000)
    }
)
  
stopBtn.addEventListener("click", function() {
    clearInterval(timer)
})
resetBtn.addEventListener("click", function() {
    clearInterval(timer) 
    displayTime.innerHTML = `00:00:00`
    hours = minutes = seconds = 0;

})

