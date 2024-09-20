let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"

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



console.log(getComputerChoice())