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
function prompt() {
return 'scissors';
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move?move:getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move?move:randomPlay());
}

function getWinner(playerMove,computerMove) {
	var winner;
	// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
	// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
	// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	var stuff = playerMove + ', ' + computerMove;
	switch(stuff) {
		case 'rock, scissors':
		case 'scissors, paper':
		case 'paper, rock':
			winner = 'player';
			break;
		case 'rock, rock':
		case 'scissors, scissors':
		case 'paper, paper':
			winner = 'tie';
			break;
		case 'rock, paper':
		case 'scissors, rock':
		case 'paper, scissors':
			winner = 'computer';
			break;
		default: 
			console.log('Something don messed up');
			winner = 'player';
	} 

	return winner;
}
function playToFive() {
	console.log("Let's play Rock, Paper, Scissors");
	var playerWins = 0;
	var computerWins = 0;
	// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

	while (true){
		// get player move
		var playerMove = getPlayerMove();
		// get computer move
		var computerMove = getComputerMove();
		// get winner
		var winner = getWinner(playerMove, computerMove);
		// print winner
		if (winner == 'player'){
			playerWins = playerWins + 1;
		} else if (winner == 'computer') {
			computerWins = computerWins + 1;
		}
		if ((playerWins >= 5) || (computerWins >= 5)) {
			return [playerWins, computerWins];
		}
	}
}
