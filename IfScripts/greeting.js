var time = 18;
var greeting;

if (time < 10) {
  greeting = "Good Morning!";
} else if (time < 17) {
  greeting = "Good day!";
} else if (time < 24) {
  greeting = "Good evening!";
} else {
  greeting = Error;
}
console.log(greeting);
