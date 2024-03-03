// 1
// 22
// 333
// 4444
// 55555

for (let row = 1; row <= 5; row++) {
  let patternStr = "";
  for (let col = 1; col <= row; col++) {
    patternStr += row;
  }
  console.log(patternStr);
}
