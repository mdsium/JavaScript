function digitCount (num){
    let count=0;
    while(num!=0){
        num=Math.floor(num/10);
        count++;
    }
    return count;

}


document.write(digitCount(5634156)+"<br>");
document.write(digitCount(4156));