const choice = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("play-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const computerChoice = choice[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You win!" : "You lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You win!" : "You lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You win!" : "You lose!";
        break;
    }
  }
  playerDisplay.textContent = `You chose: ${playerChoice}`;
  computerDisplay.textContent = `Computer chose: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("green", "red", "yellow");

  switch (result) {
    case "You win!":
      resultDisplay.style.color = "green";
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You lose!":
      resultDisplay.style.color = "red";
      computerScore++;
      computerScoreDisplay.textContent = computerScore;

      break;
    case "It's a tie!":
      resultDisplay.style.color = "yellow";
      break;
  }
}
