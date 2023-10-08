// console.log(3 < 5);
// console.log(3 > 5);

/* if (0) {
  console.log('truthy')
} else { 
  console.log('falsey')
}

let cartQuantity = 0;

if (cartQuantity) {
  console.log('cart is not empty')
} else { 
  console.log('cart is empty')
}

console.log('text' / 0)

let variable; 
console.log(variable) */

/*
let cartQuantity = 1;

let result = cartQuantity ? 'cart is not empty' : 'cart is empty'

console.log(result);

cartQuantity && console.log('If youd like to purhcase more, go back to the main page')

let message = 5 && 'hello';
console.log(message);


const currency = undefined || 'USD' ;
console.log(currency) */

/* homework so that the computer picks a time and follows instructions on what to say.
  const name = 'Amar';
  const hour = Math.floor(Math.random()*24)
  console.log(hour);
  if (hour > 6 && hour <= 12) {
    console.log(`Good Morning, ${name}.`)
  } else if (hour >12 && hour <=17) {
    console.log(`Good Afternoon, ${name}.`)
  } else {
    console.log(`Good Night, ${name}.`)
  } */

/* Theres an amusement park, and everyone thats 6 or younger has a discount, same for people that are 65 and older, the oldest person in the world is 116 so if they say more than 116 they arent eligible, if its not the holidays, the discounts are available, if its not the holidays the discounts are available. holidays are June July and August. */

let isHoliday = +prompt("1-12");

if (isHoliday === 6 || isHoliday === 7 || isHoliday === 8) {
  isHoliday = true;
} else {
  isHoliday = false;
}
let Holiday = isHoliday ? "Its the holiday" : "Its not the holidays";
console.log(Holiday);

if (isHoliday) {
  age = +prompt("Enter age");
  if (age <= 6 || (age >= 65 && age <= 116)) {
    console.log("You are eligible for a discount.");
  } else if (age > 116) {
    console.log(
      "You would be older than the oldest person on the planet, try again."
    );
  } else {
    console.log("You are not eligible for a discount.");
  }
}
