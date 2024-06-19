const quiz = document.querySelector(".quiz")
const answerElement = document.querySelector(".answer")
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
