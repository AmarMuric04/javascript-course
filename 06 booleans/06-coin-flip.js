/* Coin Flip - This one is written using the if statements, a little bit more complex and takes longer to type. 

let num = Math.random();
let result = '';
const guess = prompt('');
console.log (num);

if (num < 0.5) {
  result = 'Tails'
}
else if (!num < 0.5) {
  result = 'Heads'
}

if (guess === result) {
  console.log('You Win!')
} else {
  console.log('You lose!')
} 
*/

/* Coin Flip - This one was writted using ternary operators (condition ? A : B) that checks if the condition is true, if it is, it shows A, if not, it shows B. its simpler and takes less time to type.

let num = Math.random();
const guess = prompt('guess');
let computerPicks = num < 0.5 ? 'Tails' : 'Heads';
console.log(computerPicks)
let result = '';
alert(result = computerPicks === guess ? 'You Won!' : 'You Lost');
*/