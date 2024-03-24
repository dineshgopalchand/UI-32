// // initialization
// while(condition checking){
// // process
// // inc/desc
// }

let row = 1;

while (row <= 0) {
  let patternStr = "";
  for (let col = 1; col <= row; col++) {
    patternStr += row;
  }
  console.log(patternStr);
  row++;
}
