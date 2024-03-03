var someNumber = 33;
// console.log("30 is even number");
// ternary operator ?:
console.log(
  someNumber + " is " + (someNumber % 2 === 0 ? "even" : "odd") + " number"
);
console.log(
  `${someNumber}  is  ${someNumber % 2 === 0 ? "even" : "odd"}  number....`
);

// var result='';
// if(someNumber % 2===0){
//     result='even';
// }else{
//     result='odd';
// }
var result = "odd";
if (someNumber % 2 === 0) {
  result = "even";
}
console.log(someNumber + " is " + result + " number");

var score = 75;
console.log(score);
var grade = "";
// if (score >= 90) {
//   grade = "A";
// } else {
//   if (score > 70) {
//     grade = "B";
//   } else {
//     if (score > 50) {
//       grade = "C";
//     } else {
//       grade = "D";
//     }
//   }
// }
if (score >= 90) {
  grade = "A";
} else if (score > 70) {
  grade = "B";
} else if (score > 50) {
  grade = "C";
} else {
  grade = "D";
}

console.log(grade);

// var prize = 0;
// if (grade == "A") {
//   prize = 1500;
// } else if (grade == "B") {
//   prize = 1000;
// } else if (grade == "C") {
//   prize = 500;
// } else {
//   prize = 5;
// }
switch (grade) {
  case "A":
    prize = 1500;
    console.log({ prize });
    break;
  case "B":
    prize = 1000;
    console.log({ prize });
    break;
  case "C":
    prize = 500;
    console.log({ prize });
    break;
  default:
    prize = 5;
    console.log({ prize });
    break;
}

console.log(prize);

// Loop=================>
// for
// while
// do while
// foreach
// forof
// forin

// add all number between 1-50000
// for(initialization; condition checking; increament/descre){}
let sum = 0;
for (let num = 1; num <= 5000; num++) {
  if (num % 2 === 0) {
    sum += num;
  }
}
console.log(sum);
