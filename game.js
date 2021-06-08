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
    let winMsg = "Great! You win this round!";
    let loseMsg = "Oh no! You lose this round!";
    let status = `You: ${playerSelection} | Computer: ${computerSelection}`

    function showStatus() {
        //document.getElementById("status").innerHTML = status;
        document.getElementById("comp").innerHTML = "Computer chose " + computerSelection;
        document.getElementById("player").innerHTML = "You chose " + playerSelection;
    }

    function updateMsg(msg) {
        document.getElementById("msg").innerHTML = msg;
    }

    if (player == computerSelection) {
        console.log("It's a tie!")
        console.log(status)
        showStatus()
        updateMsg("It's a tie!")
    } else if (player == "rock" && computerSelection == "scissors") {
        console.log(winMsg)
        console.log(status)
        showStatus()
        updateMsg(winMsg)
        playerScore++
    } else if (player == "rock" && computerSelection == "paper") {
        console.log(loseMsg)
        console.log(status)
        showStatus()
        updateMsg(loseMsg)
        computerScore++
    } else if (player == "paper" && computerSelection == "scissors") {
        console.log(loseMsg)
        console.log(status)
        showStatus()
        updateMsg(loseMsg)
        computerScore++
    } else if (player == "paper" && computerSelection == "rock") {
        console.log(winMsg)
        console.log(status)
        showStatus()
        updateMsg(winMsg)
        playerScore++
    } else if (player == "scissors" && computerSelection == "paper") {
        console.log(winMsg)
        console.log(status)
        showStatus()
        updateMsg(winMsg)
        playerScore++
    } else if (player == "scissors" && computerSelection == "rock") {
        console.log(loseMsg)
        console.log(status)
        showStatus()
        updateMsg(loseMsg)
        computerScore++
    } else {
        console.log("Invalid input!")
    }
    document.getElementById("yourScore").innerHTML = `You: ${playerScore}`;
    document.getElementById("compScore").innerHTML = `Computer: ${computerScore}`;
    //console.log(`Current Score: 
    //You ${playerScore}
    //Computer ${computerScore}`)
}

let playerSelection

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playerSelection = playerSelection = prompt("Enter 'Rock, Paper or Scissors'", computerPlay());
        playRound(playerSelection, computerPlay());
    }
    console.log(playerScore == 5 ? "You won the game!" : "You lost the game...");
    console.log("Press F5 to play again.")
}

//console.log(game());