// Array destructure
let arr = [10, 20, 50, 12, 65, 44, 52];

let [first, second, third, fourth] = arr;
let [, , , three] = arr;

// console.log(first, second, third, fourth);
// console.log(three);

// Obj destructure
const student = {
  name: "omuk",
  roll: 10,
  class: "ten",
  subjects: {
    mainSubject: "Math",
    fourthSubject: "HigherMath",
  },
  county: "Bangladesh",
};

let { name: myName, roll: MyRoll } = student;

console.log(MyRoll);

//Optional Function
function myFunction() {
  console.log(this);
}

myFunction();

const myFunc = () => {
  console.log(this);
};

myFunc();
