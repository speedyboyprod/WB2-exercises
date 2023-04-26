var a = 25;
var b = 66;
var c = 59;

var min;
if (a < b && a < c) {
  min = a;
} else if (b < a && b < c) {
  min = b;
} else if (c < a && c < b) {
  min = c;
}

var max;
if (a > b && a > c) {
  max = a;
} else if (b > a && b > c) {
  max = b;
} else if (c > a && c > b) {
  max = c;
}

console.log("The minimum number is", min);
console.log("The maximum number is", max);
