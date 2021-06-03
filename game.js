let options = ["rock", "paper", "scissors"];

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
    } else if (player == "rock" && computerSelection == "paper") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
                ${loseMsg}`)
    } else if (player == "paper" && computerSelection == "scissors") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
                ${loseMsg}`)
    } else if (player == "paper" && computerSelection == "rock") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
                ${winMsg}`)
    } else if (player == "scissors" && computerSelection == "paper") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
                ${winMsg}`)
    } else if (player == "scissors" && computerSelection == "rock") {
        console.log(`You: ${playerSelection} | Computer: ${computerSelection}
                ${loseMsg}`)
    }
}

let computerSelection = computerPlay();
let playerSelection = "rock"

console.log(playRound(playerSelection, computerSelection));