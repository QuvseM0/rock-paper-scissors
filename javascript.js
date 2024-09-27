let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let win = "You Win!" 
let lose = "You Lose!" 
let tie = "TIE!"
let state
let log
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

function playRound(humanChoice,computerChoice){
        if (humanChoice == computerChoice){
            log = " You're equal in strength"
            return state = tie
        }else if (humanChoice != computerChoice && humanChoice == rock)
            if (computerChoice == paper) {
                log = " Paper beats rock"
                state = lose
                ++computerScore
            } else {
                log = " Rock beats scissors"
                state = win
                ++humanScore
            }
        else if (humanChoice != computerChoice && humanChoice == paper)
            if (computerChoice == scissors) {
                log = " Scissors beats paper"
                state = lose
                ++computerScore
            } else {
                log = " Paper beats rock"
                state = win
                ++humanScore
            }
        else if (humanChoice != computerChoice && humanChoice == scissors)
            if (computerChoice == rock) {
                log = " Rock beats scissors"
                state = lose
                ++computerScore
            } else {
                log = " Scissors beats paper"
                state = win
                ++humanScore
            }
        else
            return log = "try again"
        return state
}

const user = document.querySelector(".user")
const cpu = document.querySelector(".cpu")
const msg = document.querySelector(".msg")
const buttons = document.querySelectorAll(".choiceBtn")

user.textContent = "USER: " + humanScore
cpu.textContent = "CPU: "+ computerScore


    buttons.forEach((button) => {
        button.addEventListener("click", e => {
            console.log(button.id, humanScore, computerScore)
            let choice = button.id
            playRound(choice,getComputerChoice())

            if (e)
                user.textContent = "USER: " + humanScore
                cpu.textContent = "CPU: "+ computerScore
                if(humanScore == 5){
                    msg.textContent = "YOU WIN THE GAME" + " " + humanScore + " to " + computerScore
                    humanScore = 0
                    computerScore = 0
                }else if(computerScore == 5){
                    msg.textContent = "YOU LOSE THE GAME" + " " + computerScore + " to " + humanScore
                    humanScore = 0
                    computerScore = 0
                }else{
                    msg.textContent = state + log 
                }

        })
    })

    