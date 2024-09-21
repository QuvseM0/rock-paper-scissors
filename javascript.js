let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let choice = Math.random()
    if (choice > 0.33 & choice < 0.66)
        choice = rock
    else if(choice < 0.33)
        choice = paper
    else if(choice > 0.66)
        choice = scissors
    return choice
} 

function getHumanChoice(pick){
    pick = prompt("Rock, Paper or Scissors?")
    pick = pick.trim().toLowerCase(pick)
    return pick
}

function playGame(nr){
    let state
    function playRound(humanChoice,computerChoice){
        let win = "you win, " 
        let lose = "you lose, " 
        let tie = "you're tied"
        if (humanChoice == computerChoice)
            return tie
        else if (humanChoice != computerChoice && humanChoice == rock)
            if (computerChoice == paper) {
                ++computerScore
                state = lose + "killed by paper"
            } else {
                ++humanScore
                state = win + "killed scissors"
            }
        else if (humanChoice != computerChoice && humanChoice == paper)
            if (computerChoice == scissors) {
                ++computerScore
                state = lose + "killed by scissors"
            } else {
                ++humanScore
                state = win + "killed rock"
            }
        else if (humanChoice != computerChoice && humanChoice == scissors)
            if (computerChoice == rock) {
                ++computerScore
                state = lose + "killed by rock"
            } else {
                ++humanScore
                state = win + "killed paper"
            }
        else
            return humanChoice + " isn't a valid input, refresh the page and try again"
        return state
    }
    for (i = 0; i < nr; i++){
        console.log(playRound(getHumanChoice(),getComputerChoice()))
        console.log("User: " + humanScore)
        console.log("CPU: " + computerScore)   
    }    
}

playGame(5)


