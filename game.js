//basic/initial input
const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//address images and score
const compImg = document.getElementById("comp");
const playerImg = document.getElementById("player");
const yourScoreDisplay = document.getElementById("yourScore");
const compScoreDisplay = document.getElementById("compScore");

//address buttons
const btns = document.getElementById("btn-container");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const againBtn = document.querySelector("#again");

//set random computer input
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}
//play round with value of player action and computer selection (defined by computerPlay())
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    //update display and score depending on input
    function showStatus() {
        compImg.innerHTML = `<img src="img/comp-${computerSelection}.png" width="200px">`;
        playerImg.innerHTML = `<img src="img/player-${playerSelection}.png" width="200px">`;
        yourScoreDisplay.textContent = playerScore;
        compScoreDisplay.textContent = computerScore;
    }

    //update display and score
    function winRound() {
        updateMsg("Great! You win this round!");
        playerScore++;
        showStatus();
    }

    //update display and score
    function loseRound() {
        updateMsg("Oh no! You lose this round!");
        computerScore++;
        showStatus();
    }

    //display message with property of msg
    function updateMsg(msg) {
        document.getElementById("msg").textContent = msg;
    }
    //Tie condition
    if (player == computerSelection) {
        showStatus()
        updateMsg("It's a tie!")

    } else if (player == "rock" && computerSelection == "scissors" ||
        player == "paper" && computerSelection == "rock" ||
        player == "scissors" && computerSelection == "paper") {
        //conditions for winning round
        winRound();

    } else if (player == "rock" && computerSelection == "paper" ||
        player == "paper" && computerSelection == "scissors" ||
        player == "scissors" && computerSelection == "rock") {
        // conditions for losing round
        loseRound();
    } else {
        console.log("Invalid input!")
    }

    //change display of buttons if either party wins (maybe add toggle function?)
    if (playerScore == 5) {
        updateMsg("You won the game!");
        btns.style.display = "none";
        againBtn.style.display = "inline"

    } else if (computerScore == 5) {
        updateMsg("You lost the game...")
        btns.style.display = "none";
        againBtn.style.display = "inline"
    }
}

//Reset the game to initial state
function playAgain() {
    playerScore = 0;
    computerScore = 0;
    compImg.innerHTML = `<img src="img/computer.png" width="200px">`;
    playerImg.innerHTML = `<img src="img/player.png" width="200px">`;
    yourScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = computerScore;
    document.getElementById("msg").textContent = "Choose your weapon!";
    btns.style.display = "inline";
    againBtn.style.display = "none";
}

//eventlisteners for all buttons
rockBtn.addEventListener("click", () => { return playRound("rock", computerPlay()) });
paperBtn.addEventListener("click", () => { return playRound("paper", computerPlay()) });
scissorsBtn.addEventListener("click", () => { return playRound("scissors", computerPlay()) });
againBtn.addEventListener("click", playAgain);