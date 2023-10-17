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
const buttonElement = document.querySelector(".js-button");

const eventListener = () => {
  console.log("click");
};
buttonElement.addEventListener("click", eventListener);
buttonElement.removeEventListener("click", eventListener);
buttonElement.addEventListener("click", () => {
  console.log("hello");
});

//use add event listener over onclick
