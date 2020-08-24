 // Your JavaScript goes here!
//computerPlay decides on what the computer chooses. It randomly picks a number from 1 to 3 and finds the appropriate option
function computerPlay() {
  let number = Math.floor((Math.random() * 3) + 1);
  if (number == 1) {
    return comp = "rock";
  } else if (number == 2) {
    return comp = "paper";
  } else {
    return comp = "scissors";
  }
};

//event handling to run playRound when button is pressed
function rockButton(){
  const rockPlayed = document.getElementById("rock").addEventListener("click", rockPressed);

  function rockPressed() {
    playRound("rock",computerPlay())
    result();
    createScoreboard()
    victory();
}};

function paperButton(){
const paperPlayed = document.getElementById("paper").addEventListener("click", paperPressed);

function paperPressed() {
  playRound("paper",computerPlay())
  result();
  createScoreboard()
  victory();
}};

function scissorsButton(){
const scissorsPlayed = document.getElementById("scissors").addEventListener("click", scissorsPressed);

function scissorsPressed() {
  playRound("scissors",computerPlay())
  result();
  createScoreboard();
  victory();
}};
 
//playRound decides who wins or loses. I probably could have condensed it but its works so why change it haha
function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock") && (computerSelection === "rock")) {
      return message =  "You Tie! Rock ties with Rock";
  } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
      computer += 1;
      return message = "You Lose! Paper beats Rock";
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      player +=1;
      return message = "You Win! Rock beats Scissors";
  } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
      player +=1;
      return message = "You Win! Paper beats Rock";
  } else if ((playerSelection === "paper") && (computerSelection === "paper")) {
      return message = "You Tie! Paper ties with Paper";
  } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
      computer += 1;
      return message = "You Lose! Scissors beats Paper";
  } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
      computer += 1;
      return message = "You Lose! Rock beats Scissors";
  } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
      player +=1;
      return message = "You Win! Scissors beats Paper";
  } else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
      return message = "You Tie! Scissors ties with Scissors";
  }
}

//container to hold result statements

function result() {
  const resultBox = document.querySelector("#results");
  resultBox.textContent = `${message}`;
  
};

function victory() {
  const victoryResult = document.querySelector('#victory');
  if (player == 5) {
    victoryResult.textContent = "You Win! Please refresh the page to play again.";
    resetGame();
  } else if (computer == 5) {
    victoryResult.textContent = "You Lose! Please refresh the page to play again.";
    resetGame();
  } else {
    return;
  }
}

let player = 0;
let computer = 0;

//Scoreboard
function createScoreboard(){

  const playerScore = document.querySelector("#playerScore");
  playerScore.textContent = `Player: ${player}`;
  const hyphen = document.querySelector("#hyphen");
  hyphen.textContent = "-";
  const computerScore = document.querySelector("#computerScore");
  computerScore.textContent = `Computer: ${computer}`;
};

function resetGame() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;

}



document.getElementById('rock').onclick = rockButton();
document.getElementById('paper').onclick = paperButton();
document.getElementById('scissors').onclick = scissorsButton();



//game is support to run the game for 5 rounds. But the loop wont iterate.
/*function game() {
  player = 0;
  computer = 0;

  for (let i = 0 ; i<5; i++) {
      playRound(playerInput(),computerPlay());
      console.log(message);
      console.log(`The score is Player: ${player} to Computer: ${computer}`);
  }

  if (player > computer) {
    console.log(`Congrats! You beat the computer with a score of ${player}:${computer}`);
  } else {
      console.log(`Boo! The computer beat you with a score of ${computer}:${player}`);
  }
}*/



