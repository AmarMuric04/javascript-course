// const add = function () {
//   console.log(2 + 3);
// };
// add();
// add();
// function runTwice(fun) {
//   fun();
//   fun();
// }
// runTwice(function () {
//   console.log("12b");
// });
// runTwice(add);
// const timerStart = () => {
//   document.querySelector(".js-start").textContent = "Loading...";
//   setTimeout(() => {
//     document.querySelector(".js-start").textContent = "Finished";
//   }, 1000);
//};
// let timeoutId;
// function addToCart() {
//   clearTimeout(timeoutId);
//   document.querySelector(".js-addedToCart").textContent = "Added";
//   timeoutId = setTimeout(function () {
//     document.querySelector(".js-addedToCart").textContent = "";
//   }, 2000);
// }
let messageAmount = 0;
function addMessage() {
  messageAmount++;
  changeTitle();
  return messageAmount;
}
function removeMessage() {
  messageAmount > 0 ? messageAmount-- : messageAmount;
  return messageAmount;
}

const changeTitle = () => {
  intervalId = setInterval(() => {
    if (document.title === "App") {
      if (messageAmount === 0) {
        document.title = "Exercises";
        clearInterval(intervalId);
      } else {
        document.title = `[${messageAmount}] New messages`;
      }
    } else {
      document.title = "App";
    }
  }, 1000);
};
changeTitle();
