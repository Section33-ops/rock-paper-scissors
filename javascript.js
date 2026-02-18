console.log("Hello, World");

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

console.log(getComputerChoice());
