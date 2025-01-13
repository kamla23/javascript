let input = require("readline-sync");
let a = input.question("Enter your number:");
let b = input.question("Enter your number:");
let c = input.question("Enter your number:");
if (a === b && a === c) {
    console.log("All equal");
} else if (a === b || a === c || b === c) {
    console.log("Two equal");
} else {
    let large;
    if (a >= b && a >= c) {
        large = a;
    } else if (b >= a && b >= c) {
        large= b;
    } else {
        large = c;
    }

    if (large % 2 === 0) {
        console.log("Largest even");
    } else {
        console.log("Largest odd");
    }
}
