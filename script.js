let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
  //console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    return `It's a tie! you both picked ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "you lost! Rock crushes Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "you win! Scissors cuts Paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "you lost! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "you won! Rock crushes Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "you lost! Scissors cut Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "you won! Paper beats Rock";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose what to throw");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return "You beat the computer yay!";
  } else if (playerScore < computerScore) {
    return "You got beat by the computer! Practice more!";
  } else {
    return "You tied with the computer";
  }
};

console.log(game());
