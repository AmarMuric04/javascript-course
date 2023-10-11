const basketball = {
  name: "basketball",
  price: 2095,
};
console.log(basketball);
const { name, price } = basketball;
console.log(name, price);

basketball.price = price + 500;
const newPrice = basketball.price;
console.log(newPrice);

basketball["delivery-time"] = "3 days";

console.log(basketball);

const socks = {
  price: 1399,
  name: "socks",
};
let socksVar = socks;
function comparePrice(basketball, socks) {
  const check =
    basketball.price > socks.price
      ? console.log(`${socks.name} (${socks.price}) is less expensive`)
      : console.log(
          `${basketball.name} (${basketball.price}) is less expensive`
        );
}
comparePrice(basketball, socks);

/*Task is to make 2 products, and then compare them two and show the one that costs less <- Completed

2nd Task is to compare the two products and see if their contents (name and price) are the same.*/
