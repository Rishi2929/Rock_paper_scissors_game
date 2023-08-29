// Get elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
// const pcScore = document.getElementById('pc');
// const playerScore = document.getElementById('player');
const pcScore = document.getElementById('pc').querySelector('p');
const playerScore = document.getElementById('player').querySelector('p');
const showRulesButton = document.getElementById('showRules');
const rulesMenu = document.getElementById('rulesMenu');
const playerChoiceElement = document.getElementById('playerChoice');
const computerChoiceElement = document.getElementById('computerChoice');
const nextbutton= document.getElementById('click');

// Game rules
const gameRules = [
    { choice: 'rock', beats: 'scissors' },
    { choice: 'paper', beats: 'rock' },
    { choice: 'scissors', beats: 'paper' }
];


// Scores
let computerScore = 0;
let playerScoreValue = 0;

function navigateToResults(choice) {
    window.location.href = `results.html?choice=${choice}`;
}



function updateScoreDisplay() {
    pcScore.textContent = computerScore;
    playerScore.textContent = playerScoreValue;
}

// You can call this function to update the score display
updateScoreDisplay();

// Function to randomly select computer's choice
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * gameRules.length);
    return gameRules[randomIndex].choice;
}


// Function to update scores
function updateScores(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        // It's a tie
        window.location.href='tie.html';

    } else {
        const playerWins = gameRules.find(rule => rule.choice === playerChoice && rule.beats === computerChoice);
        if (playerWins) {
            playerScoreValue++;
            window.location.href='win.html';

        } else {
            computerScore++;
            window.location.href='result.html';

        }
    }

    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    localStorage.setItem('computerScore', computerScore);
    localStorage.setItem('playerScore', playerScoreValue);
    updateScoreDisplay();
}

function initializeScores() {
    const storedComputerScore = localStorage.getItem('computerScore');
    const storedPlayerScore = localStorage.getItem('playerScore');
    
    if (storedComputerScore !== null) {
        computerScore = parseInt(storedComputerScore);
    }
    
    if (storedPlayerScore !== null) {
        playerScoreValue = parseInt(storedPlayerScore);
    }
    
    updateScoreDisplay();
}

initializeScores();


function updateChoiceDisplay(playerChoice, computerChoice) {
    playerChoiceElement.textContent = `You chose: ${playerChoice}`;
    computerChoiceElement.textContent = `Computer chose: ${computerChoice}`;
}



rockButton.addEventListener('click', () => {
    const computer = computerChoice();
    updateScores('rock', computer);
    updateChoiceDisplay('rock', computer);
});

paperButton.addEventListener('click', () => {
    const computer = computerChoice();
    updateScores('paper', computer);
    updateChoiceDisplay('paper', computer);
});

scissorsButton.addEventListener('click', () => {
    const computer = computerChoice();
    updateScores('scissors', computer);
    updateChoiceDisplay('scissors', computer);
});

// showRulesButton.addEventListener('click', () => {
//     rulesMenu.classList.toggle('hidden');
// });

function toggleRulesMenu() {
    const rulesMenu = document.getElementById('rulesMenu');
    rulesMenu.classList.toggle('hidden');
}

// nextbutton.addEventListener('click',function(){
//     window.location.href='hurray.html';
//     })

function redirectToNextPage() {
    // Change the URL to the desired page
    window.location.href = 'hurray.html'; // Replace with the actual page URL
}



// Initial score display
updateScoreDisplay();


