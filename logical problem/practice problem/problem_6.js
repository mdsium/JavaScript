function numPower(num, pow){
    let res=1; //return 1 for pow=0
    for(let i=0; i<pow; i++){
        res*=num;
    }
    return res;
}
document.write(numPower(10,2));//first is number and second is power