function getComputerChoice() {
    let values = ["rock","paper","scissors"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return 0
    }
    
    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return -1
        }
        else if(computerSelection == "scissors"){
            return 1
        }
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return 1
        }
        else if(computerSelection == "rock"){
            return -1
        }
    }

    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return 1
        }
        else if(computerSelection == "scissors"){
            return -1
        }
    }

    }

function game(){

    let score = 0;
    for(let i = 0; i < 5; i++){ 
        
        //let playerSelection = prompt("Make your choice");
        let playerSelection = getComputerChoice();
        let computerSelection = getComputerChoice();

        let res = playRound(playerSelection, computerSelection);
        
        if(res == 1){
            console.log(`You win ${playerSelection} beats ${computerSelection}`)
        } 
        
        else if(res == 0){
            console.log(`Tie Game, you both chose ${playerSelection}`)
        } 
        
        else{
            console.log(`You lose ${computerSelection} beats ${playerSelection}`)
        }

        score += res;
    }

    switch(Math.sign(score)){
        case 1:
            console.log("Congradulations, you win");
            break;
        case 0:
            console.log("Tie Game");
            break;
        default:
            console.log("You lose, loser!")
        
    }

}

game();

