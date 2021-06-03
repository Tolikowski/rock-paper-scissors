let options = ["rock", "paper", "scissors"];

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

let computerSelection = computerPlay();
let playerSelection = prompt("Please type one of the following: Rock, Paper or Scissors")