const basketball = {
  name: "basketball",
  price: 2095,
};
console.log(basketball);

basketball.price = basketball.price + 500;
const newPrice = basketball.price;
console.log(newPrice);

basketball["delivery-time"] = "3 days";

console.log(basketball);
