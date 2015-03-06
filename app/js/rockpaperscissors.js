 ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    //return /* Your Expression */;
	// understands players choice//
	var (PlayerMove= getInput()) {
   		if(move=="Rock" || "Paper"|| "Scissors") {
   			console.log (move)
   		}; 
			else (getInput()){
               return "incorrect input. Please choose Rock, Paper or Scissors...";
                
            }
				}
}
            	

function getComputerMove(move) {
   	// Write an expression that operates on a variable called `move`
	    // If a `move` has a value, your expression should evaluate to that value.
	    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
	    return /* Your Expression */;	
	}
	
		if(ComputerMove== "Rock"|| "Paper"|| "Scissors") {
			console.log (move)
		};
		 	else {
			(randomPlay()) ;
			return "One moment. Computing optimum play for destroying opponents..."
			}
				}

var winner;
function getWinner(playerMove,computerMove) {
   
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
	// there are just 2 players and 3 possible values, so in any game only 2 values can be chosen... there will be a winner if true and tie if false//
	
	    if(playerMove === computerMove) {
	      alert("The result is a tie!");
	}
	if(playerMove === "rock" && computerMove === "scissors")|| (playerMove === "paper" && computerMove === "rock")||(playerMove === "scissors" && computerMove === "paper"){
	        winner= Player;
	    } else {
	        winner= computer
	    }
			console.log ((winner)+ ' ' + 'wins!');
			return winner;
	// Determines from the choices made, who is the winner or if there is a draw/ tie.//

	

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
	
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
	    while (playerWins < 5 && computerWins < 5) {
	    	var playerMove = getPlayerMove();
	    	var computerMove = getComputerMove();
	    	var winner = getWinner(playerMove, computerMove);
	    	if (winner === 'player') {playerWins++}
	    	else {computerWins++}
	    	console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
		    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
	    }
	    return [playerWins, computerWins];
	}
	
    

