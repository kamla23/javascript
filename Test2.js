function palindromeNumber(n){
    let rev = 0;
    if(n > 0){
        r = n % 10;
        rev = rev * 10 + r;
        n = Math.floor(n/10);
        return rev;
    }
}
console.log(palindromeNumber(121)); 
