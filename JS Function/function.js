a=2;
b=5;
function myFunction(a, b) {
  return a * b;
}

//After a function expression has been stored in a variable, the variable can be used as a function:
const x = function (a, b) {return a * b};
let z = x(4, 3);

//The Function() Constructor
const myFunction = new Function("a", "b", "return a * b");
let A = myFunction(4, 3);

const myFunction = function (a, b) {return a * b};

// Function Hoisting
myFunction(5);
function myFunction(y) {
  return y * y;
}