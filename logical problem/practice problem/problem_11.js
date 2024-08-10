//write a js code to find the number of zeros in 2D matrix
let zero =[[0,4,5],[0,9,0],[1,0,1]];
let zeroCount = 0;

for(let i=0; i<zero.length; i++){
    for(let j=0; j<arr[0].length; j++){
        zeroCount = zero[i][j]==0 ? zeroCount+1:zeroCount;
    }
}
document.write(zeroCount);