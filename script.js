"use strict";

function computerPlay() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function runGame() {
  if (playerScore === 5 || computerScore === 5){
    return;
  }
  document.querySelector('.results').textContent = gameLogic(playerSelection, computerPlay());
  document.querySelector('.playerScore').textContent = playerScore;
  document.querySelector('.computerScore').textContent = computerScore;
  if (playerScore === 5) {
    document.querySelector('.results').textContent = "You Won The Game!"
  } else if (computerScore === 5) {
    document.querySelector('.results').textContent = "You Lost The Game!"
  }
}

function gameLogic(playerSelection, computerSelection) {
  const yourSelection = playerSelection.toLowerCase();
  document.querySelector('.player-choice').textContent = `Player Choice: ${yourSelection}`;
  document.querySelector('.computer-choice').textContent = `Computer Choice: ${computerSelection}`;

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


let i = 0;
let playerSelection = '';


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    if (button.textContent === "Rock") {
      playerSelection = button.textContent;
      runGame();
    } else if (button.textContent === "Paper") {
      playerSelection = button.textContent;
      runGame();
    } else if (button.textContent === "Scissors"){
      playerSelection = button.textContent;
      runGame();
    }
  });
});



 


    
  












