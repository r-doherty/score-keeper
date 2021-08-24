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
const scoreSelector = document.querySelector(`#scoreselector`);
let winningScore = 5;
let isGameOver = false;

playerOne.button.addEventListener("click", () => {
	updateScores(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", () => {
	updateScores(playerTwo, playerOne);
});

resetButton.addEventListener("click", reset);

scoreSelector.addEventListener("change", function () {
	winningScore = parseInt(this.value);
	reset();
});

function reset() {
	isGameOver = false;
	for (let player of [playerOne, playerTwo]) {
		player.score = 0;
		player.display.textContent = 0;
		player.display.classList.remove(`has-text-success`, `has-text-danger`);
		player.button.disabled = false;
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
