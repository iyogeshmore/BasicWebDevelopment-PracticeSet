// Example 6: Check if a number is Positive, Negative, or Zero By Receiving Value From User.

const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a Number: ")) ;

if (num > 0) {
    console.log("The Number Is Positive ");
}

else if (num == 0 ){
    console.log("The Number Is Zero");
}

else{
    console.log("The Number is Negative");
}