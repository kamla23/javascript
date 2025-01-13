function reversString(n){
    let rev = 0;
    if(n > 0){
        R = n % 10;
        rev = rev * 10 + R;
        n = Math.floor(n/10);
    }
    return rev;
}
console.log(reversString("12345"));