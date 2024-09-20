let rock = "rock"
let paper = "paper"
let scissors = "scissors"

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
    return pick = pick.trim().toLowerCase(pick)
}

console.log(getHumanChoice())