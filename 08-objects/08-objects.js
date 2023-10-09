/* const product = {
  name: "socks",
  price: 1090,
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = "cotton socks";
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product); */

const product2 = {
  name: "shirt",
  "delivery-time": "now",
  rating: {
    stars: 4.5,
    count: 87,
  },
  fun: function Hello() {
    console.log("hello");
  },
};
console.log(product2);
console.log(product2.name);
console.log(product2["name"]);
/* console.log(product2.delivery-time); is a problem because javascript wants to do math (Delivery - Time). So we use ["delivery-time"] here */
console.log(product2["delivery-time"]);
/*you can also do maths with objects console.log(product2.name + product2["delivery-time"]) */
console.log(product2.rating.stars);
product2.fun();

console.log(JSON.stringify(product2));

console.log(typeof JSON.stringify(product2));

JSON.parse(JSON.stringify(product2));

const jsonstring = JSON.stringify(product2);
console.log(JSON.parse(jsonstring));
