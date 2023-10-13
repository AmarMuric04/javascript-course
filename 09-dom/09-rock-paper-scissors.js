const score = {
  wins: 0,
  ties: 0,
  losses: 0,
};
document.querySelector(
  "#js-score"
).textContent = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
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
  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      score.wins += 1;
      result = "Won.";
    } else if (computerMove === "Paper") {
      score.ties += 1;
      result = "Tied.";
    } else if (computerMove === "Scissors") {
      score.losses += 1;
      result = "Lost.";
    }
    updateScore();
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      score.ties += 1;
      result = "Tied.";
    } else if (computerMove === "Paper") {
      score.losses += 1;
      result = "Lost.";
    } else if (computerMove === "Scissors") {
      score.wins += 1;
      result = "Won.";
    }
    updateScore();
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      score.losses += 1;
      result = "Lost.";
    } else if (computerMove === "Paper") {
      score.wins += 1;
      result = "Won.";
    } else if (computerMove === "Scissors") {
      score.ties += 1;
      result = "Tied.";
    }
    updateScore();
  }
  document.querySelector(
    "#js-moves"
  ).textContent = `You played ${playerMove} and computer played ${computerMove}`;
  document.querySelector("#js-result").textContent = `You ${result}`;
}
function resetScore() {
  (score.wins = 0),
    (score.losses = 0),
    (score.ties = 0),
    (document.querySelector(
      "#js-score"
    ).textContent = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`);
}
function updateScore() {
  document.querySelector(
    "#js-score"
  ).textContent = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}
