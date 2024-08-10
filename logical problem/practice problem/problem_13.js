//Write a js code to find product of two arrays
function findProd(arr01, arr2){
    let arrProd = arr01.length>arr2.length ? arr01: arr2;
    for(let i=0; i<Math.min(arr01.length, arr2.length); i++){
        arrProd[i] = arr01[i]*arr2[i];
    }
    return arrProd;
}
let arr01 = [3,34,4,5,32,43,34];
let arr2 = [3,1,2,5,6,4,6];

document.write(findProd(arr01,arr2));