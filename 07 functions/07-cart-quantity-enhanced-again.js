let cartQuantity = 0;

function changeQuantity(num) {
  if (num === 1) {
    if (cartQuantity >= 10) {
      alert(`Cart is Full! ${cartQuantity}/10`);
    } else {
      cartQuantity += num;
      console.log(`Cart quantity stands at ${cartQuantity}`);
    }
  } else if (num === 2) {
    if (cartQuantity + num === 12) {
      alert(`Cart is Full! ${cartQuantity}/10`);
    } else if (cartQuantity + num === 11) {
      alert(
        `Unable to use +2 due to cart quantity! ${cartQuantity}/10\nTry using Add to Cart!`
      );
    } else {
      cartQuantity += num;
      console.log(`Cart quantity stands at ${cartQuantity}`);
    }
  } else if (num === 3) {
    if (cartQuantity + num === 11) {
      alert(
        `Unable to use +3 due to cart quantity! ${cartQuantity}/10\nTry using +2`
      );
    } else if (cartQuantity + num === 12) {
      alert(
        `Unable to use +3 due to cart quantity! ${cartQuantity}/10\nTry using +1`
      );
    } else if (cartQuantity + num === 13) {
      alert(`Cart is Full! ${cartQuantity}/10`);
    } else {
      cartQuantity += num;
      console.log(`Cart quantity stands at ${cartQuantity}`);
    }
  }
  if (num === -2) {
    if (cartQuantity + num === -2) {
      alert(`Unable to use -2 due to cart quantity! ${cartQuantity}/10`);
    } else if (cartQuantity + num === -1) {
      alert(
        `Unable to use -2 due to cart quantity! ${cartQuantity}/10\nTry using -1`
      );
    } else {
      cartQuantity += num;
    }
    console.log(`Cart quantity stands at ${cartQuantity}`);
  } else if (num === -3) {
    if (cartQuantity + num === -3) {
      alert(`Unable to use -3 due to cart quantity! ${cartQuantity}/10`);
    } else if (cartQuantity + num === -1) {
      alert(
        `Unable to use -3 due to cart quantity! ${cartQuantity}/10\nTry using -2`
      );
    } else if (cartQuantity + num === -2) {
      alert(
        `Unable to use -3 due to cart quantity! ${cartQuantity}/10\nTry using -1`
      );
    } else {
      cartQuantity += num;
    }
    console.log(`Cart quantity stands at ${cartQuantity}`);
  }
}

function showQuantity() {
  console.log(`Current items in the cart: ${cartQuantity}/10.`);
}

function resetCart() {
  cartQuantity = 0;
  console.log(`Cart has been reset\nNew cart quantity: ${cartQuantity}`);
}
