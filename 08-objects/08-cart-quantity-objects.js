/*1.0
Added localStorage to cart quantity, when the site is refreshed, quantity of the cart stays the same. */

const cartQuantity = JSON.parse(localStorage.getItem("cart"));

function changeQuantity(num) {
  if (num === 1) {
    if (cartQuantity.quantity >= 10) {
      alert(`Cart is Full! ${cartQuantity.quantity}/10`);
    } else {
      cartQuantity.quantity += num;
      console.log(`Cart quantity stands at ${cartQuantity.quantity}`);
    }
  } else if (num === 2) {
    if (cartQuantity.quantity + num === 12) {
      alert(`Cart is Full! ${cartQuantity.quantity}/10`);
    } else if (cartQuantity.quantity + num === 11) {
      alert(
        `Unable to use +2 due to cart quantity! ${cartQuantity.quantity}/10\nTry using Add to Cart!`
      );
    } else {
      cartQuantity.quantity += num;
      console.log(`Cart quantity stands at ${cartQuantity.quantity}`);
    }
  } else if (num === 3) {
    if (cartQuantity.quantity + num === 11) {
      alert(
        `Unable to use +3 due to cart quantity! ${cartQuantity.quantity}/10\nTry using +2`
      );
    } else if (cartQuantity.quantity + num === 12) {
      alert(
        `Unable to use +3 due to cart quantity! ${cartQuantity.quantity}/10\nTry using +1`
      );
    } else if (cartQuantity.quantity + num === 13) {
      alert(`Cart is Full! ${cartQuantity.quantity}/10`);
    } else {
      cartQuantity.quantity += num;
      console.log(`Cart quantity stands at ${cartQuantity.quantity}`);
    }
  }
  if (num === -2) {
    if (cartQuantity.quantity + num === -2) {
      alert(
        `Unable to use -2 due to cart quantity! ${cartQuantity.quantity}/10`
      );
    } else if (cartQuantity.quantity + num === -1) {
      alert(
        `Unable to use -2 due to cart quantity! ${cartQuantity.quantity}/10\nTry using -1`
      );
    } else {
      cartQuantity.quantity += num;
    }
    console.log(`Cart quantity stands at ${cartQuantity.quantity}`);
  } else if (num === -3) {
    if (cartQuantity.quantity + num === -3) {
      alert(
        `Unable to use -3 due to cart quantity! ${cartQuantity.quantity}/10`
      );
    } else if (cartQuantity.quantity + num === -1) {
      alert(
        `Unable to use -3 due to cart quantity! ${cartQuantity.quantity}/10\nTry using -2`
      );
    } else if (cartQuantity.quantity + num === -2) {
      alert(
        `Unable to use -3 due to cart quantity! ${cartQuantity.quantity}/10\nTry using -1`
      );
    } else {
      cartQuantity.quantity += num;
    }
    console.log(`Cart quantity stands at ${cartQuantity.quantity}`);
  }
  localStorage.setItem("cart", JSON.stringify(cartQuantity));
}

function showQuantity() {
  console.log(`Current items in the cart: ${cartQuantity.quantity}/10.`);
}

function resetCart() {
  cartQuantity.quantity = 0;
  console.log(
    `Cart has been reset\nNew cart quantity: ${cartQuantity.quantity}`
  );
}
