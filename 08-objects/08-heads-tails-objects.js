/*2.0
Updated heads and tails, added a score, a winrate and a localStorage so that the score never gets lost, unless you decide to Reset it*/

let score = JSON.parse(localStorage.getItem("score"));

let Heads = "Heads";
let Tails = "Tails";

function youPlay(move) {
  let num = Math.random();
  let result = "";
  whatItIs = "";
  if (num < 0.5) {
    whatItIs = "Heads";
  } else {
    whatItIs = "Tails";
  }
  if (move === whatItIs) {
    result = "Won";
    score.wins += 1;
  } else {
    result = "Lost \nBetter luck next time!";
    score.losses += 1;
  }
  alert(
    `You ${result}\nYou picked ${move} and It was ${whatItIs}! \nScore is: Wins ${
      score.wins
    } (${((score.wins / (score.wins + score.losses)) * 100).toFixed(
      0
    )}%), Losses ${score.losses} (${(
      (score.losses / (score.wins + score.losses)) *
      100
    ).toFixed(0)}%).`
  );
  localStorage.setItem("score", JSON.stringify(score));
}
function resetScore() {
  score = {
    wins: 0,
    losses: 0,
  };
  alert(`Score has been reset!`);
}
