// const nums = [5, 10, 15];

// const total = nums.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// console.log(total);

const cart = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
];

const totalPrice = cart.reduce((totalSell, price) => {
  return totalSell + price.price;
}, 0);

// console.log(totalPrice);

const numbs = [2, 3, 4];

const total = numbs.reduce((sum, num) => {
  return sum + num;
}, 0);

const product = numbs.reduce((sum, num) => {
  return sum * num;
}, 1);

console.log(total);
console.log(product);
