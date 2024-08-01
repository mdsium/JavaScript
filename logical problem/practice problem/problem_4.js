function deleteElement(arrd, ele){
    for(let i=0; i<arrd.length; i++){
        if(arrd[i]==ele){
            arrd.splice(i,1); //delete element from array
        }
    }
    return arrd;
}
let arrd= [23,43,5,3,23,54,34,53,54,59];
arrd = deleteElement(arrd, 54)
document.write(arrd);