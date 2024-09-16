function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
  }

  function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }
  }


function myFunction(x, y = 10) {
  return x + y;
}
document.getElementById("demo").innerHTML = myFunction(5);