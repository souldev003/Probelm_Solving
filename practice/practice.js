// function processOrder(customerName, callback) {
//   console.log(`Processing order for ${customerName}...`);

//   callback();
// }

// function orderComplete() {
//   console.log("Order complete! Your food has arrived.");
// }

// processOrder("Abir", orderComplete);

// console.log("Start");
// const time = 20000;

// setTimeout(() => {
//   console.log(`This is a callback executed after ${time} miliseconds`);
// }, time);

// console.log("End");

function firstSum(arr1, arr2) {
  arr1[0] = 100;
  arr2[0] = 200;

  const first = arr1[0];
  const second = arr2[0];

  return first + second;
}

const numbList1 = [1, 3, 2, 5, 29, 3];
const numbList2 = [2, 5, 6, 8, 85, 5];

console.log(numbList1, numbList2);

console.log(firstSum([...numbList1], [...numbList2]));

console.log(numbList1, numbList2);
