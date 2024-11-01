let computerChoice;
let playerChoice;

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

console.log("Computer chooses: " + getComputerChoice());
//the user enters 1, 2, or 3 to signify their choice of rock, paper, or scissors
function getUserChoice()
{
    do
    {
        playerChoice = prompt("Enter the number for the option you would like: \n 1. Rock \n 2. Paper \n 3. Scissors");
        if(playerChoice == "1")
        {
            console.log("You chose Rock!");
            playerChoice = 1;
            return playerChoice;
        }
        else if (playerChoice == "2")
        {
            console.log("You chose Paper!");
            playerChoice = 2;
            return playerChoice;
        }
        else if (playerChoice == "3")
        {
            console.log("You chose Scissors!");
            playerChoice = 3;
            return playerChoice;
        }
        else
        {
            console.log("Invalid entry! Please try again!");
        }
    }
    while (playerChoice != 1 || playerChoice != 2 || playerChoice != 3);
}

console.log(getUserChoice());
//the code will then compare the results and check to see which side won taht round and add one to the winner's score
function gameRound(playerChoice, computerChoice)
{
    
}
//the game will then move on to the next round until a total of 5 rounds have been played
//the winnder will be determined based on who won the most out of the 5 rounds