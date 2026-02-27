const numbers = [1, 3, 44, 23, 21, 32, 45, 11, 16];

// const doubleIt = (num) => num * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map((num) => num * 2);

// console.log(doubled);

// const nums = [2, 4, 6];

// function addWord(arr, expectedWord) {
//   if (typeof expectedWord == "string") {
//     const result = arr.map((value) => value + expectedWord);

//     return result;
//   } else {
//     return "Invalid Type";
//   }
// }

// console.log(addWord(nums, "px"));

const students = [
  { name: "A", marks: 50 },
  { name: "B", marks: 80 },
];

const result = students.filter((mark) => mark.marks > 10);

console.log(result);
