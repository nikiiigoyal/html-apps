function getRandomComputerResult (){      //created function to get random options 
    const options = ["Rock" ,"Paper" ,"Scissors"]
    const randomIndx = Math.floor(Math.random() * options.length)   //to get nearest integer value
     return options[randomIndx] ;
}

function hasPlayerWonTheRound(player, computer) {          //to check if any conditon is true, player won
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }

  let playerScore = 0;
  let computerScore = 0;

function getRoundResults (playerOption) {           // to increse the score and display message of losing or wiining
    const computerOption = getRandomComputerResult();  //calling function to get ranndom computer result
    if (hasPlayerWonTheRound(playerOption , computerOption)) {
            playerScore++;
            return `Player wins! ${playerOption} beats ${computerOption}`;
    } else if (playerOption === computerOption) {
        return `It's a tie Both chose ${playerOption}`;
    } else
    computerScore++
    return `Computer wins! ${computerOption} beats ${playerOption} `;
}
//accessing from html and storing in a variables
const playerScoreSpanElemnt = document.querySelector("#player-score");
const computerScoreSpanElemnt = document.querySelector("#computer-score");
const optionsContainer = document.querySelector(".option-container");
const roundResultMsg = document.querySelector("#results-msg");
const winnerMsg = document.querySelector("#winner-msg")
const resetGameBtn = document.querySelector("#reset-game-btn");

 
function showRoundResult (playerOption) {          //display the new score of game
    roundResultMsg.innerText = getRoundResults(playerOption);
    playerScoreSpanElemnt.innerText = playerScore;      //disply score of player
    computerScoreSpanElemnt.innerText = computerScore;  //display score of computer

    if (playerScore === 5 || computerScore === 5) {
        winnerMsg.innerText = `${playerScore === 5 ? "player" : "computer"} !has won the game `  //ternary operator if condition true msg diplayed player won if false computer won

        resetGameBtn.style.display = "block"      //play again option get displayed
        optionsContainer.style.display = "none"  //rock paper scissior gets hidden
    }
}

function resetGame () { 
    playerScore = 0;
    computerScore = 0;                     //starting game agin with 0 score
    playerScoreSpanElemnt.innerText = playerScore;
    computerScoreSpanElemnt.innerText = computerScore;
    resetGameBtn.style.display = "none"      //play again option get hide
    optionsContainer.style.display = "block" // rock paper scissor option get display
    roundResultMsg.innerText = "";
winnerMsg.innerText = "";
}
function toggleOption () {
    rulesContainer.classList.toggle("expand")
}

const rockbtn = document.querySelector("#rock-btn");
const Scissorsbtn = document.querySelector("#scissors-btn");
const paperbtn = document.querySelector("#paper-btn");
const rulesContainer = document.querySelector(".rules-container")

resetGameBtn.addEventListener("click" , resetGame);  //on click reset game button
rockbtn.addEventListener("click" ,function (){
    showRoundResult("Rock");
});
Scissorsbtn.addEventListener("click" ,function (){
    showRoundResult("Scissors");
});
paperbtn.addEventListener("click" ,function (){
    showRoundResult("paper");
});
rulesContainer.addEventListener("click" , toggleOption)



