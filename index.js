// EXAMPLE 1 - Get the Index of the Max value in an Array in JavaScript

const arr = [3, 5, 8, 100, 20];

const max = Math.max(...arr);

const index = arr.indexOf(max);
console.log(index); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the indexes of all elements with the max value in an array

// const arr = [3, 5, 8, 100, 20, 100];

// const max = Math.max(...arr);

// const indexes = [];

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] === max) {
//     indexes.push(index);
//   }
// }

// console.log(indexes); // 👉️ [3, 5]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Index of the Max value in an Array using Array.reduce()

// const arr = [3, 5, 8, 100, 20];

// const index = arr.reduce((accumulator, current, index) => {
//   return current > arr[accumulator] ? index : accumulator;
// }, 0);

// console.log(index); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Index of the Min value in an Array in JavaScript

// const arr = [10, 5, 0, 15, 30];

// const min = Math.min(...arr);

// const index = arr.indexOf(min);
// console.log(index); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Index of the Min value in an Array using Function.apply()

// const arr = [10, 5, 0, 15, 30];

// // 👇️ now using apply, instead of ...
// const min = Math.min.apply(null, arr);

// const index = arr.indexOf(min);
// console.log(index); // 👉️ 2
