let arra=[13,43,434,13,5,5,65,234,45,2,452,55];
let largest = arra[0];

for(let i=0; i<arra.length; i++){
    largest = arra[i]>largest ? arra[i]:largest;
}
document.write(largest);