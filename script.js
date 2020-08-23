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
 
     //playRound decides who wins or loses. I probably could have condensed it but its works so why change it haha
     function playRound(playerSelection, computerSelection) {
      
 
       if ((playerSelection === "rock") && (computerSelection === "rock")) {
           return message = "You Tie! Rock ties with Rock";
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
   
     //playerInput gets the players option. It also makes it lowercase for error handling
     /* function playerInput() {
       let player = prompt("Rock, Paper, or Scissors?")
       return player.toLowerCase(); 
     }*/
     
     //game is support to run the game for 5 rounds. But the loop wont iterate.
     function game() {
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
     }
 
     console.log(game())