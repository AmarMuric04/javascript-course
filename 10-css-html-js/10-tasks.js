let check = document.querySelector(".js-button").classList.contains("button");
console.log(check);
if (check === true) {
  console.log("true");
} else {
  console.log("else");
}
function onOff(value) {
  let onOff = document.querySelector(value);
  if (onOff.classList.contains("is-toggled") === false) {
    onOff.classList.add("is-toggled");
  } else {
    onOff.classList.remove("is-toggled");
  }
}

function firstOnOffSingle() {
  thirdOnOff = document.querySelector(".second-onOff-three");
  thirdOnOff.classList.remove("is-toggled");
  secondOnOff = document.querySelector(".second-onOff-two");
  secondOnOff.classList.remove("is-toggled");

  let firstOnOff = document.querySelector(".second-onOff");
  if (firstOnOff.classList.contains("is-toggled") === false) {
    firstOnOff.classList.add("is-toggled");
  } else {
    firstOnOff.classList.remove("is-toggled");
  }
  return firstOnOff;
}
function secondOnOffSingle() {
  thirdOnOff = document.querySelector(".second-onOff-three");
  thirdOnOff.classList.remove("is-toggled");
  firstOnOff = document.querySelector(".second-onOff");
  firstOnOff.classList.remove("is-toggled");

  let secondOnOff = document.querySelector(".second-onOff-two");
  if (secondOnOff.classList.contains("is-toggled") === false) {
    secondOnOff.classList.add("is-toggled");
  } else {
    secondOnOff.classList.remove("is-toggled");
  }
  return secondOnOff;
}
function thirdOnOffSingle() {
  secondOnOff = document.querySelector(".second-onOff-two");
  secondOnOff.classList.remove("is-toggled");
  firstOnOff = document.querySelector(".second-onOff");
  firstOnOff.classList.remove("is-toggled");

  let thirdOnOff = document.querySelector(".second-onOff-three");
  if (thirdOnOff.classList.contains("is-toggled") === false) {
    thirdOnOff.classList.add("is-toggled");
  } else {
    thirdOnOff.classList.remove("is-toggled");
  }
  return thirdOnOff;
}
