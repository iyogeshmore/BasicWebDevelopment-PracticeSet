// Example 6: Check if a Number is Odd or Even By Receiving Value From User.

const prompt = require("prompt-sync")();

const num = prompt(" Enter A Number ");
if (num % 2 == 0) {
    console.log(" The Number is Even ");
    
}
else{
    console.log(" The Number is odd ");
}