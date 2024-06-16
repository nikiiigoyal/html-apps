const namefield = document.querySelector("#name")
const datefield = document.querySelector("#date")
const buttonfield = document.querySelector("#submit-btn")
const timefield = document.querySelector("#time")
const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")


buttonfield.addEventListener("click",(e) => {
e.preventDefault()
countdownStart()
})

function countdownStart() {
    const eventNAme = namefield.value
    const eventDate = datefield.value
    const eventTime = timefield.value
    console.log(eventDate,eventNAme,eventTime)
    const targetDate = new Date(`${eventDate}T${eventTime}:00`);
    const countDownInterval = setInterval(() => {
        const now = new Date()
    const remainingTime = targetDate - now;  //time in milliseconds
    if (remainingTime <= 0) {
        clearInterval(countDownInterval)
 
        days.innerHTML = "00";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
     }
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
    console.log(remainingSeconds)
    console.log(remainingdays)
    console.log(remaininghours)
    console.log(remainingminutes)  
    },1000)
    console.log()
    
    
     
    
    }


