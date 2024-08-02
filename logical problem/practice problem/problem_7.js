function pattern(range){
    for(let i=1; i<=range; i++){
        let str="";
        for(let j=1; j<=i; j++){
            str += j+" " ;
        }
        document.write(str+"<br>");
    }
}
pattern(10);