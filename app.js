const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById("result");
console.log(resultDisplay);
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    let winner = "you";
    return winner;
    // return `You win, ${playerSelection} beats ${computerSelection}`
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    let winner = "computer";
    return winner;
    // return `You lose, ${computerSelection} beats ${playerSelection}`
  } else {
    return "Enter a valid selection";
  }
}

function game() {
  let myWins = 0;
  let computerWins = 0;
  let rounds = 0;

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (rounds < 5) {
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();
        const winner = playRound(playerSelection, computerSelection);

        if (winner === "you") {
          resultDisplay.textContent = "You win this round";
          myWins++;
        } else if (winner == "computer") {
          resultDisplay.textContent = "Computer wins this round";
          computerWins++;
        } else {
          resultDisplay.textContent = "It's a draw this round!";
        }
        rounds++;

        const div = document.createElement("div");
        if (rounds === 5) {
          let finalResult = "";
          if (myWins > computerWins) {
            finalResult = "You win the game!";
          } else if (myWins < computerWins) {
            finalResult = "Computer wins the game";
          } else if (myWins == computerWins) {
            finalResult.textContent = "It's a draw!";
          }
          resultDisplay.textContent = finalResult;
        }
      }
    });
  });
}

game();
