console.log("Hello, World");

function playGame() {
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
    let humanChoice = prompt("Rock, Paper, Scissors, SHOOT!").toLowerCase();
    return humanChoice;
  }

  function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("Computer wins! Chose rock");
      computerScore += 1;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("Computer wins! Chose scissors");
      computerScore += 1;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("Computer wins! Chose paper");
      computerScore += 1;
    } else if (computerChoice == humanChoice) {
      console.log("It's a tie");
    } else {
      console.log("You win!");
      humanScore += 1;
    }
  }

  // const humanSelection = getHumanChoice();
  // const computerSelection = getComputerChoice();

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());
