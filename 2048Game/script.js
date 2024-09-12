let scoreContainer = document.querySelector(".score-container")
let bestContainer = document.querySelector(".best-container")
let newGame = document.querySelector("#restartBtn")
let gridContainer = document.querySelector(".grid-container")
let grid = document.querySelectorAll(".grid-cell")

window.addEventListener("keydown", handleKeyPress);

let score = 0
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
    
//function to add a new tile of 2 after every key pressed 
function addTile() {
    let emptyCells = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j]===0){    //this checks if board is empty
                emptyCells.push(i,j)
            }
        }
    }
    if (emptyCells.length > 0) {
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];   //to randomly select the cell in while to add
        board[randomCell.i][randomCell.j] = 2  //assign 2 to tht to be called afetr every move
    }
}

function simpleMoveLeft(board) {
    // let score = 0;
    let moved = false;

    for (let row = 0; row < 4; row++) {
        // Step 1: Remove zeros
        let currentRow = board[row].filter(cell => cell !== 0);

        // Step 2: Combine tiles
        for (let i = 0; i < currentRow.length - 1; i++) {
            if (currentRow[i] === currentRow[i + 1]) {
                currentRow[i] *= 2;
                score += currentRow[i];
                currentRow.splice(i + 1, 1);
                moved = true;
            }
        }

        // Step 3: Add zeros back
        while (currentRow.length < 4) {
            currentRow.push(0);
        }

        // Step 4: Update the board
        if (currentRow.join(',') !== board[row].join(',')) {
            moved = true;
        }
        board[row] = currentRow;
    }

    return { board, score, moved };
}


console.log("Before move:");
console.log(board);

let result = simpleMoveLeft(board);

console.log("After move:");
console.log(result.board);
console.log("Score increase:", result.score);
console.log("Moved:", result.moved);

// functions to switch rows and columns - transposeBoard
function transposeBoard(board) {
  let newBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  for (let i = 0; i<4; i++) {
    for (let j = 0; j < 4; j++) {
        newBoard[j][i] = board[i][j]
    }
  }
}

//function to reverse rows
function reverseRows(board) {
    let newBoard = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
    for (let i = 0; i<4; i++) {
      for (let j = 0; j < 4; j++) {
          newBoard[i][j] = board[i][j-3]
      }
    }
  }

function simpleMoveRight(board) {
    // Reverse, move left, then reverse again
    let reversedBoard = reverseRows(board);
    let result = simpleMoveLeft(reversedBoard);
    result.board = reverseRows(result.board);
    return result;
}

function simpleMoveUp(board) {
    // Transpose, move left, then transpose again
    let transposedBoard = transposeBoard(board);
    let result = simpleMoveLeft(transposedBoard);
    result.board = transposeBoard(result.board);
    return result;
}

function simpleMoveDown(board) {
    // Transpose, move right, then transpose again
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
    }

    if (result && result.moved) {
        board = result.board;
        score += result.score;
        addTile();
        updateUI();
    }
}





