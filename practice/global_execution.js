var a = 10;

function one() {
  var a = 30;
  console.log(a);
  function three() {
    console.log("I am function three", a);
  }

  console.log("I am function one", a);

  two();
  three();
}

function two() {
  console.log("I am function two", a);
}

one();
