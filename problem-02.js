/**Task
100 এর বেশি price নাও
10% discount দাও
সব price যোগ করো (final amount)*/

const prices = [100, 250, 400, 50, 600];

const total = prices.filter((price) => price > 100);
const discount = total.map((price) => price - (price * 10) / 100);
const finalRes = discount.reduce((sum, n) => sum + n, 0);

console.log(finalRes);

const anotherRes = prices
  .filter((num) => num > 100)
  .map((num) => num * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log(anotherRes);
