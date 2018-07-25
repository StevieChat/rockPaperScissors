var lastRoundWinner;
var playerWinCount = 0;
var computerWinCount = 0;

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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();

    if(playerSelection!="ROCK" 
        && playerSelection!="PAPER" 
        && playerSelection!="SCISSORS"){

        return "You must select Rock, Paper, or Scissors to play!"
    }

    if(playerSelection == computerSelection){
        return "It's a tie! You both played " + playerSelection;
    }

    if((playerSelection == "ROCK" && computerSelection == "SCISSORS") 
        || (playerSelection == "PAPER" && computerSelection == "ROCK") 
        | (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
                        
        lastRoundWinner = "PLAYER";
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }else{
        lastRoundWinner = "COMPUTER";
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function reportScore(){
    if(lastRoundWinner == "PLAYER"){
        playerWinCount += 1;
    }else if(lastRoundWinner == "COMPUTER"){
        computerWinCount += 1;
    }
    console.log("You: " + playerWinCount + " Computer " + computerWinCount);
}

function reportWinner(){
    if(playerWinCount > computerWinCount){
        console.log("CONGRATULATIONS! YOU'VE WON THE GAME!")
    }else if (playerWinCount < computerWinCount){
        console.log("BUMMER! YOU'VE LOST THIS TIME... TRY AGAIN!")
    }else{
        console.log("YOU'VE TIED. TRY AGAIN TO BEST THE COMPUTER!")
    }
}

function game(){

        computerSelection = computerPlay();
                    
        console.log(playRound(playerSelection, computerSelection));
        reportScore();
                
        reportWinner();
                
}

game();