let compCounter = 0;
let playerCounter = 0;
let gamesCounter = 0;

function random(number = 1){
    return(Math.ceil(Math.random() * number));
}

function getComputerChoice(){
    switch(random(3)){
        case 1: return "rock";
                break;
        case 2: return "paper";
                break;
        case 3: return "scissors";
                break;
    }
}

/*function game(){
    let playerRecount = 0;
    let computerRecount = 0;
    for(let i = 0; i < 5; i++){
        switch(playRound(prompt("Make your Choice! Rock, Paper or Scissors!: "), getComputerChoice())){
            case 1: playerRecount++;
                    break;
            case 0: computerRecount++;
                    break;
            case -1: i--
                     break;                
        }
    }
    console.log("Game Has finished! Recounting...")
    if(playerRecount >= 3){
        console.log("You Win! " + playerRecount + " vs " + computerRecount + "!")
    } else {
        console.log("You Lose! " + computerRecount + " vs " + playerRecount + "!")
    }
}*/

function playRound(e){
    let playerChoice = this.classList[0];
    let computerChoice = getComputerChoice();
    let matchResult;
    switch(playerChoice.toUpperCase()){
        case "ROCK": 
            switch(computerChoice){
                case "rock": matchResult = -1;
                             break;
                case "paper": matchResult = 0;
                              break;
                case "scissors": matchResult = 1;
                                 break;
        }
        break;
        case "PAPER": 
            switch(computerChoice){
                case "rock": matchResult = 1;
                             break;
                case "paper": matchResult = -1;
                              break;
                case "scissors": matchResult = 0;
                                 break;
            }
            break;
        case "SCISSORS":
            switch(computerChoice){
                case "rock": matchResult = 0;
                             break;
                case "paper": matchResult = 1;
                              break;
                case "scissors": matchResult = -1;
                                 break;
            }
            break;
    }
    const resultText = document.querySelector(".result");
    const counter = document.querySelector(".counter");        
     switch(matchResult){
         case 0: resultText.textContent = `You Lose! ${computerChoice} beats ${playerChoice} !`;
                 gamesCounter++
                 compCounter++
                 break;
         case 1: resultText.textContent = `You Win! ${playerChoice} beats ${computerChoice} !`;
                 gamesCounter++
                 playerCounter++
                break;  
         case -1: resultText.textContent = "It's a Tie! Try again!";
                  break;              
                    
    }

    counter.textContent = `Player Score => ${playerCounter} vs ${compCounter} <= Computer Score`

    if (gamesCounter === 5){
        if(playerCounter >= 3) resultText.textContent = `FIve Games Played! You win ${playerCounter} vs ${compCounter}`
        else resultText.textContent = `Five Games Played! You Lose! ${playerCounter} vs ${compCounter}`;
        gamesCounter = 0;
        playerCounter= 0;
        compCounter = 0;
    }
    return matchResult;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playRound));

    
