console.log("Hello, World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.random();
  if (randomChoice < 0.3) {
    randomChoice = "rock";
  } else if (randomChoice > 0.33 && randomChoice < 0.6) {
    randomChoice = "paper";
  } else if (randomChoice > 0.66) {
    randomChoice = "scissors";
  }

  return randomChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors, SHOOT!");
  return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
