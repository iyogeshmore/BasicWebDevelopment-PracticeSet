// Example 2: Sum Of Two Numbers By Receiving Value From User.

const prompt = require("prompt-sync")();
var a , b;
a = parseInt(prompt("Enter First Number: "));
b = parseInt(prompt("Enter Second Number: "));
console.log(" Sum Of Two Numbers: ",a+b);

// Here, prompt() is used to take inputs from the user. parseInt() is used to convert the user input string to number.