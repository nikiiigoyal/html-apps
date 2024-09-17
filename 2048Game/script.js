// DOM elements
let scoreContainer = document.querySelector(".score-container")
let bestContainer = document.querySelector(".best-container")
let newGame = document.querySelector("#restartBtn")
let gridContainer = document.querySelector(".grid-container")
let grid = document.querySelectorAll(".grid-cell")

window.addEventListener("keydown", handleKeyPress);
let bestScore = 0
let score = 0
let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
//to generate random numbers either 2 or 4
function generateRandomNumber() {
    const numbers = [2,2,2,2,2,2,4,4,4,4]
    const randomIndex = Math.floor(Math.random() * numbers.length)
    console.log("number:", numbers)
    console.log("index", randomIndex)
    console.log(numbers[randomIndex])
    return numbers[randomIndex]
}
//to find empty cells
function findEmptyCells() {
    let emptyCells = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({row: i, col: j})
                // console.log("emptycells:",emptyCells)
            }
        }
    }
    return emptyCells
}

function placeNewNumber() {
    let emptyCells = findEmptyCells()
    if (emptyCells.length > 0) {
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        let newNumber = generateRandomNumber();
        board[randomCell.row][randomCell.col] = newNumber;
        updateUI();
    }
}

function initializeGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    score = 0
    loadBestScore()
    placeNewNumber();
    placeNewNumber();
    updateUI()
}

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
                console.log("cellvalue",cellValue)
                console.log("cellindex",cellIndex)
                console.log("cellelement",cellElement)
            }
        }
    }
    scoreContainer.textContent = score;
    bestContainer.textContent= bestScore
}

function simpleMoveLeft(board) {
    let moved = false;
    let newScore = 0;

    for (let row = 0; row < 4; row++) {
        let currentRow = board[row].filter(cell => cell !== 0);
        for (let i = 0; i < currentRow.length - 1; i++) {
            if (currentRow[i] === currentRow[i + 1]) {
                currentRow[i] *= 2;
                newScore += currentRow[i];
                currentRow.splice(i + 1, 1);
                moved = true;
            }
        }
        while (currentRow.length < 4) {
            currentRow.push(0);
        }
        if (currentRow.join(',') !== board[row].join(',')) {
            moved = true;
        }
        board[row] = currentRow;
    }

    return { board, score: newScore, moved };
}

function transposeBoard(board) {
    let newBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            newBoard[j][i] = board[i][j]
        }
    }
    return newBoard;
}

function reverseRows(board) {
    return board.map(row => row.reverse());
}

function simpleMoveRight(board) {
    let reversedBoard = reverseRows(board);
    let result = simpleMoveLeft(reversedBoard);
    result.board = reverseRows(result.board);
    return result;
}

function simpleMoveUp(board) {
    let transposedBoard = transposeBoard(board);
    let result = simpleMoveLeft(transposedBoard);
    result.board = transposeBoard(result.board);
    return result;
}

function simpleMoveDown(board) {
    let transposedBoard = transposeBoard(board);
    let result = simpleMoveRight(transposedBoard);
    result.board = transposeBoard(result.board);
    return result;
}

function handleKeyPress(event) {
    let result;
    switch(event.key) {
        case 'ArrowLeft':
            result = simpleMoveLeft(board);
            break;

        case 'ArrowRight':
            result = simpleMoveRight(board);
            break;
        case 'ArrowUp':
            result = simpleMoveUp(board);
            break;
        case 'ArrowDown':
            result = simpleMoveDown(board);
            break;
        default:
            return; // Exit the function for other keys
    }

    if (result && result.moved) {
        board = result.board;
        score += result.score;
        if (score > bestScore) {
            bestScore = score;
            saveBestScore()
        }
        placeNewNumber();
        updateUI();
    }
}
//for the best score
function saveBestScore() {
    localStorage.setItem('bestScore', bestScore);
}

function loadBestScore() {
    const savedBestScore = localStorage.getItem('bestScore');
    if (savedBestScore) {
        bestScore = parseInt(savedBestScore);
    }
}

newGame.addEventListener('click', initializeGame);


initializeGame();
loadBestScore()


