const userScore = 0;
const computerScore = 0;
const userScorespan = document.getElementById("u-Score");
const computerScoreSpan = document.getElementById('c-Score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}


function game (userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			console.log("USER WINS.");
			break;
		case "rp":
		case "ps":
		case "sr":
			console.log("USER LOSES.");
			break;
		case "rr":
		case "pp":
		case "ss":
			console.log("ITS A DRAW.");
			break;
	}
}


function main() {
	rockDiv.addEventListener('click', function() {
		game('r');
	})
	paperDiv.addEventListener('click', function() {
		game('p');
	})
	scissorsDiv.addEventListener('click', function() {
		game('s');
	})
}
rockDiv.addEventListener('click', function() {
	console.log("Axe, Good Weapon");
})

main()

