let numberVal = 5;
let squareVal = numberVal ** 2;
console.log(`Square value of ${numberVal} is ${squareVal}`);

numberVal = 15;
squareVal = numberVal ** 2;
console.log(`Square value of ${numberVal} is ${squareVal}`);

numberVal = 25;
squareVal = numberVal ** 2;
console.log(`Square value of ${numberVal} is ${squareVal}`);

function getSqVal(val = 10) {
  let squareVal = val ** 2;
  return `Square value of ${val} is ${squareVal}`;
}

console.log(getSqVal(1));
console.log(getSqVal(15));
console.log(getSqVal(155));
console.log(getSqVal(21));
console.log(getSqVal(331));

console.log(getSqVal(9));
console.log(getSqVal());

// function <functionName>(agr1,arg2){
//   // expression
//    return some value
// }

function getPowVal(val = 5, pow = 2) {
  let squareVal = val ** pow;
  return `Power ${pow} of ${val} is ${squareVal}`;
}
console.log(getPowVal(29));
console.log(getPowVal());
console.log(
  (function (val = 5, pow = 2) {
    let squareVal = val ** pow;
    return `Powersss ${pow} of ${val} is ${squareVal}`;
  })(45, 344)
); // self invoking function

const getPowerVal = function (val = 5, pow = 2) {
  let squareVal = val ** pow;
  return `(Anonymous)Power ${pow} of ${val} is ${squareVal}`;
}; // assign Anonymous function in a variable
console.log(getPowerVal(34, 6));

// Fat arrow(=>)/arrow function   => ->

const getPowerVal1 = (val = 5, pow = 2) => {
  const squareVal = val ** pow;
  return `(Anonymous)Power ${pow} of ${val} is ${squareVal}`;
};

// const showLog = (msg) => {
//   console.log(msg);
// };
const showLog = (msg) => console.log(msg);

showLog("I am good");
// const sqrtVal = (num) => Math.sqrt(num);
const sqrtVal = (num) => {
  return Math.sqrt(num);
};

console.log(sqrtVal(4));

function showName(firstName, middleName, lastName) {
  nameVal = firstName + " " + middleName + " " + lastName;
  console.log(nameVal);
}

showName("Dinesh", "Gopal", "chand");

// function sumVal(num1, num2, num3, num4) {
//   return num1 + num2 + num3 + num4;
// }
function sumVal(...numbers) {
  // console.log(numbers);
  return numbers.reduce((sum, num) => {
    return sum + num;
  }, 0);
}
console.log(sumVal(244, 4, 4, 2, 3, 4, 34, 2, 2, 32, 5, 43, 46543));
