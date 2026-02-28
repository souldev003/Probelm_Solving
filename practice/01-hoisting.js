//Ver is hoisted, but only the declaration, not the value assignment
console.log(num); //undefined
var num = 10;
console.log(num); // 10

// console.log(name); //Error We can't access before initialize
let name = "alex";
console.log(name); //alex

// console.log(brand); //Error We can't access before initialize
const brand = "xiaomi";
console.log(brand); //xiaomi
