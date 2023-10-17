/*const regularFunction = function (param, param2) {
  console.log("hello");
  return 5;
};
const arrowFunction = (param, param2) => {
  console.log("hello");
  return 5;
};
regularFunction();

arrowFunction();

const oneParam = (param) => {
  console.log(param + 1);
};
oneParam(2);

const oneLine = () => 2 + 3;

console.log(oneLine());

const object = {
  method: () => {},
  method() {},
};
*/
/* 
const buttonElement = document.querySelector(".js-button");

const eventListener = () => {
  console.log("click");
};
buttonElement.addEventListener("click", eventListener);
buttonElement.removeEventListener("click", eventListener);
buttonElement.addEventListener("click", () => {
  console.log("hello");
});*/

//use add event listener over onclick

//FILTER AND MAP
console.log(
  [1, -3, 5].filter((value, index) => {
    // const check = value > 0 ? true : false;
    // return check;
    return value >= 0;
  })
); /*FILTER REMOVES THINGS FROM THE ARRAY*/

console.log(
  [1, 1, 3].map((value, index) => {
    return value + 10;
  })
);
console.log([1, 1, 3].map((value) => value + 10));
/*MAP MODIFIES THE ARRAY, ADDING THINGS ONTO IT*/
