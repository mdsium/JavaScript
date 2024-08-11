//Write a JS code to find N value in the Fibonacci series for a given number
function findFibonacci(num){
    let n1=0;
    let n2=1;
    let count=2;
    let n3;
    while(true){
        n3=n1+n2;
        if(n3==num){
            console.log('Element ${num} is present in index ${count}')
            break;
        }
        else if(n3>num){
            console.log("Element not present");
        }
        n1=n2;
        n2=n3;
        count++;
    }
}

findFibonacci(13);
findFibonacci(144);