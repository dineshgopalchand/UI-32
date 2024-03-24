// // initialization
// while(condition checking){
// // process
// // inc/desc
// }

// let row = 1;

// while (row <= 5) {
//   let patternStr = "";
//   for (let col = 1; col <= row; col++) {
//     patternStr += row;
//   }
//   console.log(patternStr);
//   row++;
// }

// do while
// let doRow = 1;

// do {
//   let patternStr = "";
//   for (let col = 1; col <= doRow; col++) {
//     patternStr += doRow;
//   }
//   console.log(patternStr);
//   doRow++;
// } while (doRow <= 5);

// for loop

// for (let row = 1; row <= 5; row++) {
//   let patternStr = "";
//   for (let col = 1; col <= row; col++) {
//     patternStr += row;
//   }
//   console.log(patternStr);
// }

var nameList = ["Dinesh", "Ryaz", "Afreen"];
console.log(nameList.length);
// var nameAddressList = [
//   ["Dinesh", "Gopal", "Chand"],
//   ["st1", "st2", "blr", 560036],
// ];

let isAvailable = false;
for (let index = 0; index < nameList.length; index++) {
  console.log(nameList[index]);
  if (nameList[index] === "Ryaz") {
    isAvailable = true;
    break;
  }
}
console.log(isAvailable);
let count = 0;
for (let index = 0; index < nameList.length; index++) {
  console.log(nameList[index]);
  if (nameList[index] === "Ryaz") {
    count++;
  }
}
console.log(count > 0 ? "Available" : "Missing");
// console.log(count ? "Available" : "Missing");
