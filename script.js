"use strict";

function computerPlay() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    console.log("The Computer Chose: Rock");
    return "rock";
  } else if (randomNum === 1) {
    console.log("The Computer Chose: Paper");
    return "paper";
  } else {
    console.log("The Computer Chose: Scissors");
    return "scissors";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  //for (let i = 0; i < 5; i++) {
    //let playerSelection = prompt("Rock, Paper, or Scissors?");

  console.log(
    "You Chose: " +
      playerSelection.toUpperCase()[0] +
      playerSelection.substr(1).toLowerCase()
  );

  console.log(gamePlay(playerSelection, computerPlay()));

  console.log("Your Score: " + playerScore);
  console.log("Computer: Score: " + computerScore);

  function gamePlay(playerSelection, computerSelection) {
    const yourSelection = playerSelection.toLowerCase();

    if (yourSelection === computerSelection) {
      return "It's a Draw!";
    } else if (yourSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You Won The Round";
    } else if (yourSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You Won The Round";
    } else if (
      yourSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return "You Won The Round";
    } else if (computerSelection === "rock" && yourSelection === "scissors") {
      computerScore++;
      return "You Lost The Round :(";
    } else if (computerSelection === "paper" && yourSelection === "rock") {
      computerScore++;
      return "You Lost The Round :(";
    } else if (
      computerSelection === "scissors" &&
      yourSelection === "paper"
    ) {
      computerScore++;
      return "You Lost The Round :(";
    } else {
      return "invalid entry, try again";
    }
  }

}

  /*
  console.log("Your Score: " + playerScore);
  console.log("Computer: Score: " + computerScore);

  if (playerScore > computerScore) {
    return console.log("Congrats, You Won The Game!");
  } else if (computerScore > playerScore) {
    return console.log("Feel Good About Yourself? Why You Losin?");
  }
*/


const buttons = document.querySelectorAll('button');
let playerSelection = '';

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if (button.textContent === "Rock") {
      playerSelection = button.textContent;
      game();
    } else if (button.textContent === "Paper") {
      playerSelection = button.textContent;
      game();
    } else if (button.textContent === "Scissors"){
      playerSelection = button.textContent;
      game();
    }
  });
});




