//Write a JS code to print Even numbers in given array
let sium = [34,5,6,21,4,46,5,55,75,2545,4575,45,76,43];
function pirntEven(sium){
    for (let i=0; i<sium.length; i++){
        if(sium[i]%2==0){
            document.write(sium[i]+' / ');
        }
    }
}
pirntEven(sium);