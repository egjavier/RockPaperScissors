const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const computerMove = document.getElementById('computerMove');
const result = document.getElementById('result');
const updatedScore = document.getElementById('score');
let randomNumber;
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0 
}
updatedScore.innerHTML = `Wins: ${score.wins} ; Losses: ${score.losses} ; Ties: ${score.ties}` ||
  `Wins: 0 ; Losses: 0 ; Ties: 0`;


console.log(JSON.parse(localStorage.getItem('score')))

move(rock, `It\'s a tie.`, 'You lose.', 'You win.');
move(paper, 'You win.', `It\'s a tie.`, 'You lose.');
move(scissors, 'You lose.', 'You win.', `It\'s a tie.`);


function move(playerMove, gameResult0, gameResult1, gameResult2){
  playerMove.onclick = function() {
    randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
      computerMove.src = `./images/rock-emoji.png`;
      result.innerHTML = `${gameResult0}`;
    }
    else if (randomNumber === 1) {
      computerMove.src = `images/paper-emoji.png`;
      result.innerHTML = `${gameResult1}`;
    }
    else {
      computerMove.src = `./images/scissors-emoji.png`;
      result.innerHTML = `${gameResult2}`;
    }

    if (result.innerHTML === 'You win.') {
      score.wins += 1;
      updatedScore.innerHTML = `Wins: ${score.wins} ; Losses: ${score.losses} ; Ties: ${score.ties}`;
    }
    else if(result.innerHTML === 'You lose.') {
      score.losses += 1;
      updatedScore.innerHTML = `Wins: ${score.wins} ; Losses: ${score.losses} ; Ties: ${score.ties}`;
    }
    else {
      score.ties += 1;
      updatedScore.innerHTML = `Wins: ${score.wins} ; Losses: ${score.losses} ; Ties: ${score.ties}`;
    }
    localStorage.setItem('score', JSON.stringify(score));
  }
}

document.getElementById('resetBtn').onclick = function() {
  localStorage.removeItem('score');
  score = {
    wins: 0,
    losses: 0,
    ties: 0 
  }
  updatedScore.innerHTML = `Wins: 0 ; Losses: 0 ; Ties: 0`;
  computerMove.src = ' ';
  result.innerHTML = 'Who win?';
}


