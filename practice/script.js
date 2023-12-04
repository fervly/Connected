'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// ///////////////////////////////////////
// // Coding Challenge #2

// /* 
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// /* //1.
// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal ${i}: ${name}`);
// };

// //2.

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// //3.

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
// };
// const scores = {};
// for (const player of game.scored) {
//   scores[player] ? scores[player]++ : (scores[player] = 1);
// }

// console.log(scores)

// const example = {};
// example.person = "MEEEEE";

// console.log(example);
// */

// ///////////////////////////////////////
// // Coding Challenge #3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

 
// //Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
// //
// //1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = new Set(gameEvents.values());
// //console.log(events);
// //2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// //console.log(gameEvents);
// //3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const avgEventTime = 90/gameEvents.size;
// console.log(`An event happened, on average, every ${avgEventTime} minutes`);
// //4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //      [FIRST HALF] 17: ⚽️ GOAL
// for (const[time, event] of gameEvents){
//   let half = (time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]");
//   console.log(`${half} ${time}: ${event}`)
// }
// //GOOD LUCK 😀


///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
function capAfterUnderscore(strIn){
  const newTextArray = strIn.split('_');
  if (newTextArray.length <= 1) {
    return strIn
  }
  let newText ='';
  for (const [i,elem] of newTextArray.entries()){
    if (i === 0){
      newText = elem;
    }
    else {
      newText += elem.replace(elem[0],elem[0].toUpperCase());
    }
  }
  return newText
}

document.querySelector('button').addEventListener('click', function() {
  const inputText = document.querySelector('textarea').value;
  const textArray = inputText.toLowerCase().split('\n');
  console.log(textArray);
  for (const [i , inText] of textArray.entries()) {
    let upCaseText = capAfterUnderscore(inText.trim());
    console.log(`${upCaseText.padEnd(20)} ${'✅'.repeat(i+1)}`);
  }
})
