
const supabaseUrl = "https://oiykcudwhjapzqoqvrgo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9peWtjdWR3aGphcHpxb3F2cmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NDM4MDAsImV4cCI6MjA0MjMxOTgwMH0.ahoH5qqveWzY1vX9zrv0M2WC9iHsD08CBdXw3ixSXdg";

const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
let dbUsername
async function askForUserName() {
    let userName = prompt("Please enter your name");
    console.log("PROMPTED TEXT", userName)
    dbUsername = await checkUserExists(userName);
    console.log("DB USERNAME", dbUsername)
    console.log("isUserAlreadyExist", !!dbUsername)

    if (!!dbUsername) {
        displayUserName(dbUsername);
    } else {
        let newUserName = prompt("You are a new user! Please put your name here")
        displayUserName(newUserName);
        await saveUsernameToTable(newUserName)
    }

}
askForUserName()
async function loadUserName() {
    try {
        const { data, error } = await supabaseClient
            .from('users')
            .select('username')

        if (error) {
            console.error('Error fetching username:', error);
        } else if (data.length > 0) {
            userName = data[0].username;
            console.log('Loaded username:', userName);
            displayUserName();
        } else {
            askForUserName(); // If no username is stored, ask for one
        }
    } catch (err) {
        console.error('Supabase error:', err);
    }
}

function displayUserName(userName) {
    const userNameDisplay = document.createElement("div");
    userNameDisplay.classList.add("username-display");
    userNameDisplay.textContent = `Hello ${userName.toUpperCase()}! Join the numbers and get to the 2048 tile!`;
    document.body.prepend(userNameDisplay);
    initializeGame()
}

// DOM elements
let scoreContainer = document.querySelector(".score-container")
let bestContainer = document.querySelector(".best-container")
let newGame = document.querySelector("#restartBtn")
let gridContainer = document.querySelector(".grid-container")
let grid = document.querySelectorAll(".grid-cell")
const authContainer = document.getElementById('authContainer');
const authTitle = document.getElementById('authTitle');
const authForm = document.getElementById('authForm');
const authSubmit = document.getElementById('authSubmit');
const toggleAuth = document.getElementById('toggleAuth');
const guestPlay = document.getElementById('guestPlay');
const dashboardContainer = document.getElementById('dashboardContainer');
const userDisplay = document.getElementById('userDisplay');
const currentScoreDisplay = document.getElementById('currentScore');
const previousScoresDisplay = document.getElementById('previousScores');
const startGame = document.getElementById('startGame');
const gameContainer = document.getElementById('gameContainer');

window.addEventListener("keydown", handleKeyPress);
let isLogin = true;
let currentUser = null;
let userName = ""
let bestScore = 0
let score = 0
let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
// 
// function toggleAuthMode() {
//     isLogin = !isLogin;
//     authTitle.textContent = isLogin ? 'Login' : 'Sign Up';
//     authSubmit.textContent = isLogin ? 'Login' : 'Sign Up';
//     toggleAuth.textContent = isLogin ? 'Need an account? Sign Up' : 'Have an account? Login';
// }

// async function handleAuth(e) {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     try {
//         let result;
//         if (isLogin) {
//             result = await supabase.auth.signInWithPassword({ email: username, password });
//         } else {
//             result = await supabase.auth.signUp({ email: username, password });
//         }

//         if (result.error) throw result.error;

//         currentUser = result.data.user;
//         showDashboard();
//     } catch (error) {
//         console.error('Auth error:', error.message);
//         alert(error.message);
//     }
// }

// function handleGuestPlay() {
//     currentUser = { username: 'Guest' };
//     showDashboard();
// }

async function showDashboard() {
    authContainer.classList.add('hidden');
    dashboardContainer.classList.remove('hidden');
    userDisplay.textContent = currentUser.username;
    
    if (currentUser.id) {
        await fetchPreviousScores();
    }
}

