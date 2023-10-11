let calculation = "";
function calculator(value) {
  calculation += value;
  console.log(calculation);
}
function equalsTo() {
  calculation = eval(calculation);
  console.log(calculation);
}
