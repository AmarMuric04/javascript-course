// String(25);
// console.log("25" + 5);
// console.log("25" - 5);

function subscribed() {
  const subscribe = document.querySelector("#js-subscribe-button");
  if (subscribe.innerHTML === "Subscribe") {
    subscribe.innerHTML = "Subscribed";
  } else {
    subscribe.innerHTML = "Subscribe";
  }
}

function checkThePrice() {
  console.log("123");
  let input = Number(document.querySelector("#js-input").value);
  let cost = document.querySelector("#js-cost");
  if (input > 40) {
    cost.textContent = `$${input}`;
  } else if (input <= 40 && input !== 0) {
    cost.textContent = `$${input + 10}`;
  } else if (input === 0) {
    cost.textContent = "Cart is empty or the item is free.";
  }
}

function enterKey(event) {
  if (event.key === "Enter") {
    checkThePrice();
  }
}
