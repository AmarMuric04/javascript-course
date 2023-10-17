// const multiply = (a, b) => a * b;
// console.log(multiply(7, 10));

// const countPositiveNums = (nums) => {
//   let positive = 0;
//   nums.forEach((value) => {
//     if (value > 0) {
//       positive++;
//     }
//   });
//   console.log(positive);
// };
// countPositiveNums([1, 2, 3, 4, -2, -3, -5]);

// function addNum(array, num) {
//   return array.map((value) => value + num);
// }

// console.log(addNum([1, 2, 3], 2));

// function removeEgg(foods) {
//   let eggRemoved = 0;

//   return foods.filter((food) => {
//     if (food === "egg" && eggRemoved < 2) {
//       eggRemoved++;
//       return false;
//     }

//     return true;
//   });
// }

// console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

function removeEgg(foods) {
  let eggRemoved = 0;

  return foods.filter((food) => {
    if (food === "egg" && eggRemoved < 2) {
      eggRemoved++;
      return false;
    }

    return true;
  });
}

console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));
