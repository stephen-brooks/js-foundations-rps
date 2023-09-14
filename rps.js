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

function setScores(){
    document.getElementById("playerScore").innerHTML = playerScore.getAttribute('data-value');
    document.getElementById("computerScore").innerHTML = computerScore.getAttribute('data-value');
};

function playRoundButton() {
    buttons.forEach((button)  => {
        
        button.addEventListener('click', () => {
            const playerSelection = button.getAttribute('data-value');
            
            let computerSelection = getComputerChoice();
            
            let res = playRound(playerSelection, computerSelection);
            
            if(res == 1){
                alert(`You WIN ${playerSelection} beats ${computerSelection}`);
                playerScore.setAttribute('data-value', (+playerScore.getAttribute('data-value') + 1));
            } 
            
            else if(res == 0){
                alert(`TIE Game, you both chose ${playerSelection}`)
            } 
            
            else{
                alert(`You LOSE ${computerSelection} beats ${playerSelection}`);
                computerScore.setAttribute('data-value', (+computerScore.getAttribute('data-value') + 1));
            }
            
            setScores();
            
            if (+playerScore.getAttribute('data-value') == 5){
                alert("Congradulations, you win! Lucky!");
                document.location.reload();
                clearInterval(interval);
                
            }
            else if (+computerScore.getAttribute('data-value') == 5){
                alert ("Uh-oh, you lose... Loser!");
                document.location.reload();
                clearInterval(interval);
            }
        })
        });
    };


function game(){

    setScores();
    playRoundButton();
    setScores();

}

const buttons = document.querySelectorAll('#rps-buttons button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');


game();

