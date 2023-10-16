// const words = ["hello", "world", "search", "good"];
// let index = -1;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "search") {
//     index = i;
//   }
// }
// console.log(index);

// const words = ["not", "found", "search", "search"];
// let index = -1;

// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "search") {
//     index = i;
//     break;
//   }
// }

// console.log(index);

// function findIndex(array, word) {
//   let index = -1;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === word) {
//       index = i;
//       break;
//     }
//   }
//   console.log(index);
// }
// findIndex(["not", "found", "search", "search"], "found");

// function removeEgg(foods) {
//   let result = [];
//   let eggsRemoved = 0;
//   for (i = 0; i < foods.length; i++) {
//     if (foods[i] === "egg" && eggsRemoved < 2) {
//       eggsRemoved++;
//       continue;
//     }
//     result.push(foods[i]);
//   }
//   return result;
// }
// console.log(removeEgg(["bacon", "egg", "egg", "egg", "tortilla"]));

// function removeEgg(foods) {
//   foods.slice();
//   let reverse = foods.slice().reverse();
//   // let reverse = foodsCopy.slice().reverse();
//   let result = [];
//   let eggsRemoved = 0;
//   for (i = 0; i < reverse.length; i++) {
//     if (foods[i] === "egg" && eggsRemoved < 2) {
//       eggsRemoved++;
//       continue;
//     }
//     result.push(foods[i]);
//   }
//   return result.reverse();
// }
// const foods = ["egg", "apple", "egg", "egg", "ham"];
// console.log(removeEgg(foods));
// console.log(foods);

//FIZZBUZZ
// let i = 0;
// while (i < 20) {
//   i++;
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// for (i = 0; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// for (i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  console.log(index);
}
findIndex(["not", "found", "search", "search"], "search");
