function minMax(array) {
  const object = {
    min: array[0],
    max: array[0],
  };
  for (i = 0; i < array.length; i++) {
    const value = array[i];
    if (object.max === null || value < object.min) {
      object.min = value;
    }
    if (object.max === null || value > object.max) {
      object.max = value;
    } else if (array.length === 1) {
      object.max = array[0];
      object.min = array[0];
    }
  }
  return object;
}
console.log(minMax([0, 2]));

// function countWords(array) {
//   const object = {};
//   for (i = 0; i < array.length; i++) {
//     const word = array[i];
//     if (!object[word]) {
//       object[word] = 1;
//     } else {
//       object[word]++;
//     }
//   }
//   return object;
// }

function countWords(array) {
  const repetitions = {};
  for (i = 0; i < array.length; i++) {
    let word = array[i];
    if (!repetitions[word]) {
      repetitions[word] = 1;
    } else {
      repetitions[word]++;
    }
  }
  return repetitions;
}
console.log(countWords(["apple", "apple", "apple", "apple", "grape"]));
