// Example 5: Calculate the Area of a Triangle By Receiving Value From User.

const prompt = require("prompt-sync")();

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

const areaValue = (baseValue * heightValue) / 2;
console.log("The area of the triangle is " +areaValue);