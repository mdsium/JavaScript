function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  
  document.getElementById("demo").innerHTML = x;

// The Rest Parameter
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
// 326

let x1 = myFunction(4, 3);
document.getElementById("demo").innerHTML = x1;

function myFunction(a, b) {
  return a * b;
}

A = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}