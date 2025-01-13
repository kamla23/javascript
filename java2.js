let input = require("readline-sync");
let n = input.question("enter your length n:");
let arr = [3,-5,2,-7,8,0,1];
// let arr = [];
let sumpositive = 0;
let productnegative = -1;
let counteven = 0;
let countodd = 0;
for(let i = 0; i <= arr.length; i++){
    if(arr[i] > 0){
        sumpositive += arr[i];
    }
    if(arr[i] < 0){
        productnegative *= arr[i];
    }
    if(arr[i] % 2 == 0){
        counteven = counteven + 1;
    }else{
        countodd = countodd + 1;
    }
}
console.log(sumpositive);
console.log(productnegative);
console.log(counteven);
console.log(countodd);

