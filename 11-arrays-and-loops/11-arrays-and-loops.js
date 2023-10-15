const arr = [10, 20, 30];
console.log(arr);

arr[0] = 99;
console.log(arr);

const object = {
  wins: [10, 20, 30],
  losses: [10, 20, 30],
};
console.log(object);

console.log(arr[0]);
/* this shows the first thing in the array*/

const arr2 = [1, "helo", true, { name: "socks" }, [1, 2]];

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));
/*this checks if the thing is an array*/

console.log(Array.isArray(arr));

arr.push(100);
console.log(arr);
/* this adds a 100 to the end of the array*/
arr.splice(0, 1);
console.log(arr);
/*this removes an item from the array */
let i = 1;
while (i <= 5) {
  console.log(i);
  i += 1;
}
/* LOOP */
for (i = 1; i <= 5; i++) {
  console.log(i);
}
