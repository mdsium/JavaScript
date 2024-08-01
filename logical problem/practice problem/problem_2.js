// Write a JS code to print a 2D array 

var arr = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10]];
    printArray(arr);
function printArray(arr){
    for (var i=0; i<arr.length; i++){ //This outer  loop run five time 
        for(var j=0; j<arr[0].length; j++){ // This is inner loop it's run 10 time
            document.write(arr[i][j]);
        }

    }
}


