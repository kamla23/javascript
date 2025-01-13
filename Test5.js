function fibonacciNumber(n){
    let i = 0;
    let a = 0;
    let b = 1;
    let c = 0;
    while(i <= n){
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}
console.log(fibonacciNumber(5));   