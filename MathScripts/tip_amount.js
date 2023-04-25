var sandwich = 15.56;
var fries = 3.25;
var drink = 1.50;
var tipPercent = 0.15;

var foodBill = sandwich + fries + drink;
var tipAmount = foodBill * tipPercent;

console.log("The tip on a " + foodBill.toFixed(2) ,"food bill is " + tipAmount.toFixed(2));