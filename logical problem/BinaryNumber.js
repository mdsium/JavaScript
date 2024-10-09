function decimalToBinary(decimalNumber){
    let binaryArray =[];
    while (decimalNumber>0){
        binaryArray.unshift(decimalNumber%2);
    }
    return binaryArray.length ? binaryArray.join(""): '0';
}
const decimalNum = 100;
const result = decimalToBinary(decimalNum);
console.log(result);