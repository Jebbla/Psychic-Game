var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
	var wins = 0;
	var losses = 0;
	var guesses_left = 10;
	var guesses_made = [];
	

	
	var computerPick;

	function computerThinks() { 

		computerPick = letters[Math.floor(Math.random()*letters.length)];

		}

	computerThinks();

	console.log(computerPick);

	function update() {
		var html = "<p>Guess what letter I'm thinking of!</p>" + 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guesses_left + "</p>" +
		"<p>Guesses Made: " + guesses_made + "</p>";

		document.querySelector("#game").innerHTML = html;

	}

	function resetGame() {
		guesses_left = 10;
		guesses_made = [];
		computerThinks();
	}

	document.onkeyup = function(event) {

			var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
			
			console.log(playerGuess)

			


			if(playerGuess === computerPick) {
				wins++;
				alert("That's correct!");
				resetGame();

			}else{
				
				if(guesses_made.indexOf(playerGuess) < 0){
					guesses_left -=1;
				guesses_made.push(playerGuess);
				}
				
				
				console.log(guesses_made);
			}


			if (guesses_left === 0) {
				alert("Incorrect.  You lose.  The letter was " + computerPick + ".");
				losses++;
				resetGame();
			}

			