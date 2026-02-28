const dev = "developer";
const reverseDev = dev.split("").reverse().join("");

function strChecker(str) {
  return (result = str.split("").reverse().join(""));
}

console.log(strChecker(dev));

function createHelloWorld() {
  const name = "World";
  function sayHello() {
    console.log(`Hello ${name}`);
  }

  return sayHello;
}

const greeting = createHelloWorld();
greeting();
