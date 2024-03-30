console.log("Hello World")

function getComputerChoice (choice) {
    let guess = Math.floor(Math.random() * 3 ) + 1;
    if (guess === 1) {
        return "rock";
    }  else if (guess === 2) {
        return "paper";        
    } else {
        return "scissors";
    }

}


let computerSelection = getComputerChoice();
console.log (computerSelection)



let playerSelection = (prompt ("Please enter your choice", "rock")).toLowerCase();

function playRound(playerSelection, computerSelection) {
    
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            if (playerSelection === computerSelection) {
                return "It's a tie!";
            } else if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "scissors") {
                return ("You win! " + playerSelection + " beats " + computerSelection)
            } else {
                return (("You loose! " + computerSelection + " beats " + playerSelection))
            }
        } else {
            console.log("Please enter a valid choice!")
            return;
        }
    
    }
    

console.log(playRound(playerSelection, computerSelection))

// function playGame () {
//     let i = 0;
//     while (i <= 5);
//     playRound();
//     // i += 1;
// }
