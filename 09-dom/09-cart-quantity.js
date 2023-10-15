/*10.14.2023 -> This version of Cart Quantity shwos the quantity on the screen*/

const cartQuantity = JSON.parse(localStorage.getItem("cartQuantityNow"));
function updateCartQuantity(value) {
  if (value === 1) {
    if (cartQuantity.quantity + value > 10) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Cart is full! (${cartQuantity.quantity}/10)`;
    } else {
      cartQuantity.quantity += value;
      document.querySelector("#js-errors").textContent = "";
    }
  } else if (value === 2) {
    if (cartQuantity.quantity + value === 12) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Cart is full! (${cartQuantity.quantity}/10)`;
    } else if (cartQuantity.quantity + value === 11) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Unable to perform action due to cart quantity (${cartQuantity.quantity}/10) Try +1`;
    } else {
      cartQuantity.quantity += value;
      document.querySelector("#js-errors").textContent = "";
    }
  } else if (value === 3) {
    if (cartQuantity.quantity + value === 13) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Cart is full! (${cartQuantity.quantity}/10)`;
    } else if (cartQuantity.quantity + value === 11) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Unable to perform action due to cart quantity (${cartQuantity.quantity}/10) Try +2`;
    } else if (cartQuantity.quantity + value === 12) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Unable to perform action due to cart quantity (${cartQuantity.quantity}/10) Try +1`;
    } else {
      cartQuantity.quantity += value;
      document.querySelector("#js-errors").textContent = "";
    }
  } else if (value === -1) {
    if (cartQuantity.quantity + value === -1) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Cart is empty! (${cartQuantity.quantity}/10)`;
    } else {
      cartQuantity.quantity += value;
      document.querySelector("#js-errors").textContent = "";
    }
  } else if (value === -2) {
    if (cartQuantity.quantity + value === -2) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Cart is empty! (${cartQuantity.quantity}/10)`;
    } else if (cartQuantity.quantity + value === -1) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Unable to perform action due to cart quantity (${cartQuantity.quantity}/10) Try -1`;
    } else {
      cartQuantity.quantity += value;
      document.querySelector("#js-errors").textContent = "";
    }
  } else if (value === -3) {
    if (cartQuantity.quantity + value === -3) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Cart is empty! (${cartQuantity.quantity}/10)`;
    } else if (cartQuantity.quantity + value === -1) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Unable to perform action due to cart quantity (${cartQuantity.quantity}/10) Try -2`;
    } else if (cartQuantity.quantity + value === -2) {
      document.querySelector(
        "#js-errors"
      ).textContent = `Unable to perform action due to cart quantity (${cartQuantity.quantity}/10) Try -1`;
    } else {
      cartQuantity.quantity += value;
      document.querySelector("#js-errors").textContent = "";
    }
  }
  document.querySelector(
    "#js-cartQuantity"
  ).textContent = `${cartQuantity.quantity}/10`;
  localStorage.setItem("cartQuantityNow", JSON.stringify(cartQuantity));
}

function showCart() {
  document.querySelector("#js-cartQuantity").textContent = "";
  document.querySelector(
    "#js-errors"
  ).textContent = `${cartQuantity.quantity}/10`;
}
function resetCart() {
  cartQuantity.quantity = 0;
  document.querySelector(
    "#js-cartQuantity"
  ).textContent = `${cartQuantity.quantity}/10`;
  document.querySelector("#js-errors").textContent = "";
}
