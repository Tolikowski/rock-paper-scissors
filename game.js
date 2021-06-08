let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    function showStatus() {
        document.getElementById("comp").innerHTML = "Computer chose " + computerSelection;
        document.getElementById("player").innerHTML = "You chose " + playerSelection;
        document.getElementById("yourScore").innerHTML = `You: ${playerScore}`;
        document.getElementById("compScore").innerHTML = `Computer: ${computerScore}`;
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
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = playerSelection = prompt("Enter 'Rock, Paper or Scissors'", computerPlay());
        playRound(playerSelection, computerPlay());
    }
    console.log(playerScore == 5 ? "You won the game!" : "You lost the game...");
    console.log("Press F5 to play again.")
}

//console.log(game());