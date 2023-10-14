function subscribed() {
  subscribe = document.querySelector(".js-subscribe-button");
  if (subscribe.innerText === "Subscribe") {
    subscribe.textContent = "Subscribed";
    subscribe.classList.add("subscribedNewClass");
  } else {
    subscribe.textContent = "Subscribe";
    subscribe.classList.remove("subscribedNewClass");
  }
}

function checkThePrice() {
  let input = Number(document.querySelector(".js-input").value);
  let cost = document.querySelector("#js-cost");
  if (input > 40) {
    cost.textContent = `$${input}`;
  } else if (input <= 40 && input !== 0) {
    cost.textContent = `$${((input + 10) * 100) / 100}`;
  } else if (input === 0) {
    cost.textContent = "Cart is empty or the item is free.";
  } else {
    cost.textContent = "Error";
  }
  document.getElementById("rock-paper-scissors-title").style.margin =
    "21px 0px 16px 0px";
}
function enterKey(event) {
  if (event.key === "Enter") {
    checkThePrice();
  }
}
