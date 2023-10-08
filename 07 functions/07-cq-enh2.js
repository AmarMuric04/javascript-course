let cartQuantity = 0;

function changeQuantity(num) {
  if (cartQuantity + num > 10) {
    alert("Cart is full");
  } else if (cartQuantity + num < 0) {
    alert("Cart is empty");
  } else {
    cartQuantity += num;
    console.log(cartQuantity);
  }
}
