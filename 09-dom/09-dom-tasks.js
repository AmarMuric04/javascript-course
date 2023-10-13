console.log(document.querySelector("button"));

function changeText() {
  document.querySelector("#js-secondButton").textContent = "a9 done";
}
function youPlayed(move) {
  document.querySelector(
    "#headsTailsParagraph"
  ).textContent = `You chose: ${move}`;
}
function checkName() {
  let name = document.querySelector("#js-input").value;
  document.querySelector("#js-name").textContent = `Hello ${name}`;
}
function checkNameOnEnter(event) {
  if (event.key === "Enter") {
    checkName();
  }
}
function checkThePrice() {
  let input = Number(document.querySelector("#js-inputTwo").value);
  let cost = document.querySelector("#js-cost");
  console.log(input);
  if (input > 40) {
    cost.textContent = `$${input}`;
  } else if (input <= 40 && input !== 0) {
    cost.textContent = `$${((input + 10) * 100) / 100}`;
  } else if (input === 0) {
    cost.textContent = "Cart is empty or the item is free.";
  }
}
function enterKey(event) {
  if (event.key === "Enter") {
    checkThePrice();
  }
}
function followTheInput() {
  let inputElement = String(document.querySelector("#js-inputThree").value);
  document.querySelector("#js-inputFollower").textContent = inputElement;
}
