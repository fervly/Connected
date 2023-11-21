'use strict';

// Selecting Usefull elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');

const resetGame = function(){
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  curScore0El.textContent = 0;
  curScore1El.textContent = 0;
}

const rollDi = function(){
  
}

resetGame()