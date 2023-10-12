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
overallWins();
overallTies();
overallLosses();
overallWinPercentage();
overallTiePercentage();
overallLossPercentage();
checkIfWinsNaN();
checkIfTiesNaN();
checkIfLossesNaN();

function checkIfWinsNaN() {
  if (overallWinPercentage() !== 0 && overallWinPercentage() < 0) {
  } else {
    document.getElementById("winPercentage").textContent = "0 %";
  }
}
function checkIfTiesNaN() {
  if (overallTiePercentage() !== 0 && overallTiePercentage() < 0) {
  } else {
    document.getElementById("tiePercentage").textContent = "0 %";
  }
}
function checkIfLossesNaN() {
  if (overallLossPercentage() !== 0 && overallLossPercentage() < 0) {
  } else {
    document.getElementById("lossPercentage").textContent = "0 %";
  }
}
function playedRock() {
  playerMove = "Rock";
  result = "";
  let pickComputerMove = computerMove();
  if (pickComputerMove === "Rock") {
    result = "Tie";
    clickedRock.ties += 1;
  } else if (pickComputerMove === "Paper") {
    result = "Win";
    clickedRock.wins += 1;
  } else {
    result = "Loss";
    clickedRock.losses += 1;
  }
  localStorage.setItem("playedRock", JSON.stringify(clickedRock));
  rockScore();
  overallWins();
  overallTies();
  overallLosses();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
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
    result = "Win";
    clickedPaper.wins += 1;
  } else if (pickComputerMove === "Paper") {
    result = "Tie";
    clickedPaper.ties += 1;
  } else {
    result = "Losses";
    clickedPaper.losses += 1;
  }
  localStorage.setItem("playedPaper", JSON.stringify(clickedPaper));
  paperScore();
  overallWins();
  overallTies();
  overallLosses();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
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
    result = "Loss";
    clickedScissors.losses += 1;
  } else if (pickComputerMove === "Paper") {
    result = "Win";
    clickedScissors.wins += 1;
  } else {
    result = "Ties";
    clickedScissors.ties += 1;
  }

  localStorage.setItem("playedScissors", JSON.stringify(clickedScissors));
  scissorsScore();
  overallWins();
  overallTies();
  overallLosses();
  overallWinPercentage();
  overallTiePercentage();
  overallLossPercentage();
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
  ).toFixed(0);
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
  ).toFixed(0);
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
  ).toFixed(0);
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
