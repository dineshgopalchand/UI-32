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

for (let row = 1; row <= 5; row++) {
  let patternStr = "";
  for (let col = 1; col <= row; col++) {
    patternStr += row;
  }
  console.log(patternStr);
}
