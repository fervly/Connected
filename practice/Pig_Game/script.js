'use strict';

// Selecting Usefull elements
//const score0El = document.getElementById('score--0');
//const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
//const curScore0El = document.getElementById('current--0');
//const curScore1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//const player0El = document.querySelector('player--0');
//const player1El = document.querySelector('player--1');
const winningScore = 100;
const curScoreEl = [document.getElementById('current--0'),document.getElementById('current--1')];
const playerEl = [document.querySelector('.player--0'),document.querySelector('.player--1')];
const scoreEl = [document.getElementById('score--0'),document.getElementById('score--1')];
let dice = 1;
let currentPlayer = 0;
let currentScore = 0;
let score = [0,0];


const resetGame = function(){
  score = [0,0];
  currentPlayer = 0;
  currentScore = 0;
  scoreEl[0].textContent = score[0];
  scoreEl[1].textContent = score[1];
  diceEl.classList.add('hidden');
  curScoreEl[0].textContent = currentScore;
  curScoreEl[1].textContent = currentScore;
  playerEl[0].classList.add('player--active');
  playerEl[1].classList.remove('player--active');
  playerEl[0].classList.remove('player--winner');
  playerEl[1].classList.remove('player--winner');
}

const rollDi = function(){
  dice = Math.trunc(Math.random()*6)+1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  if (dice !== 1){
    currentScore += dice;
    updCurScore(currentPlayer,currentScore);
  }
  else {
    currentScore = 0;
    updCurScore(currentPlayer,currentScore);
    changePlayer();
  }
}

const updCurScore = function(player,newscore){
  curScoreEl[player].textContent = newscore;
}
const updScore = function(player,newscore){
  scoreEl[player].textContent = newscore;
}

const holdScore = function(){
  score[currentPlayer] += currentScore;
  updScore(currentPlayer,score[currentPlayer]);
  
  if (score[currentPlayer] >= winningScore) {
    winner(currentPlayer);
  }
  else {
    currentScore = 0;
    changePlayer();
  }
}

const changePlayer = function(){
  updCurScore(currentPlayer,0);  
  playerEl[0].classList.toggle('player--active');
  playerEl[1].classList.toggle('player--active');
  if (currentPlayer === 0){
    currentPlayer = 1;
  }
  else {
    currentPlayer = 0;
  }
}

const winner = function(winningPlayer) {
  playerEl[winningPlayer].classList.add('player--winner');
  playerEl[winningPlayer].classList.remove('player--active');
}

resetGame();

btnRoll.addEventListener('click', rollDi);
btnNew.addEventListener('click', resetGame);
btnHold.addEventListener('click',holdScore);

