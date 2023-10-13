let clickedRock = JSON.parse(localStorage.getItem("playedRock")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
let clickedPaper = JSON.parse(localStorage.getItem("playedPaper")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
let clickedScissors = JSON.parse(localStorage.getItem("playedScissors")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

paperScore();
rockScore();
scissorsScore();
overallWinPercentage();
overallTiePercentage();
overallLossPercentage();
checkIfWinsNaN();
checkIfTiesNaN();
checkIfLossesNaN();
checkWin();
checkTies();
checkLoss();
checkWinPaper();
checkTiesPaper();
checkLossPaper();
checkWinScissors();
checkTiesScissors();
checkLossScissors();

function checkIfWinsNaN() {
  let overallPercentageWins = overallWinPercentage();
  if (overallPercentageWins !== 0 && overallPercentageWins < 0) {
  } else if (overallPercentageWins > 0) {
    document.getElementById(
      "winPercentage"
    ).textContent = `${overallWinPercentage()} %`;
  } else {
    document.getElementById("winPercentage").textContent = "0.0 %";
  }
}
function checkIfTiesNaN() {
  let overallPercentageTies = overallTiePercentage();
  if (overallPercentageTies !== 0 && overallPercentageTies < 0) {
  } else if (overallPercentageTies > 0) {
    document.getElementById(
      "tiePercentage"
    ).textContent = `${overallTiePercentage()} %`;
  } else {
    document.getElementById("tiePercentage").textContent = `0.0 %`;
  }
}
function checkIfLossesNaN() {
  let overallPercentageLosses = overallLossPercentage();
  if (overallPercentageLosses !== 0 && overallPercentageLosses < 0) {
  } else if (overallPercentageLosses > 0) {
    document.getElementById(
      "lossPercentage"
    ).textContent = `${overallLossPercentage()} %`;
  } else {
    document.getElementById("lossPercentage").textContent = "0.0 %";
  }
}
function checkWin() {
  let rockWinPerc = rockWinPercentage();
  if (rockWinPerc !== 0 && rockWinPerc < 0) {
  } else if (rockWinPerc > 0) {
    document.getElementById(
      "rockWinPercentage"
    ).textContent = `${rockWinPercentage()} %`;
  } else {
    document.getElementById("rockWinPercentage").textContent = "0.0 %";
  }
}
function checkTies() {
  let rockTiePerc = rockTiePercentage();
  if (rockTiePerc !== 0 && rockTiePerc < 0) {
  } else if (rockTiePerc > 0) {
    document.getElementById(
      "rockTiesPercentage"
    ).textContent = `${rockTiePercentage()} %`;
  } else {
    document.getElementById("rockTiesPercentage").textContent = "0.0 %";
  }
}
function checkLoss() {
  let rockLossPerc = rockLossPercentage();
  if (rockLossPerc !== 0 && rockLossPerc < 0) {
  } else if (rockLossPerc > 0) {
    document.getElementById(
      "rockLossPercentage"
    ).textContent = `${rockLossPercentage()} %`;
  } else {
    document.getElementById("rockLossPercentage").textContent = "0.0 %";
  }
}
function checkWinPaper() {
  let paperWinPerc = paperWinPercentage();
  if (paperWinPerc !== 0 && paperWinPerc < 0) {
  } else if (paperWinPerc > 0) {
    document.getElementById(
      "paperWinPercentage"
    ).textContent = `${paperWinPercentage()} %`;
  } else {
    document.getElementById("paperWinPercentage").textContent = "0.0 %";
  }
}
function checkTiesPaper() {
  let paperTiePerc = paperTiesPercentage();
  if (paperTiePerc !== 0 && paperTiePerc < 0) {
  } else if (paperTiePerc > 0) {
    document.getElementById(
      "paperTiesPercentage"
    ).textContent = `${paperTiesPercentage()} %`;
  } else {
    document.getElementById("paperTiesPercentage").textContent = "0.0 %";
  }
}
function checkLossPaper() {
  let paperLossPerc = paperLossPercentage();
  if (paperLossPerc !== 0 && paperLossPerc < 0) {
  } else if (paperLossPerc > 0) {
    document.getElementById(
      "paperLossPercentage"
    ).textContent = `${paperLossPercentage()} %`;
  } else {
    document.getElementById("paperLossPercentage").textContent = "0.0 %";
  }
}
function checkWinScissors() {
  let scissorWinPerc = scissorWinPercentage();
  if (scissorWinPerc !== 0 && scissorWinPerc < 0) {
  } else if (scissorWinPerc > 0) {
    document.getElementById(
      "scissorsWinPercentage"
    ).textContent = `${scissorWinPercentage()} %`;
  } else {
    document.getElementById("scissorsWinPercentage").textContent = "0.0 %";
  }
}
function checkTiesScissors() {
  let scissorTiesPerc = scissorTiesPercentage();
  if (scissorTiesPerc !== 0 && scissorTiesPerc < 0) {
  } else if (scissorTiesPerc > 0) {
    document.getElementById(
      "scissorsTiesPercentage"
    ).textContent = `${scissorWinPercentage()} %`;
  } else {
    document.getElementById("scissorsTiesPercentage").textContent = "0.0 %";
  }
}
function checkLossScissors() {
  let scissorLossPerc = scissorLossPercentage();
  if (scissorLossPerc !== 0 && scissorLossPerc < 0) {
  } else if (scissorLossPerc > 0) {
    document.getElementById(
      "scissorsLossPercentage"
    ).textContent = `${scissorTiesPercentage()} %`;
  } else {
    document.getElementById("scissorsLossPercentage").textContent = "0.0 %";
  }
}
function playedRock() {
  playerMove = "Rock";
  result = "";
  let pickComputerMove = computerMove();
  if (pickComputerMove === "Rock") {
    result = "Tied";
    clickedRock.ties += 1;
  } else if (pickComputerMove === "Paper") {
    result = "Lost";
    clickedRock.wins += 1;
  } else {
    result = "Won";
    clickedRock.losses += 1;
  }
  let mainWins = overallWins();
  mainWins >= 100
    ? (document.getElementById("wins").style.width = "7vh")
    : (document.getElementById("wins").style.width = "5vh");
  let mainTies = overallTies();
  mainTies >= 100
    ? (document.getElementById("ties").style.width = "7vh")
    : (document.getElementById("ties").style.width = "5vh");
  let mainLosses = overallLosses();
  mainLosses >= 100
    ? (document.getElementById("losses").style.width = "7vh")
    : (document.getElementById("losses").style.width = "5vh");

  localStorage.setItem("playedRock", JSON.stringify(clickedRock));
  // changeColor();
  rockScore();
  overallWins();
  overallTies();
  overallLosses();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
  rockWinPercentage();
  rockLossPercentage();
  rockTiePercentage();
  document.getElementById("result").textContent = `you ${result}`;
  document.getElementById("youPlayed").textContent = `You played ${playerMove}`;
  document.getElementById(
    "compPlayed"
  ).textContent = `Computer played ${computerMove()}`;
}

function playedPaper() {
  playerMove = "Paper";
  result = "";
  let pickComputerMove = computerMove();
  if (pickComputerMove === "Rock") {
    result = "Won";
    clickedPaper.wins += 1;
  } else if (pickComputerMove === "Paper") {
    result = "Tied";
    clickedPaper.ties += 1;
  } else {
    result = "Lost";
    clickedPaper.losses += 1;
  }
  let mainWins = overallWins();
  mainWins >= 100
    ? (document.getElementById("wins").style.width = "7vh")
    : (document.getElementById("wins").style.width = "5vh");
  let mainTies = overallTies();
  mainTies >= 100
    ? (document.getElementById("ties").style.width = "7vh")
    : (document.getElementById("ties").style.width = "5vh");
  let mainLosses = overallLosses();
  mainLosses >= 100
    ? (document.getElementById("losses").style.width = "7vh")
    : (document.getElementById("losses").style.width = "5vh");

  localStorage.setItem("playedPaper", JSON.stringify(clickedPaper));
  // changeColor();
  paperScore();
  overallWins();
  overallTies();
  overallLosses();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
  paperWinPercentage();
  paperLossPercentage();
  paperTiesPercentage();
  document.getElementById("result").textContent = `you ${result}`;
  document.getElementById("youPlayed").textContent = `You played ${playerMove}`;
  document.getElementById(
    "compPlayed"
  ).textContent = `Computer played ${computerMove()}`;
}

function playedScissors() {
  playerMove = "Scissors";
  result = "";
  let pickComputerMove = computerMove();
  if (pickComputerMove === "Rock") {
    result = "Lost";
    clickedScissors.losses += 1;
  } else if (pickComputerMove === "Paper") {
    result = "Won";
    clickedScissors.wins += 1;
  } else {
    result = "Tied";
    clickedScissors.ties += 1;
  }
  let mainWins = overallWins();
  mainWins >= 100
    ? (document.getElementById("wins").style.width = "7vh")
    : (document.getElementById("wins").style.width = "5vh");
  let mainTies = overallTies();
  mainTies >= 100
    ? (document.getElementById("ties").style.width = "7vh")
    : (document.getElementById("ties").style.width = "5vh");
  let mainLosses = overallLosses();
  mainLosses >= 100
    ? (document.getElementById("losses").style.width = "7vh")
    : (document.getElementById("losses").style.width = "5vh");

  localStorage.setItem("playedScissors", JSON.stringify(clickedScissors));
  // changeColor();
  scissorsScore();
  overallWins();
  overallTies();
  overallLosses();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
  scissorTiesPercentage();
  scissorWinPercentage();
  scissorLossPercentage();
  document.getElementById("result").textContent = `you ${result}`;
  document.getElementById("youPlayed").textContent = `You played ${playerMove}`;
  document.getElementById(
    "compPlayed"
  ).textContent = `Computer played ${computerMove()}`;
}

function computerMove() {
  let pickComputerMove = Math.floor(Math.random() * 3);

  if (pickComputerMove === 0) {
    pickComputerMove = "Rock";
  } else if (pickComputerMove === 1) {
    pickComputerMove = "Paper";
  } else {
    pickComputerMove = "Scissors";
  }
  return pickComputerMove;
}

function rockScore() {
  document.getElementById("rockWins").textContent = `${clickedRock.wins}`;
  document.getElementById("rockTies").textContent = `${clickedRock.ties}`;
  document.getElementById("rockLosses").textContent = `${clickedRock.losses}`;
}
function paperScore() {
  document.getElementById("paperWins").textContent = `${clickedPaper.wins}`;
  document.getElementById("paperTies").textContent = `${clickedPaper.ties}`;
  document.getElementById("paperLosses").textContent = `${clickedPaper.losses}`;
}
function scissorsScore() {
  document.getElementById(
    "scissorsWins"
  ).textContent = `${clickedScissors.wins}`;
  document.getElementById(
    "scissorsTies"
  ).textContent = `${clickedScissors.ties}`;
  document.getElementById(
    "scissorsLosses"
  ).textContent = `${clickedScissors.losses}`;
}

function rockWinPercentage() {
  let rockWinPerc = 0;
  rockWinPerc = (
    (clickedRock.wins /
      (clickedRock.wins + clickedRock.losses + clickedRock.ties)) *
    100
  ).toFixed(1);
  document.getElementById("rockWinPercentage").textContent = `${rockWinPerc} %`;
  return rockWinPerc;
}
function rockTiePercentage() {
  let rockTiePerc = 0;
  rockTiePerc = (
    (clickedRock.ties /
      (clickedRock.wins + clickedRock.losses + clickedRock.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "rockTiesPercentage"
  ).textContent = `${rockTiePerc} %`;
  return rockTiePerc;
}
function rockLossPercentage() {
  let rockLossPerc = 0;
  rockLossPerc = (
    (clickedRock.losses /
      (clickedRock.wins + clickedRock.losses + clickedRock.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "rockLossPercentage"
  ).textContent = `${rockLossPerc} %`;
  return rockLossPerc;
}

function paperWinPercentage() {
  let paperWinPerc = 0;
  paperWinPerc = (
    (clickedPaper.wins /
      (clickedPaper.wins + clickedPaper.losses + clickedPaper.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "paperWinPercentage"
  ).textContent = `${paperWinPerc} %`;
  return paperWinPerc;
}
function paperLossPercentage() {
  let paperLossPerc = 0;
  paperLossPerc = (
    (clickedPaper.losses /
      (clickedPaper.wins + clickedPaper.losses + clickedPaper.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "paperLossPercentage"
  ).textContent = `${paperLossPerc} %`;
  return paperLossPerc;
}
function paperTiesPercentage() {
  let paperTiePerc = 0;
  paperTiePerc = (
    (clickedPaper.ties /
      (clickedPaper.wins + clickedPaper.losses + clickedPaper.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "paperTiesPercentage"
  ).textContent = `${paperTiePerc} %`;
  return paperTiePerc;
}

function scissorWinPercentage() {
  let scissorWinPerc = 0;
  scissorWinPerc = (
    (clickedScissors.wins /
      (clickedScissors.wins + clickedScissors.losses + clickedScissors.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "scissorsWinPercentage"
  ).textContent = `${scissorWinPerc} %`;
  return scissorWinPerc;
}
function scissorTiesPercentage() {
  let scissorTiesPerc = 0;
  scissorTiesPerc = (
    (clickedScissors.ties /
      (clickedScissors.wins + clickedScissors.losses + clickedScissors.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "scissorsTiesPercentage"
  ).textContent = `${scissorTiesPerc} %`;
  return scissorTiesPerc;
}
function scissorLossPercentage() {
  let scissorLossPerc = 0;
  scissorLossPerc = (
    (clickedScissors.losses /
      (clickedScissors.wins + clickedScissors.losses + clickedScissors.ties)) *
    100
  ).toFixed(1);
  document.getElementById(
    "scissorsLossPercentage"
  ).textContent = `${scissorLossPerc} %`;
  return scissorLossPerc;
}

function overallWins() {
  let mainWins = (document.getElementById("wins").textContent = `${
    clickedRock.wins + clickedPaper.wins + clickedScissors.wins
  }`);
  return mainWins;
}
function overallTies() {
  let mainTies = (document.getElementById("ties").textContent = `${
    clickedRock.ties + clickedPaper.ties + clickedScissors.ties
  }`);
  return mainTies;
}
function overallLosses() {
  let mainLosses = (document.getElementById("losses").textContent = `${
    clickedRock.losses + clickedPaper.losses + clickedScissors.losses
  }`);
  return mainLosses;
}

function overallWinPercentage() {
  let mainWins = +overallWins();
  let mainLosses = +overallLosses();
  let mainTies = +overallTies();

  let overallPercentageWins = 0;

  overallPercentageWins = (
    (mainWins / (mainWins + mainTies + mainLosses)) *
    100
  ).toFixed(1);
  document.getElementById(
    "winPercentage"
  ).textContent = `${overallPercentageWins} %`;
  return overallPercentageWins;
}

function overallLossPercentage() {
  let mainWins = +overallWins();
  let mainLosses = +overallLosses();
  let mainTies = +overallTies();

  let overallPercentageLosses = 0;

  overallPercentageLosses = (
    (mainLosses / (mainWins + mainTies + mainLosses)) *
    100
  ).toFixed(1);
  document.getElementById(
    "lossPercentage"
  ).textContent = `${overallPercentageLosses} %`;
  return overallPercentageLosses;
}

function overallTiePercentage() {
  let mainWins = +overallWins();
  let mainLosses = +overallLosses();
  let mainTies = +overallTies();

  let overallPercentageTies = 0;

  overallPercentageTies = (
    (mainTies / (mainWins + mainTies + mainLosses)) *
    100
  ).toFixed(1);
  document.getElementById(
    "tiePercentage"
  ).textContent = `${overallPercentageTies} %`;
  return overallPercentageTies;
}

function resetScore() {
  clickedPaper = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  clickedRock = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  clickedScissors = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  paperScore();
  rockScore();
  scissorsScore();
  overallWinPercentage();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
  checkIfWinsNaN();
  checkIfTiesNaN();
  checkIfLossesNaN();
  rockWinPercentage();
  rockLossPercentage();
  rockTiePercentage();
  paperWinPercentage();
  paperLossPercentage();
  paperTiesPercentage();
  scissorTiesPercentage();
  scissorWinPercentage();
  scissorLossPercentage();
  checkWin();
  checkTies();
  checkLoss();
  checkWinPaper();
  checkTiesPaper();
  checkLossPaper();
  checkWinScissors();
  checkTiesScissors();
  checkLossScissors();

  document.getElementById("wins").style.width = "5vh";
  document.getElementById("losses").style.width = "5vh";
  document.getElementById("ties").style.width = "5vh";
  localStorage.removeItem("playedRock");
  localStorage.removeItem("playedPaper");
  localStorage.removeItem("playedScissors");
  document.getElementById("result").textContent = `Score was reset!`;
  document.getElementById("wins").textContent = overallWins();
  document.getElementById("ties").textContent = overallTies();
  document.getElementById("losses").textContent = overallLosses();
  document.getElementById("youPlayed").textContent = ``;
  document.getElementById("compPlayed").textContent = ``;
}
// function changeColor() {
//   if (result === "Won") {
//     document.getElementById("resultWrapper").style.backgroundColor = "green";
//   } else if (result === "Lost") {
//     document.getElementById("resultWrapper").style.backgroundColor = "red";
//   } else {
//     document.getElementById("resultWrapper").style.backgroundColor = "orange";
//   }
// }

let mainWins = overallWins();
mainWins >= 100
  ? (document.getElementById("wins").style.width = "7vh")
  : (document.getElementById("wins").style.width = "5vh");
let mainTies = overallTies();
mainTies >= 100
  ? (document.getElementById("ties").style.width = "7vh")
  : (document.getElementById("ties").style.width = "5vh");
let mainLosses = overallLosses();
mainLosses >= 100
  ? (document.getElementById("losses").style.width = "7vh")
  : (document.getElementById("losses").style.width = "5vh");
