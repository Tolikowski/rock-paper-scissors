let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let winMsg = "Great! You win this round!";
    let loseMsg = "Oh no! You lose this round!";

    if (player == computerSelection) {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        It's a tie!`)
    } else if (player == "rock" && computerSelection == "scissors") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        ${winMsg}`)
        playerScore++
    } else if (player == "rock" && computerSelection == "paper") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        ${loseMsg}`)
        computerScore++
    } else if (player == "paper" && computerSelection == "scissors") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        ${loseMsg}`)
        computerScore++
    } else if (player == "paper" && computerSelection == "rock") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        ${winMsg}`)
        playerScore++
    } else if (player == "scissors" && computerSelection == "paper") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        ${winMsg}`)
        playerScore++
    } else if (player == "scissors" && computerSelection == "rock") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
        ${loseMsg}`)
        computerScore++
    }
    console.log(`Current Score: 
    You ${playerScore}
    Computer ${computerScore}`)
}

let playerSelection = "rock"

function game() {
    while (playerScore < 5 && computerScore < 5) {
        playRound(playerSelection, computerPlay());
    }
    console.log(playerScore == 5 ? "You won the game!" : "You lost the game...");
    console.log("Press F5 to play again.")
}

console.log(game());