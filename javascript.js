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


let playerScore = 0;
let computerScore = 0;

function playGame () {
    for ( i = 1; i <= 5; i ++ ) {
        let computerSelection = getComputerChoice();
        
        
        let playerSelection = (prompt ("Please enter your choice", "rock")).toLowerCase();

        console.log ("For Game No. " + i + " :")

        console.log ("Computer selected " + computerSelection);
        console.log ("You selected " + playerSelection);

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
                console.log("Please enter a valid choice!");
            }
        }


        if (playRound(playerSelection, computerSelection) === "You win! " + playerSelection + " beats " + computerSelection) {
            playerScore ++ ;
        } else if (playRound(playerSelection, computerSelection) === "You loose! " + computerSelection + " beats " + playerSelection) {
            computerScore ++;
        } else {
            computerScore;
            playerScore;
        }

        console.log (playRound(playerSelection, computerSelection))

        console.log ("Score is: You " + playerScore + " : " + computerScore + " Computer")
        


    }
    console.log ("Game Over!");
}

playGame()