let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.querySelector('#player1Dice');
const player2Dice = document.querySelector('#player2Dice');
const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');
const message = document.querySelector('#message');
const player1Scoreboard = document.querySelector('#player1Scoreboard');
const player2Scoreboard = document.querySelector('#player2Scoreboard');

function showDisplayButton() {
	rollBtn.style.display = 'none';
	resetBtn.style.display = 'block';
}

rollBtn.addEventListener('click', function () {
	const randomNumber = Math.floor(Math.random() * (7 - 1) + 1);

	if (player1Turn) {
		player1Score += randomNumber;
		player1Scoreboard.textContent = player1Score;
		player1Dice.textContent = randomNumber;
		player2Dice.classList.add('active');
		player1Dice.classList.remove('active');
		message.textContent = 'Player 2 Turn';
	} else {
		player2Score += randomNumber;
		player2Scoreboard.textContent = player2Score;
		player2Dice.textContent = randomNumber;
		player1Dice.classList.add('active');
		player2Dice.classList.remove('active');
		message.textContent = 'Player 1 Turn';
	}
	player1Turn = !player1Turn;
	if (player1Score >= 20) {
		message.textContent = 'Player 1 has Won!';
		showDisplayButton();
	} else if (player2Score >= 20) {
		message.textContent = 'Player 2 has Won!';
		showDisplayButton();
	}
});

resetBtn.addEventListener('click', function () {
	reset();
});

function reset() {
	player1Score = 0;
	player2Score = 0;
	player1Turn = true;
	rollBtn.style.display = 'block';
	resetBtn.style.display = 'none';
	player1Scoreboard.textContent = 0;
	player2Scoreboard.textContent = 0;
	player1Dice.textContent = '-';
	player2Dice.textContent = '-';
	player1Dice.classList.add('active');
	player2Dice.classList.remove('active');
	message.textContent = 'Player 1 Turn';
}
