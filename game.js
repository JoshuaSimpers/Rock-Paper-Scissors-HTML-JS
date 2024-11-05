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

//the user enters 1, 2, or 3 to signify their choice of rock, paper, or scissors
function getUserChoice()
{
    do
    {
        playerChoice = prompt("Enter the number for the option you would like: \n 1. Rock \n 2. Paper \n 3. Scissors");
        if(playerChoice == "1")
        {
            console.log("You chose Rock!");
            playerChoice = String("Rock");
            return playerChoice;
        }
        else if (playerChoice == "2")
        {
            console.log("You chose Paper!");
            playerChoice = String("Paper");
            return playerChoice;
        }
        else if (playerChoice == "3")
        {
            console.log("You chose Scissors!");
            playerChoice = String("Scissors");
            return playerChoice;
        }
        else
        {
            console.log("Invalid entry! Please try again!");
        }
    }
    while (playerChoice != "Rock" || playerChoice != "Paper" || playerChoice != "Scissors");
}

//the code will then compare the results and check to see which side won that round and add one point to the winner's score
function gameRound(playerChoice, computerChoice)
{
    if (playerChoice == computerChoice)
    {
        console.log(playerChoice + " is equal to " + computerChoice + ". Round " + roundNumber + " is a tie!");
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors")
    {
        console.log(playerChoice + " beats " + computerChoice + "! Player wins Round " + roundNumber);
        playerScore++;
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper")
    {
        console.log(computerChoice + " beats " + playerChoice + "! Computer wins Round " + roundNumber);
        computerScore++;
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors")
    {
        console.log(computerChoice + " beats " + playerChoice + "! Computer wins Round " + roundNumber);
        computerScore++;
    }
    else if(playerChoice == "Paper" && computerChoice == "Rock")
    {
        console.log(playerChoice + " beats " + computerChoice + "! Player wins Round " + roundNumber);
        playerScore++;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Paper")
    {
        console.log(playerChoice + " beats " + computerChoice + "! Player wins Round " + roundNumber);
        playerScore++;
    }
    else if(playerChoice == "Scissors" && computerChoice == "Rock")
    {
        console.log(computerChoice + " beats " + playerChoice + "! Computer wins Round " + roundNumber);
        computerScore++;
    }
}

//the game will then move on to the next round until a total of 5 rounds have been played
function playGame()
{
    /*
    for (roundNumber = 1; roundNumber <= 5; roundNumber++)
    {
        computerChoice = getComputerChoice();
        playerChoice = getUserChoice();
        gameRound(playerChoice, computerChoice);
        console.log("The score is: Computer: " + computerScore + " Player: " + playerScore);
    }
        */
    if (playerScore > computerScore)
    {
        console.log("The player won more rounds out of the 5 total played. The player wins!");
    }
    else if(playerScore < computerScore)
    {
        console.log("The computer won more rounds out of the 5 total played. The computer wins!");
    }
    else if (playerScore == computerScore)
    {
        console.log("Both scores are equal out of the 5 total played. It is a tie!");
    }
}

const container = document.querySelector("#container");
//three buttons for player choice
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorsButton.textContent = "SCISSORS";

//the winnder will be determined based on who won the most out of the 5 rounds. This is done in the playGame() function