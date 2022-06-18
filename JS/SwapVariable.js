// Example 3: Swap Two Variables By Receiving Value From User.

const prompt = require("prompt-sync")();

let a = prompt("Enter The First Variable: ");
let b = prompt("Enter The Second Variable: ");

let temp; //created a temp variable to store the value of a temporarily.

temp = a;
a = b;
b = temp;

console.log("The Value Of a After Swapping:",a);
console.log("The Valuer Of b After Swapping:",b);