async function fetchPreviousScores() {
    try {
        const { data, error } = await supabase
            .from('game_scores')
            .select('score')
            .eq('user_id', currentUser.id)
            .order('created_at', { ascending: false })
            .limit(5);

        if (error) throw error;

        previousScoresDisplay.innerHTML = '<h3>Previous Scores:</h3>';
        data.forEach(item => {
            const scoreElement = document.createElement('p');
            scoreElement.textContent = item.score;
            previousScoresDisplay.appendChild(scoreElement);
        });
    } catch (error) {
        console.error('Error fetching previous scores:', error.message);
    }
}
initializeGame();
function generateRandomNumber() {
    const numbers = [2, 2, 2, 2, 2, 2, 4, 4, 4, 4]
    const randomIndex = Math.floor(Math.random() * numbers.length)
    // console.log("number:", numbers)
    // console.log("index", randomIndex)
    // console.log(numbers[randomIndex])
    return numbers[randomIndex]
}
//to find empty cells
function findEmptyCells() {
    let emptyCells = []
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) {
                emptyCells.push({ row: i, col: j })
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
    // askForUserName() //ask for usrnme
    // loadUserName();
    dashboardContainer.classList.add('hidden');
    gameContainer.classList.remove('hidden');
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
            // console.log(cellElement, i, j, grid)


            cellElement.textContent = cellValue !== 0 ? cellValue : '';
            cellElement.className = 'grid-cell';
            if (cellValue !== 0) {
                cellElement.classList.add(`cell-${cellValue}`);
                // console.log("cellvalue", cellValue)
                // console.log("cellindex", cellIndex)
                // console.log("cellelement", cellElement)
            }
        }
    }
    scoreContainer.textContent = score;
    bestContainer.textContent = bestScore
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
function isGameOver() {
    console.log("Checking for empty cells...");

    // Check if there are any empty cells
    if (findEmptyCells().length > 0) {
        console.log("Found empty cells, game is not over.");
        return false;
    }

    // Check if any adjacent cells have the same value
    console.log("Checking for adjacent cells with the same value...");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let currentValue = board[i][j];

            // Check right neighbor
            if (j < 3 && board[i][j + 1] === currentValue) {
                console.log(`Found matching adjacent tiles at (${i}, ${j}) and (${i}, ${j + 1}), game is not over.`);
                return false;
            }

            // Check bottom neighbor
            if (i < 3 && board[i + 1][j] === currentValue) {
                console.log(`Found matching adjacent tiles at (${i}, ${j}) and (${i + 1}, ${j}), game is not over.`);
                return false;
            }
        }
    }

    console.log("No more moves possible, game is over.");
    return true;
}
function showGameOverMessage() {
    const gameOverDiv = document.createElement('div');
    gameOverDiv.className = 'game-over';
    gameOverDiv.innerHTML = `
        <h2>Game Over!</h2>
        <p>Your score: ${score}</p>
        <div class="game-over-actions">
            <button id="playAgainBtn">Play Again</button>
            <a id="shareOnTwitter" href="#" target="_blank" class="twitter-share-button">
                Share
            </a>
        </div>
    `;

    document.body.appendChild(gameOverDiv);

    // Disable further keypresses when the game is over
    window.removeEventListener('keydown', handleKeyPress);

    document.getElementById('playAgainBtn').addEventListener('click', () => {
        document.body.removeChild(gameOverDiv);
        window.addEventListener('keydown', handleKeyPress);
        initializeGame(); // Restart the game
        saveScore(score, userName);
        showDashboard();
    });
    //set up twitter share link
    const twitterShareLink = document.getElementById('shareOnTwitter');
    twitterShareLink.href = `https://twitter.com/intent/tweet?text=I scored ${score} points on the 2048 game!&hashtags=2048game`;
}




function handleKeyPress(event) {
    let result;
    switch (event.key) {
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

    if (result) {
        board = result.board;
        score += result.score;

        if (score > bestScore) {
            bestScore = score;
            saveBestScore()
        }
        console.log("Checking if game is over...");
        if (isGameOver()) {
            console.log("Game is over!");
            updateUI(); // Update UI one last time
            showGameOverMessage();
            saveScore(score, dbUsername)

            return; // Exit the function to prevent placing a new number
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




// initializeGame();
// loadBestScore()
async function checkUserExists(username) {
    try {
        const { data, error } = await supabaseClient
            .from('users')
            .select('username')
            .eq('username', username)
            .single();

        if (error && error.code !== 'PGRST116') {
            console.error('Error checking user:', error);
            return false;
        }


        return data.username;
    } catch (err) {
        console.error('Supabase error:', err);
        return false;
    }
}

async function saveUsernameToTable(username) {
    try {
        const { data, error } = await supabaseClient
            .from('users')
            .insert([{ username: username }]);

        console.log("username", userName)

        if (error) {
            console.error('Error inserting username:', error);
        } else {
            console.log('Username stored in Supabase:', data);
        }
    } catch (err) {
        console.error('Supabase error:', err);
    }
}


async function saveScore(score, userName) {
    if (currentUser && currentUser.id) {
        try {
            const { data, error } = await supabaseClient
                .from('game_scores')
                .insert([
                    { user_id: currentUser.id, username: userName, score: score }
                ]);

            if (error) throw error;

            console.log('Score saved successfully:', data);
        } catch (error) {
            console.error('Error saving score:', error);
        }
    }
}

// Initialize the auth form

newGame.addEventListener("click",initializeGame)

