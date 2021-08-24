// Button elements to increment score for each repsective player.
const playerOneButton = document.querySelector(`#playerOneButton`);
const playerTwoButton = document.querySelector(`#playerTwoButton`);

// Spans containing the current score for each respective player.
const playerOneScore = document.querySelector(`#playerOneScore`);
const playerTwoScore = document.querySelector(`#playerTwoScore`);

// Misc. elements for the button to reset the score, as well
// as the selection field to choose a score to play to.
const resetButton = document.querySelector(`#resetButton`);
const scoreSelector = document.querySelector(`#scoreSelector`);

playerOneButton.addEventListener(`click`, () => {
	let score = parseInt(playerOneScore.textContent) + 1;
	if (score <= scoreSelector.value) {
		playerOneScore.textContent = `${score}`;
	}
	if (score == scoreSelector.value) {
		playerOneScore.classList.add(`has-text-success`);
		playerTwoScore.classList.add(`has-text-danger`);
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
	}
});

playerTwoButton.addEventListener(`click`, () => {
	let score = parseInt(playerTwoScore.textContent) + 1;
	if (score <= scoreSelector.value) {
		playerTwoScore.textContent = `${score}`;
	}
	if (score == scoreSelector.value) {
		playerOneScore.classList.add(`has-text-danger`);
		playerTwoScore.classList.add(`has-text-success`);
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
	}
});

resetButton.addEventListener(`click`, reset);

scoreSelector.addEventListener(`change`, () => {
	reset();
});

function reset() {
	playerOneScore.textContent = 0;
	playerTwoScore.textContent = 0;
	playerOneScore.classList.remove(`has-text-danger`, `has-text-success`);
	playerTwoScore.classList.remove(`has-text-danger`, `has-text-success`);
	playerTwoButton.disabled = false;
	playerOneButton.disabled = false;
}
