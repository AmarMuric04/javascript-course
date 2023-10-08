function greet(name) {
  let check = name ? `Hi ${name}` : `Hi there`;
  console.log(check);
}

function convertToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}
console.log(convertToCelsius(86));

function convertTemperature(degree, unit) {
  if (unit === "C") {
    const result = convertToFahrenheit(degree);
    return `${result}`;
  } else if (unit === "F") {
    const result = convertToCelsius(degree);
    return `${result}`;
  }
}

console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));
