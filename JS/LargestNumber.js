// Example 7: Find the Largest Among Three Numbers By Receiving Value From User.

const prompt = require("prompt-sync")();

const num1 =parseFloat(prompt("Enter First Number: ")) ;
const num2 = parseFloat(prompt("Enter Second Number: ")) ;
const num3 = parseFloat(prompt("Enter Third Number: ")) ;
let largest;

if (num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3){
    largest = num2
}
else{
    largest = num3;
}
console.log("The Largest Number is:",largest);


// Example 7 -2 : Find the Largest and Smallest  Among Three Numbers By Receiving Value From User Using Math.max()
{
const prompt = require("prompt-sync")();

const num1 =parseFloat(prompt("Enter First Number: ")) ;
const num2 = parseFloat(prompt("Enter Second Number: ")) ;
const num3 = parseFloat(prompt("Enter Third Number: ")) ;
const largest = Math.max(num1,num2,num3)
const smallest = Math.min(num1,num2,num3)

console.log("Largest Number is:" , largest ," Smallest Number is:",smallest);
}