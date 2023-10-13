let calculation = localStorage.getItem("calculations");
document.querySelector("#js-calculation").textContent = `${calculation}`;
function calculator(value) {
  calculation += value;
  document.querySelector("#js-calculation").textContent = `${calculation}`;
  localStorage.setItem("calculations", calculation);
}
