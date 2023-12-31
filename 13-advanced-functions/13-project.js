let score = JSON.parse(localStorage.getItem("rockpaperscissors")) || {
  wins: 0,
  ties: 0,
  losses: 0,
};

/*Add event listeners, to avoid onclick in html*/
document.querySelector(".js-button-rock").addEventListener("click", () => {
  playGame("Rock");
});
document.querySelector(".js-button-paper").addEventListener("click", () => {
  playGame("Paper");
});
document.querySelector(".js-button-scissors").addEventListener("click", () => {
  playGame("Scissors");
});
document.querySelector(".resetScore").addEventListener("click", () => {
  areYouSure();
});
document.querySelector(".autoPlay").addEventListener("click", autoPlay);

/*clicking r (rock), p (paper) or s (scissors) on the keyboard
actually plays the move.*/
document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    areYouSure();
  }
});

const areYouSure = () => {
  document.querySelector(
    ".js-areYouSure"
  ).innerHTML = `<div class="areYouSure-wrapper"><p class="areYouSure">Are you sure? </p> <button class="js-yes decision-button">Yes</button><button class="js-no decision-button">No</button></div>`;
  document.querySelector(".js-yes").addEventListener("click", () => {
    resetScore();
    document.querySelector(".js-areYouSure").innerHTML = "";
  });
  document.querySelector(".js-no").addEventListener("click", () => {  
    document.querySelector(".js-areYouSure").innerHTML = "";
  });
};

console.log(score);
document.querySelector(
  "#js-score"
).textContent = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
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

let isPlaying = false;
let intervalId;

function autoPlay() {
  if (!isPlaying) {
    document.querySelector(".js-autoPlay").textContent = "Stop Playing";
    intervalId = setInterval(() => {
      let playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isPlaying = true;
  } else {
    document.querySelector(".js-autoPlay").textContent = "Auto Play";
    clearInterval(intervalId);
    isPlaying = false;
  }
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
  localStorage.setItem("rockpaperscissors", JSON.stringify(score));
}
function resetScore() {
  localStorage.removeItem("rockpaperscissors");
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  document.querySelector(
    "#js-score"
  ).textContent = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
  localStorage.setItem("rockpaperscissors", JSON.stringify(score));
}
function updateScore() {
  document.querySelector(
    "#js-score"
  ).textContent = `Wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}
