'use strict';

// Selecting Usefull elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('player--1');
let dice = 1;


const resetGame = function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  // diceEl.classList.add('hidden');
  curScore0El.textContent = 0;
  curScore1El.textContent = 0;
}

const rollDi = function(){
  dice = Math.trunc(Math.random()*6)+1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

}

/* const changePlayer = function(){
  if (player0El.classList === 'player--active'){

  }
}
 */
resetGame();

btnRoll.addEventListener('click', rollDi);
