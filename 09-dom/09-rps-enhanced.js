let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
console.log(score);
document.getElementById("winPercentage") !== NaN
  ? (document.getElementById(
      "winPercentage"
    ).innerHTML = `${winPercentage()} %`)
  : "kurac";
document.getElementById("tiePercentage") !== NaN
  ? (document.getElementById(
      "tiePercentage"
    ).innerHTML = `${tiePercentage()} %`)
  : "kurac";
document.getElementById("tiePercentage") !== NaN
  ? (document.getElementById(
      "lossPercentage"
    ).innerHTML = `${lossPercentage()} %`)
  : NaN;

document.getElementById("wins").innerHTML = score.wins;
document.getElementById("ties").innerHTML = score.ties;
document.getElementById("losses").innerHTML = score.losses;

function pickComputerMove() {
  const randomNumber = Math.floor(Math.random() * 3);

  let computerMove = "";

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
  document.getElementById("wins").innerHTML = score.wins;
  document.getElementById("ties").innerHTML = score.ties;
  document.getElementById("losses").innerHTML = score.losses;
  document.getElementById("winPercentage").innerHTML = `${winPercentage()} %`;
  document.getElementById("tiePercentage").innerHTML = `${tiePercentage()} %`;
  document.getElementById("lossPercentage").innerHTML = `${lossPercentage()} %`;
  localStorage.setItem("score", JSON.stringify(score));
  document.getElementById("result").innerHTML = `you ${result}`;
  document.getElementById("youPlayed").innerHTML = `You played ${playerMove}`;
  document.getElementById(
    "compPlayed"
  ).innerHTML = `Computer played ${computerMove}`;
}
function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem("score");
  document.getElementById("result").innerHTML = `Score was reset!`;
  document.getElementById("wins").innerHTML = score.wins;
  document.getElementById("ties").innerHTML = score.ties;
  document.getElementById("losses").innerHTML = score.losses;
  document.getElementById("winPercentage").innerHTML = "0 %";
  document.getElementById("tiePercentage").innerHTML = "0 %";
  document.getElementById("lossPercentage").innerHTML = "0 %";
  document.getElementById("youPlayed").innerHTML = ``;
  document.getElementById("compPlayed").innerHTML = ``;
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
