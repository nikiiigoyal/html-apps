let scoreContainer = document.querySelector(".score-container")
let bestContainer = document.querySelector(".best-container")
let newGame = document.querySelector("#restartBtn")
let gridContainer = document.querySelector(".grid-container")
let grid = document.querySelectorAll(".grid-cell")




let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

// to gerenerate random 2 or 4
function generateRandomNumber() {
const numbers = [2,2,2,2,2,2,4,4,4,4]  //60% chnaces of getting 2 and 40%of 4
const randomIndex = Math.floor(Math.random() * numbers.length)
console.log(randomIndex)
return numbers[randomIndex]
}

//function to find all empty cells 
function findEmptyCells() {
    let emptyCells = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({row: i, col: j})
            }
        }
    }
    return emptyCells
}

//function to place new number
function placeNewNumber() {
    let emptyCells = findEmptyCells()
    if (emptyCells.length > 0) {
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        let newNumber = generateRandomNumber();
        board[randomCell.row][randomCell.col] = newNumber;
        updateUI();
    }
}
//create an initialization function that places two numbers on the board to start the game:
function initializeGame() {
    placeNewNumber();
    placeNewNumber();
    updateUI()
}
initializeGame();
console.log(board);

function updateUI() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cellValue = board[i][j];
            const cellIndex = i * 4 + j;
            const cellElement = grid[cellIndex];
            
            cellElement.textContent = cellValue !== 0 ? cellValue : '';
            cellElement.className = 'grid-cell';
            if (cellValue !== 0) {
                cellElement.classList.add(`cell-${cellValue}`);
            }
        }
    }
}