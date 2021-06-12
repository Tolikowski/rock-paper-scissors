let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}


function playRound(playerSelection, computerSelection) {
    let btns = document.getElementById("btn-container");
    let player = playerSelection.toLowerCase();

    function showStatus() {
        document.getElementById("comp").innerHTML = `<img src="img/comp-${computerSelection}.png" width="200px">`;
        document.getElementById("player").innerHTML = `<img src="img/player-${playerSelection}.png" width="200px">`;
        document.getElementById("yourScore").innerHTML = playerScore;
        document.getElementById("compScore").innerHTML = computerScore;
    }

    function winRound() {
        updateMsg("Great! You win this round!");
        playerScore++;
        showStatus();
    }

    function loseRound() {
        updateMsg("Oh no! You lose this round!");
        computerScore++;
        showStatus();
    }

    function updateMsg(msg) {
        document.getElementById("msg").innerHTML = msg;
    }

    if (player == computerSelection) {
        showStatus()
        updateMsg("It's a tie!")
    } else if (player == "rock" && computerSelection == "scissors") {
        winRound();
    } else if (player == "rock" && computerSelection == "paper") {
        loseRound()
    } else if (player == "paper" && computerSelection == "scissors") {
        loseRound()
    } else if (player == "paper" && computerSelection == "rock") {
        winRound();
    } else if (player == "scissors" && computerSelection == "paper") {
        winRound();
    } else if (player == "scissors" && computerSelection == "rock") {
        loseRound()
    } else {
        console.log("Invalid input!")
    }

    if (playerScore == 5) {
        updateMsg("You won the game!");
        btns.style.display = "none";

    } else if (computerScore == 5) {
        updateMsg("You lost the game...")
        btns.style.display = "none";
    }
}