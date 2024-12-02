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

var spanContext = [];

function updateSpan() {

    // target div with results id
    let results = document.getElementById('results');
    
    // string to display player and computer score
    let newResult = (`You: ${playerScore} - ${computerScore} : Computer`);
    
    // not gonna lie, I don't remember why I went through the hassle of using push amd arrays for this function, but I guess it was fun
    spanContext.push(newResult);

    let spanContextLen = spanContext.length;
    let updateSpan = (spanContext[spanContextLen - 1])

    // update the content of results variable
    results.textContent = updateSpan;


};

function finalResult() {
    console.log(gameCount);
    if (gameCount === 5) {
        let winner = document.getElementById('winner');
        let newWinner = '';
        if (playerScore > computerScore) {
            newWinner = 'You win!';
            winner.textContent = newWinner;
        } else if (playerScore < computerScore) {
            newWinner = 'You lose!';
            winner.textContent = newWinner;
        } else {
            newWinner = 'It\'s a tie!';
            winner.textContent = newWinner;
        };
        

    
        // let newWinner = (`Final score is:    You ${playerScore} - ${computerScore} Computer`);
        
            
        
        
        computerScore = 0;
        playerScore = 0;
        gameCount = 0;

    };

    

}


let playerScore = 0;
let computerScore = 0;



// Declare variables for buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let gameCount = 0;
// const buttonsClicked = document.querySelector('button');

let playerSelection = "";

//  Listen for click on Rock button, make playerSelection rock and run playGame function

rock.addEventListener('click', () => {
    playerSelection = "rock";
    gameCount++;
    console.log(`Round: ${gameCount}`);
    playGame();
    updateSpan();
    finalResult();
    
});



//  Listen for click on Paper button, make playerSelection paper and run playGame function

paper.addEventListener('click', () => {
    playerSelection = "paper";
    gameCount++;
    console.log(`Round: ${gameCount}`);
    playGame();
    updateSpan();
    finalResult();
})


//  Listen for click on Scissors button, make playerSelection scissors and run playGame function

scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    gameCount++;
    console.log(`Round: ${gameCount}`);
    playGame();
    updateSpan();
    finalResult();
    
})



function playGame () {
        let computerSelection = getComputerChoice();

        // create variable to target div w/ choice id

        let choice = document.getElementById('choice');

        // string variable to store computer and player variable
        let newChoice = (`Computer selected: ${computerSelection}, You selected: ${playerSelection}`);

        // push the newChoice variable contnt to choice
        choice.textContent = newChoice;
 



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

        console.log ("Score is: You " + playerScore + " : " + computerScore + " Computer");

        
    
}