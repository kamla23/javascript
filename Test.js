function factorialNumber(n){
    let i = 1;
    let c = 0;
    if(i <= n){
        f = n*i;
        c = c + f;
        i++;
    }
    return c;
}
console.log(factorialNumber(5));






