//basic/initial input
const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

//address images and score
const comp = document.querySelector("#comp img");
const player = document.querySelector("#player img");
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

    //update display and score depending on input
    function showStatus() {
        comp.src = `img/comp-${computerSelection}.png`;
        player.src = `img/player-${playerSelection}.png`;
        yourScoreDisplay.textContent = playerScore;
        compScoreDisplay.textContent = computerScore;
    }


    //display message with property of msg
    function updateMsg(msg) {
        document.getElementById("msg").textContent = msg;
    }
    //Tie condition
    if (playerSelection == computerSelection) {
        showStatus()
        updateMsg("It's a tie!")

    } else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        //conditions for winning round
        updateMsg("Great! You win this round!");
        playerScore++;
        showStatus();

    } else if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        // conditions for losing round
        updateMsg("Oh no! You lose this round!");
        computerScore++;
        showStatus();
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
    comp.src = "img/computer.png";
    player.src = "img/player.png";
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