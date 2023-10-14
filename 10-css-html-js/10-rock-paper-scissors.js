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
  let computerMoveInEmoji = "";
  const computerMove = pickComputerMove();
  if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      score.wins += 1;
      result = "Won.";
      computerMoveInEmoji = "✊";
    } else if (computerMove === "Paper") {
      score.ties += 1;
      result = "Tied.";
      computerMoveInEmoji = "🖐";
    } else if (computerMove === "Scissors") {
      score.losses += 1;
      result = "Lost.";
      computerMoveInEmoji = "✌";
    }
    playerMove = "🖐";
    updateScore();
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      score.ties += 1;
      result = "Tied.";
      computerMoveInEmoji = "✊";
    } else if (computerMove === "Paper") {
      score.losses += 1;
      result = "Lost.";
      computerMoveInEmoji = "🖐";
    } else if (computerMove === "Scissors") {
      score.wins += 1;
      result = "Won.";
      computerMoveInEmoji = "✌";
    }
    playerMove = "✊";
    updateScore();
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      score.losses += 1;
      result = "Lost.";
      computerMoveInEmoji = "✊";
    } else if (computerMove === "Paper") {
      score.wins += 1;
      result = "Won.";
      computerMoveInEmoji = "🖐";
    } else if (computerMove === "Scissors") {
      score.ties += 1;
      result = "Tied.";
      computerMoveInEmoji = "✌";
    }
    playerMove = "✌";
    updateScore();
  }
  document.querySelector(
    "#js-moves"
  ).innerHTML = `You <span class="span">${playerMove}</span> <span class="span">${computerMoveInEmoji}</span> Computer`;
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
