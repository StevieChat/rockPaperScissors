var lastRoundWinner;
var playerWinCount = 0;
var computerWinCount = 0;
var playerSelection = "";

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('#results');
const lastResultDiv = document.querySelector('#lastGameResult');
const winnerDiv = document.querySelector('#winner');

rockBtn.addEventListener('click', () => {
    playRound("ROCK");
});

paperBtn.addEventListener('click', () => {
    playRound("PAPER");
});

scissorsBtn.addEventListener('click', () => {
    playRound("SCISSORS");
});

function computerPlay(){
    var x = Math.floor((Math.random()*3)+1);
                
    if(x == 1){
        return "ROCK";
    }
    if(x == 2){
        return "PAPER";
    }
    if(x == 3){
        return "SCISSORS";
    }
    if(x<1 || x>3){
        return "Computer Malfunctioned"
    }
}

function playRound(playerSelection){

    var computerSelection = computerPlay();

    if(playerWinCount != 5 && computerWinCount !=5){
        winnerDiv.textContent = "";
    }

    if(playerSelection == computerSelection){
        lastResultDiv.textContent = "It's a tie! You both played " + playerSelection;
    }else if((playerSelection == "ROCK" && computerSelection == "SCISSORS") 
        || (playerSelection == "PAPER" && computerSelection == "ROCK") 
        | (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
                        
        lastRoundWinner = "PLAYER";
        lastResultDiv.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    }else{
        lastRoundWinner = "COMPUTER";
        lastResultDiv.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    reportScore();

    if(playerWinCount == 5
        || computerWinCount == 5){
        
        reportWinner();
    }

}

function reportScore(){
    if(lastRoundWinner == "PLAYER"){
        playerWinCount += 1;
    }else if(lastRoundWinner == "COMPUTER"){
        computerWinCount += 1;
    }
    resultsDiv.textContent = "You: " + playerWinCount + " Computer " + computerWinCount;
}

function reportWinner(){
    if(playerWinCount > computerWinCount){
        winnerDiv.textContent = "CONGRATULATIONS! YOU'VE WON THE GAME!";
    }else if (playerWinCount < computerWinCount){
        winnerDiv.textContent = "BUMMER! YOU'VE LOST THIS TIME... TRY AGAIN!";
    }else{
        winnerDiv.textContent = "YOU'VE TIED. TRY AGAIN TO BEST THE COMPUTER!";
    }

    resetGame();
}

function resetGame(){
    playerWinCount = 0;
    computerWinCount = 0;
}