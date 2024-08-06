function digiteSum(num){
    let sum=0;
    while(num!=0){
        sum+= num%10;
        num = Math.floor(num/10);
    }
    return sum;
}
document.write(digiteSum(65321));