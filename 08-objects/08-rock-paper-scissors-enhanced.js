/*Local storage is used to store things inside of it so that when u refresh a page the contents arent lost, for example the score of this game, syntax for it is as follows 

To put things inside a localStorage => localStorage.setItem(<name>, <contents); it only accepts strings, if u want to put something in it thats not a string you need to turn it into a string, for example: JSON.stringify(<content>).

To get things out of a localStorage => localStorage.getItem(<name>, <content>), if you dont want your content to be a string, you can turn it into whatever it was before, using: JSON.parse(<content>); */

/*3.0
There was actually a bug where if u Reset score and then refresh the page, the score doesnt get reset. Fixed!*/
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

console.log(score);

function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    computerMove = "Rock";
  } else if (randomNumber === 1) {
    computerMove = "Paper";
  } else if (randomNumber === 2) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "Won.";
    } else if (computerMove === "Paper") {
      result = "Tied.";
    } else if (computerMove === "Scissors") {
      result = "Lost.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tied.";
    } else if (computerMove === "Paper") {
      result = "Lost.";
    } else if (computerMove === "Scissors") {
      result = "Won.";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Lost.";
    } else if (computerMove === "Paper") {
      result = "Won.";
    } else if (computerMove === "Scissors") {
      result = "Tied.";
    }
  }
  if (result === "Won.") {
    score.wins += 1;
  } else if (result === "Tied.") {
    score.ties += 1;
  } else if (result === "Lost.") {
    score.losses += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  alert(
    `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}\nWins: ${
      score.wins
    }, Ties: ${score.ties}, Losses: ${
      score.losses
    },\n W/T/L ratio: ${winPercentage()}%/${tiePercentage()}%/${lossPercentage()}% `
  );
}
function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem("score");
  alert(
    `Score has been reset.\nWins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}\nW/T/L ratio: 0%/0%/0%`
  );
}
function winPercentage() {
  const winPercentage = (
    (score.wins / (score.wins + score.ties + score.losses)) *
    100
  ).toFixed(0);
  return winPercentage;
}
function tiePercentage() {
  const tiePercentage = (
    (score.ties / (score.wins + score.ties + score.losses)) *
    100
  ).toFixed(0);
  return tiePercentage;
}
function lossPercentage() {
  const lossPercentage = (
    (score.losses / (score.wins + score.ties + score.losses)) *
    100
  ).toFixed(0);
  return lossPercentage;
}
