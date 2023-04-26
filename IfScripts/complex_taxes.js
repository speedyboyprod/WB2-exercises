var annualGross = 250 * 52;
var taxRate;

if (filingStatus == "Single") {
  if (annualGross < 12_000) taxRate = 0.05;
} else if (filingStatus == "Joint") console.log(federalTax);
