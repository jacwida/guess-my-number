'use strict';

let number,
  score,
  highscore = 0;

function rest() {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').disabled = false;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;

  console.log(highscore);
}

rest();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   document.querySelector('.guess').value = '';

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number...Input one';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Guess Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⚡ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Guess Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '⚡ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', rest);
