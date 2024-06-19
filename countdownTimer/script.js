const namefield = document.querySelector("#name")
const datefield = document.querySelector("#date")
const buttonfield = document.querySelector("#submit-btn")
const timefield = document.querySelector("#time")
const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const eventNameError = document.querySelector("#eventname-error")
const eventDateError = document.querySelector("#date-error")
const eventTimeError = document.querySelector("#time-error")

buttonfield.addEventListener("click",(e) => {
e.preventDefault()
resetErrorMessages(); // Reset error messages before validation
countdownStart()
})
function resetErrorMessages() {
    eventNameError.style.display = "none";
    eventDateError.style.display = "none";
    eventTimeError.style.display = "none";
  }

function countdownStart() {
    const eventNAme = namefield.value.trim()
    const eventDate = datefield.value
    const eventTime = timefield.value
    console.log(eventDate,eventNAme,eventTime)
    if(!eventNAme) {
         eventNameError.style.display = "block" 
         return;
    }
    if(!eventDate) {
        eventDateError.style.display = "block"
        return; 
   } 
   if(!eventTime) {
    eventTimeError.style.display = "block" 
    return;
   }
// }else{
//    eventNameError.style.display = "none";
//    eventDateError.style.display = "none";
//    eventTimeError.style.display = "none";

    const targetDate = new Date(`${eventDate}T${eventTime}:00`);
    const countDownInterval = setInterval(() => {
        const now = new Date()
    const remainingTime = targetDate - now;  //time in milliseconds
    
    if (remainingTime <= 0) {
        clearInterval(countDownInterval)
    
        days.innerText = "D";
        hours.innerHTML = "O";
        minutes.innerHTML = "N";
    seconds.innerHTML = "E";
} else {

     const remainingdays = Math.floor(remainingTime /(1000*24*60*60)) //We divide the total milliseconds by (1000 milliseconds/second) * (60 seconds/minute) * (60 minutes/hour) * (24 hours/day) to get the number of whole days.
     const remaininghours = Math.floor((remainingTime % (1000*60*60*24)) / (1000 * 60 * 60))
//Then we divide by (1000 milliseconds/second) * (60 seconds/minute) * (60 minutes/hour) to get the remaining hours.
    const remainingminutes = Math.floor((remainingTime % (1000*60*60)) / (1000 * 60));
     //We divide by (1000 milliseconds/second) * (60 seconds/minute) to get the remaining minutes.
     const remainingSeconds = Math.floor((remainingTime %(1000*60))/1000)
     //We divide by (1000 milliseconds/second) to get the remaining seconds.
    days.textContent = String(remainingdays).padStart(2, '0');
    seconds.textContent = String(remainingSeconds).padStart(2, '0');
    hours.textContent = String(remaininghours).padStart(2, '0');
    minutes.textContent = String(remainingminutes).padStart(2, '0');
    // console.log(remainingSeconds)
    // console.log(remainingdays)
    // console.log(remaininghours)
    // console.log(remainingminutes)  
    }
    },1000)
}




