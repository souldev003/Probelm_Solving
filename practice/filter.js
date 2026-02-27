const numbs = [5, 12, 18, 7, 20];

const oddNumbs = numbs.filter((num) => num % 2 !== 0);

console.log(oddNumbs);

const nums = [5, 12, 18, 7, 20, 6];

const greaterNumbs = nums.filter((num) => num >= 10 && num % 2 === 0);

console.log(greaterNumbs);
