let input = require("readline-sync");
let n = input.question("enter your number:");
let i = 1;
let sum = 0;
if(n % i === 0){
    sum = sum + i;
    i++;
}
if(sum === n){
    console.log("perfect");
}else{
    console.log("not perfect");
}