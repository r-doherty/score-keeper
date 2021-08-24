// Button elements to increment score for each repsective player.
const playerOneButton = document.querySelector(`#playerOneButton`);
const playerTwoButton = document.querySelector(`#playerTwoButton`);

// Spans containing the current score for each respective player.
const playerOneScore = document.querySelector(`#playerOneScore`);
const playerTwoScore = document.querySelector(`#playerTwoScore`);

// Misc. elements for the button to reset the score, as well
// as the selection field to choose a score to play to.
const resetButton = document.querySelector(`#resetButton`);
const scoreToWin = document.querySelector(`#scoreSelector`);

playerOneButton.addEventListener(`click`, () => {
	let score = parseFloat(playerOneScore.innerHTML) + 1;
	if (score <= scoreToWin.value) {
		playerOneScore.innerHTML = `${score}`;
	}
	if (score == scoreToWin.value) {
		playerOneScore.style.color = "green";
		playerTwoScore.style.color = "red";
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
		scoreToWin.disabled = true;
	}
});

playerTwoButton.addEventListener(`click`, () => {
	let score = parseFloat(playerTwoScore.innerHTML) + 1;
	if (score <= scoreToWin.value) {
		playerTwoScore.innerHTML = `${score}`;
	}
	if (score == scoreToWin.value) {
		playerOneScore.style.color = "red";
		playerTwoScore.style.color = "green";
		playerOneButton.disabled = true;
		playerTwoButton.disabled = true;
		scoreToWin.disabled = true;
	}
});

resetButton.addEventListener(`click`, () => {
	playerOneScore.innerHTML = 0;
	playerTwoScore.innerHTML = 0;
	playerOneScore.style.color = "black";
	playerTwoScore.style.color = "black";
	playerTwoButton.disabled = false;
	playerOneButton.disabled = false;
	scoreToWin.disabled = false;
});
