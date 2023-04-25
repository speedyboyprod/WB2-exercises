var savingsAcc = 15000;
var intrestRate = 10;

var yearsToDouble = 72 / intrestRate;
var doubleAmount = savingsAcc * 2

console.log(`at ${intrestRate}% intrest rate, your savings account will be worth $${doubleAmount.toFixed(2)} in ${yearsToDouble} years`)