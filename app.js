const playerOne = {
	score: 0,
	button: document.querySelector(`#playerOneButton`),
	display: document.querySelector(`#playerOneDisplay`),
};

const playerTwo = {
	score: 0,
	button: document.querySelector(`#playerTwoButton`),
	display: document.querySelector(`#playerTwoDisplay`),
};

// Misc. elements for the button to reset the score, as well
// as the selection field to choose a score to play to.
const resetButton = document.querySelector(`#resetButton`);
const winningScoreSelector = document.querySelector(`#scoreSelector`);
let winningScore = 5;
let isGameOver = false;

playerOne.button.addEventListener("click", function () {
	updateScores(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", function () {
	updateScores(playerTwo, playerOne);
});

resetButton.addEventListener("click", reset);

winningScoreSelector.addEventListener("change", function () {
	winningScore = parseInt(this.value);
	reset();
});

function reset() {
	isGameOver = false;
	for (let p of [playerOne, playerTwo]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove(`has-text-success`, `has-text-danger`);
		p.button.disabled = false;
	}
}

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score >= winningScore && player.score - opponent.score >= 2) {
			isGameOver = true;
			player.display.classList.add(`has-text-success`);
			opponent.display.classList.add(`has-text-danger`);
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}
