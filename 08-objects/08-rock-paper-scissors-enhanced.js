let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};
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
      result = "Won.";
    } else if (computerMove === "play") {
      result = "Tied.";
    } else if (computerMove === "Scissors") {
      result = "Lost.";
    }
    if (result === "Won.") {
      score.wins += 1;
    } else if (result === "Tied.") {
      score.ties += 1;
    } else if (result === "Lost.") {
      score.losses += 1;
    }
    alert(
      `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}\nWins:${score.wins}, Ties:${score.ties}, Losses: ${score.losses}.`
    );
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tied.";
    } else if (computerMove === "Paper") {
      result = "Lost.";
    } else if (computerMove === "Scissors") {
      result = "Won.";
    }
    if (result === "Won.") {
      score.wins += 1;
    } else if (result === "Tied.") {
      score.ties += 1;
    } else if (result === "Lost.") {
      score.losses += 1;
    }
    alert(
      `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}\nWins:${score.wins}, Ties:${score.ties}, Losses: ${score.losses}`
    );
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Lost.";
    } else if (computerMove === "Paper") {
      result = "Won.";
    } else if (computerMove === "Scissors") {
      result = "Tied.";
    }
    if (result === "Won.") {
      score.wins += 1;
    } else if (result === "Tied.") {
      score.ties += 1;
    } else if (result === "Lost.") {
      score.losses += 1;
    }

    alert(
      `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}\nWins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`
    );
  }
}
function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  alert(
    `Score has been reset.\nWins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`
  );
}
