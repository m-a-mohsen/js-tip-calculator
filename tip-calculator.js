const mealCost = 30;
const tipPercentage = 10;

let tipAmont = 0;
let totalCost = 0;

tipAmont = mealCost * tipPercentage / 100;
totalCost = mealCost + tipAmont;

console.log(`The total cost of your bill is: ${totalCost} euros`)