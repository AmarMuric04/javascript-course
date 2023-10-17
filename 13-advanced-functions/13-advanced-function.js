// function greeting() {
//   console.log("hello");
// }
// greeting();

// const num = 3;

// const function1 = function () /*greeting*/ {
//   console.log("hello2");
// };

// console.log(function1);
// console.log(typeof function1);

// //function is just another value, u can save it in a variable.

// function1();

// const object1 = {
//   num: 2,
//   fun: function greeting() {
//     console.log("hello3");
//   },
// };
// object1.fun();
// function display(param) {
//   console.log(param);
// }

// display(2);

// function run(param) {
//   param();
// }
// run(function () {
//   console.log("hello4");
// });
//passing a function into another function
// setTimeout(function () {
//   console.log("timeout!");
//   document.body.style.backgroundColor = "red";
// }, 3000);

// //THIS IS CALLED ASYNCHRONOUS CODE, CONSOLE WONT WAIT FOR IT TO LOAD

// console.log("next line");

// setInterval(function () {
//   console.log("interval");
// }, 3000);
// console.log("next line2");
["make dinner", "wash dishes", "watch youtube"].forEach(function (value) {
  if (value === "wash dishes") {
    return;
  }
  console.log(value);
});
