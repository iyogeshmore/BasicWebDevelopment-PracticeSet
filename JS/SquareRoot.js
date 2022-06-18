// Example 4: Square Root of a Number By Receiving Value From User.

const prompt = require("prompt-sync")();

const num = prompt("Enter The Number: ");
const result = Math.sqrt(num);   //Here, the Math.sqrt() method takes a number and returns its square root.
console.log("Square Root Of",num ,"Is",result);