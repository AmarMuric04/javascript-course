// const array1 = [1, 2, 3];
// const array2 = array1.slice();
// array2.push(4);
// console.log(array1);
// console.log(array2);

// const array3 = [1, 2, 3];

// const [firstValue, secondValue] = [1, 2, 3];

// for (i = 0; i <= 10; i++) {
//   if (i % 3 === 0) {
//     continue;
//   }
//   console.log(i);
//   if (i === 9) {
//     break;
//   }
// }
let i = 0;
while (i <= 10) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
// CONTINUE SKIPS ONE, BREAK STOPS THE LOOP ENTIRELY
function doubleArray(array) {
  let numsDoubled = [];

  for (i = 0; i < array.length; i++) {
    let value = array[i];
    if (value === 0) {
      return numsDoubled;
    }
    numsDoubled.push(value * 2);
  }
  return numsDoubled;
}
console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 5, 0, 5]));
