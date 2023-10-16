const arr = [-5, 10, 3, 2, -9, 99];
let object = { min: 0, max: 0 };
let smallest = arr[0];
let biggest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
    object.min = smallest;
  } else if (arr[i] > biggest) {
    biggest = arr[i];
    object.max = biggest;
  }
}
console.log(object);
