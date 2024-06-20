const quiz = document.querySelector(".quiz")
const answerElement = document.querySelectorAll(".answer")
const questionElement = document.querySelector(".question")
const aText = document.querySelector(".a-text")
const bText = document.querySelector(".b-text")
const cText = document.querySelector(".c-text")
const dText = document.querySelector(".d-text")
const submitBtn = document.querySelector(".submit")



const quizData = [
{
    question: "What does HTML stands for",
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
},
{
    question: "What does CSS stands for",
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
},
{
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
},
{
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
},
];

let currentQuizIndex = 0; // Keeps track of which question we're on (starts at 0)
let score = 0;//stores no.of answers user has given correct
loadQuiz();


function loadQuiz () {
    deselectAnswers();
    const currentQuizData = quizData[currentQuizIndex]  //storing question and thier option
    questionElement.innerText = currentQuizData.question; //question
    aText.innerText = currentQuizData.a,   //options as per keys and values
    bText.innerText = currentQuizData.b,
    cText.innerText = currentQuizData.c,
    dText.innerText = currentQuizData.d,
    console.log(questionElement,aText,bText,cText,dText)
 }
    
//to deslect all options
function deselectAnswers() {
    for (let i = 0; i < answerElement.length; i++) {
      answerElement[i].checked = false;
    }
  }
//helps to find out which answer element (like a radio button or checkbox) is currently selected on webpage.
function getSelected() {
    let answer;    //declaring undefined variable
    for (let i = 0; i < answerElement.length; i++) {
        const answerEl = answerElement[i]; // Get the current answer element
if (answerEl.checked) {
answer = answerEl.id
console.log(answer);
   break;
}
    
}
return answer;
}

submitBtn.addEventListener("click" , () => {
    const answer = getSelected() //callback function and store in a variable
    if (answer) {
        if(answer === quizData[currentQuizIndex].correct) {
            score++;   //inc score if opton matches
        }
        currentQuizIndex++ //next question
    }
    if (currentQuizIndex < quizData.length) {
        loadQuiz()        //currentquizindex from 0-3 quizdataek length = 4  next questions
    } else {
        quiz.innerHTML = `<h2> You answered ${score} / ${quizData.length} questions correctly </h2>
        <button onclick = "window.location.reload()">Reload</button>
        `;
    }
})