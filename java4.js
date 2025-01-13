let input = require("readline-sync");
let hour = input.question("enter your car parked hour:");
let calculate;
if(hour <= 1){
    calculate = 30;
}else if(hour < 5){
    calculate = 25 + 25 + 20;
}else if(2 <= hour && hour <= 5){
    calculate = 25 + 25 + 20 + 20 + 20;
}else{
    calculate = 25 + 25 + 20 + 20 + 20 + 15 + 15;
}
console.log(calculate);
    


