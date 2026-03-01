//Scope=> There are three type of scope: 1. Global Scope, 2. Block Scope and 3. Function Scope or Local scope.

//Global Scope: Globally Declare We can access it anywhere like function array object string etc.
let test = "Hello Developer";

if (test === "Hello Developer") {
  // console.log(test);
} else {
  // console.log("Wrong Text");
}

// Block Scope: We can't access declared variable if the the variable into block scope, But only var can access it.

{
  var team = "Barcelona";
  let team1 = "Barcelona";
  const team2 = "Barcelona";
}

// console.log(team); //Barcelona
// console.log(team1); //Error
// console.log(team2); //Error

//Function or Local Scope: We cant access variable what are declared into a function
function hello() {
  var color = "Red";
  let color1 = "Blue";
}

// console.log(color); //Error
// console.log(color); //Error
// console.log(color1); //Error

console.log(alu);
var alu = "alu";
console.log(alu);
var alu = "tomato";
console.log(alu);
