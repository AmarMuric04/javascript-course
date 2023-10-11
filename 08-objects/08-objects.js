// /* const product = {
//   name: "socks",
//   price: 1090,
// };
// console.log(product);
// console.log(product.name);
// console.log(product.price);

// product.name = "cotton socks";
// console.log(product);

// product.newProperty = true;
// console.log(product);

// delete product.newProperty;
// console.log(product); */

// const product2 = {
//   name: "shirt",
//   "delivery-time": "now",
//   rating: {
//     stars: 4.5,
//     count: 87,
//   },
//   fun: function Hello() {
//     console.log("hello");
//   },
// };
// console.log(product2);
// console.log(product2.name);
// console.log(product2["name"]);
// /* console.log(product2.delivery-time); is a problem because javascript wants to do math (Delivery - Time). So we use ["delivery-time"] here */
// console.log(product2["delivery-time"]);
// /*you can also do maths with objects console.log(product2.name + product2["delivery-time"]) */
// console.log(product2.rating.stars);
// product2.fun();

// console.log(JSON.stringify(product2));

// console.log(typeof JSON.stringify(product2));

// JSON.parse(JSON.stringify(product2));

// const jsonstring = JSON.stringify(product2);
// console.log(JSON.parse(jsonstring));
console.log("hello".length);
console.log("hello".toUpperCase());
//Learned Auto-Boxing, a little bit, not a lot at all.

const object1 = {
  message: "Hello",
};

const object2 = object1;
console.log(object1);
console.log(object2);

object1.message = "Congratulations!";
console.log(object1);
console.log(object2);

const object3 = {
  message: "Congratulations!",
};
console.log(object3 === object1);
/*This only tries to see if object 3 has the same name as object 1. it doesnt go inside the object.*/
console.log(object2 === object1);
/*Because we already did object2 = object1, this will return true.*/
console.log(object3.message === object1.message);
/*You cant change what CONST object is referring to, but you CAN change the contents of the object, so if u want to change what the object is referring to you do let object, if u only want to change what is inside, you can do CONST object.*/
const object4 = {
  message: "Good job",
  price: 799,
  // price: 7.99,
};
// const message = object4.message;
const { message, price } = object4;

console.log(message);
console.log(price);
// console.log(price.toFixed(0));

const object5 = {
  // message: message,
  message,
  // method: function function1() {
  //   console.log(message);
  // },
  function1() {
    console.log("hello");
    console.log(message);
  },
};
object5.function1();
// object5.method();
const basketball = {
  price: 2095,
  name: "basketball",
};
const socks = {
  price: 1399,
  name: "socks",
};

function comparePrice(basketball, socks) {
  basketball.price > socks.price
    ? console.log(`${socks.name} (${socks.price}) is less expensive`)
    : console.log(`${basketball.name} (${basketball.price}) is less expensive`);
}
comparePrice(basketball, socks);

/*Task is to make 2 products, and then compare them two and show the one that costs less <- Completed

2nd Task is to compare the two products and see if their contents (name and price) are the same.*/

const product1 = {
  name: "umbrella",
  price: 1000,
};
const product2 = {
  name: "umbrella",
  price: 1000,
};
const product3 = {
  name: "umbrella",
  price: 999,
};
function isSameProduct() {
  let check =
    product1.price === product2.price && product2.name === product2.name
      ? true
      : false;

  check = console.log(check);
  /*shows true because the insides of the object aka the contents are the SAME. if we did product1 === product2 ? true : false, it would say false*/

  check = product1.price === product3.price && product1.name === product3.name;
  console.log(check); /*shows false because the price is different*/
}
isSameProduct();
const word = "ThIs TeXt WiLl TuRn To LoWeRcAsE";
console.log(word);
console.log(word.toLowerCase());
const repeat = "Hello";
console.log(repeat.repeat(5));
