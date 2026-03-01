let arr = [10, 20, 30, 40, 50, 60];

const newArray = arr.filter((num) => num > 20);
// console.log(newArray);

const orArray = arr.map((num) => num / 2);
// console.log(orArray);

const updArray = arr.map((item, index, array) => {
  console.log(item, "->", index, ":", array);
  return item / 2;
});

console.log(updArray);
