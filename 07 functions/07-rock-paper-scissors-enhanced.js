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
    alert(
      `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}`
    );
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tied.";
    } else if (computerMove === "Paper") {
      result = "Lost.";
    } else if (computerMove === "Scissors") {
      result = "Won.";
    }
    alert(
      `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}`
    );
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Lost.";
    } else if (computerMove === "Paper") {
      result = "Won.";
    } else if (computerMove === "Scissors") {
      result = "Tied.";
    }
    alert(
      `you picked ${playerMove}, Computer picked ${computerMove}, you ${result}`
    );
  }
}
