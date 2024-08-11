//Write a JS code to find duplicate values in a given array
function findDup(Arr){
    let arrDup=[]
    for(let i=0; i<Arr.length; i++){
        if(arrDup.indexOf(arr[i])!=i&&arrDup.indexOf(Arr[i]==-1)){
            arrDup.push(arr[i]);
        }
    }
    return arrDup;


}
let arr = [4,32,5,45,23,23,1,2,2];
console.log(findDup(Arr));