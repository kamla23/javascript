let input = require("readline-sync");
let n = input.question("Enter your number:");
let Squares = 0;
let Cubes = 0;
let i = 1;
while (i <= n) {
    if (i % 2 === 0) {
        Squares += i * i;
    } else {
        Cubes += i * i * i;
    }
    i++;
}
let calculate = Squares + Cubes;
console.log(calculate);
