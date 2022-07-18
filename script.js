let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors";
        } else if(computerSelection === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        } else {
            return "Draw!"
        }
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if(computerSelection === "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        } else {
            return "Draw!"
        }
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else if(computerSelection === "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        } else {
            return "Draw!"
        }
    }
}

function game() {
    for (let i=0;i<5;i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: Score ${playerScore}`);
        console.log(`Computer: Score ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > playerScore) {
        console.log("You lost");
    } else {
        console.log("Draw....");
    }
}

game();