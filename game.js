// Name: Joshua Simpers
// Assignment: Create an interactive game of Rock Paper Scissors in the console using JavaScript linked to an HTML file
//Date: Nov-1st-2024
//File Name: game.js
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//the computer randomly selects one of three choices in the background
function getComputerChoice()
{
    computerChoice = Math.random();
    if(computerChoice <= 0.333)
    {
        computerChoice = String("Rock");
    }
    else if(computerChoice > 0.333 && computerChoice <= 0.666)
    {
        computerChoice = String("Paper");
    }
    else if(computerChoice > 0.666)
    {
        computerChoice = String("Scissors");
    }
    return computerChoice;
}

//the code will then compare the results and check to see which side won that round and add one point to the winner's score
function gameRound(playerChoice, computerChoice)
{
    if (playerChoice == computerChoice)
    {
        results.textContent = playerChoice + " is equal to " + computerChoice + ". This round is a tie. Player: " + playerScore + " Computer: " + computerScore;
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors")
    {
        playerScore++;
        results.textContent = playerChoice + " beats " + computerChoice + "! Player wins this round. Player: " + playerScore + " Computer: " + computerScore;
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper")
    {
        computerScore++;
        results.textContent = computerChoice + " beats " + playerChoice + "! Computer wins this round. Player: " + playerScore + " Computer: " + computerScore;
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors")
    {
        computerScore++;
        results.textContent = computerChoice + " beats " + playerChoice + "! Computer wins this round. Player: " + playerScore + " Computer: " + computerScore;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock")
    {
        playerScore++;
        results.textContent = playerChoice + " beats " + computerChoice + "! Player wins this round. Player: " + playerScore + " Computer: " + computerScore;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper")
    {
        playerScore++;
        results.textContent = playerChoice + " beats " + computerChoice + "! Player wins this round. Player: " + playerScore + " Computer: " + computerScore;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock")
    {
        computerScore++;
        results.textContent = computerChoice + " beats " + playerChoice + "! Computer wins this round. Player: " + playerScore + " Computer: " + computerScore;
    }
    gameOver();
}

//the game will then move on to the next round until a total of 5 rounds have been played
function gameOver()
{
    if (playerScore >= 5)
    {
        results.textContent = "The player has 5 points. The player wins!"
    }
    else if(computerScore >= 5)
    {
        results.textContent = "The computer has 5 points. The computer wins!"
    }
}

const container = document.querySelector("#container");
//three buttons for player choice
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.id = "Rock";
paperButton.id = "Paper";
scissorsButton.id = "Scissors";

rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorsButton.textContent = "SCISSORS";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

const buttonList = document.querySelectorAll("button");

buttonList.forEach((button) => 
    {
        button.addEventListener("click", () =>
        {
            gameRound(button.id, getComputerChoice());
        });
    });

const results = document.createElement("div");
container.appendChild(results);