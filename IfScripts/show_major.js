var studentName = "Dillon";
var studentMajor = "CSCI";

var majorName;
var advisingLocation;

if (studentMajor == "CSCI") {
  majorName = "Computer Science";
  advisingLocation = "Sheppard Hall, Room 314";
} else if (studentMajor == "BIOL") {
  majorName = "Biology";
  advisingLocation = "Science Bldg, Room 310";
} else if (studentMajor == "ENG") {
  majorName = "English";
  advisingLocation = "Kerr Hall, Room 201";
} else if (studentMajor == "HIST") {
  majorName = "History";
  advisingLocation = "Kerr Hall, Room 114";
} else if (studentMajor == "MKT") {
  majorName = "Marketing";
  advisingLocation = "Westly Hall, Room 310";
}

console.log("Student:", studentName);
console.log("Major:", majorName);
console.log("Advising Location:", advisingLocation);
