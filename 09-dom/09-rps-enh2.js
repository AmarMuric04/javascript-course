let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

document.getElementById("winPercentage").textContent = `${winPercentage()} %`;
document.getElementById("tiePercentage").textContent = `${tiePercentage()} %`;
document.getElementById("lossPercentage").textContent = `${lossPercentage()} %`;

score.wins === 0
  ? (document.getElementById("winPercentage").textContent = `${score.wins} %`)
  : NaN;
score.ties === 0
  ? (document.getElementById("tiePercentage").textContent = `${score.ties} %`)
  : NaN;
score.losses === 0
  ? (document.getElementById(
      "lossPercentage"
    ).textContent = `${score.losses} %`)
  : NaN;

document.getElementById("wins").textContent = score.wins;
document.getElementById("ties").textContent = score.ties;
document.getElementById("losses").textContent = score.losses;

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
  document.getElementById("wins").textContent = score.wins;
  document.getElementById("ties").textContent = score.ties;
  document.getElementById("losses").textContent = score.losses;
  document.getElementById("winPercentage").textContent = `${winPercentage()} %`;
  document.getElementById("tiePercentage").textContent = `${tiePercentage()} %`;
  document.getElementById(
    "lossPercentage"
  ).textContent = `${lossPercentage()} %`;
  localStorage.setItem("score", JSON.stringify(score));
  document.getElementById("result").textContent = `you ${result}`;
  document.getElementById("youPlayed").textContent = `You played ${playerMove}`;
  document.getElementById(
    "compPlayed"
  ).textContent = `Computer played ${computerMove}`;
}
function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem("score");
  document.getElementById("result").textContent = `Score was reset!`;
  document.getElementById("wins").textContent = score.wins;
  document.getElementById("ties").textContent = score.ties;
  document.getElementById("losses").textContent = score.losses;
  document.getElementById("winPercentage").textContent = "0 %";
  document.getElementById("tiePercentage").textContent = "0 %";
  document.getElementById("lossPercentage").textContent = "0 %";
  document.getElementById("youPlayed").textContent = ``;
  document.getElementById("compPlayed").textContent = ``;
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
