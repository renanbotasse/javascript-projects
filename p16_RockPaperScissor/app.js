let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("uScore");
const computerScore_span = document.getElementById("cScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

function getFullWord(letter) {
    if (letter === "r") return "Axe";
    if (letter === "p") return "Lance";
    return "Sword";
}

function getWinAction(letter) {
    if (letter === "r") return " bets ";
    if (letter === "p") return " bets ";
    return " bets ";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = getFullWord(userChoice) + getWinAction(userChoice) + getFullWord(computerChoice) + ". You win!";
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = getFullWord(computerChoice) + getWinAction(computerChoice) + getFullWord(userChoice) + ". You lose!";
}
function draw(userChoice, computerChoice) {
    result_div.innerHTML = getFullWord(computerChoice) + " and " + getFullWord(userChoice) + ". It's a draw!";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

rock_div.addEventListener('click', function () {
    game("r");
});

paper_div.addEventListener('click', function () {
    game("p");
});

scissors_div.addEventListener('click', function () {
    game("s");
});