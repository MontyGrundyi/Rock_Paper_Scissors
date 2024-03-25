// paper > Rock > Scissors
// Paper > Scissors
// Win, Lose, Draw

// function getComputeChoice randomly returns Rock, Paper or Scissors
// human player input -----> prompt
// function playRound (playerSelection, computerSelection) returns "You Lose! Paper beats Rock"
// function game() Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const compChoice = choices[(Math.floor(Math.random() * choices.length))]
    return compChoice
}

function getPlayerChoice () {
    let playerInput = prompt("Please select Rock, Paper or scissors");
    while (playerInput === null) {
        playerInput = prompt("Please select Rock, Paper or scissors ");
    } 
    playerInput.toLowerCase()
    while (check = false) {
        prompt("Type Rock, Paper, or scissors correctly")
    }
    playerInput = playerInput.toLowerCase();
    check = validateInput(playerInput)


}



function playRound(playerChoice, computerChoice) {
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()


    if (playerSelection === computerSelection) {
        return "It's a draw"
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        let winner = "you"
        return winner
        // return `You win, ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        let winner = "computer"
        return winner
        // return `You lose, ${computerSelection} beats ${playerSelection}`

    } else {
        return "Enter a valid selection"
    }
}


// console.log(playerSelection, computerSelection)

// console.log(playRound(playerSelection, computerSelection))

function game() {
    let myWins = 0;
    let computerWins = 0;
    let games = 0;


    while (games < 5) {
        // let playerSelection = prompt("What's your selection").toLowerCase()
        let winner = playRound()
        
        // console.log(winner)
        if (winner === "you") {
            myWins += 1
        } else if (winner == "computer") {
            computerWins += 1
        }
        games ++
    }
    if (myWins > computerWins) {
        console.log("You win")
    } else if (myWins < computerWins) {
        console.log("You lose")
    } else if (myWins == computerWins) {
        console.log("It's a draw")
    }

}

function validateInput(choice) {
    return choices.includes(choice)
    
}

game()