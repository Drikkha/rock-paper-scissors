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

function game(){
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
}

function playRound(playerChoice, computerChoice){
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
     switch(matchResult){
         case 0: console.log("You Lose! " + computerChoice + " beats " + playerChoice +"!");
                 break;
         case 1: console.log("You Win! " + playerChoice + " beats " + computerChoice + "!");
                break;  
         case -1: console.log("It's a Tie! Try again!");
                  break;              
                    
    }
    return matchResult;
}



    
