// var nameList1 = ["Dinesh", "Gopal", "Chand"];
// var nameList2 = ["Riyaz", "Ahmad"];
// var nameAddressList = [nameList1, ["st1", "st2", "blr", 560036]];

// // var newNameList = [];
// // for (const namVal of nameList1) {
// //   newNameList[newNameList.length] = namVal;
// // }
// // for (const namVal of nameList2) {
// //   newNameList[newNameList.length] = namVal;
// // }

// // console.log(newNameList);

// const mergedNameList = [...nameList1, ...nameList2];
// console.log(mergedNameList);
// // console.log([nameList1, nameList2]);

// var newNameList = nameList1;
// var newNameList1 = [...nameList1]; // true copy(single dimension)
// console.log({ newNameList, nameList1, newNameList1 });

// nameList1.push("xyz");
// console.log({ newNameList, nameList1, newNameList1 });
// newNameList.push("xyzzzzz");
// console.log({ newNameList, nameList1, newNameList1 });

// const nameAddressListCopy = [...nameAddressList]; // deep copy only first level(multi dimension)
// // const nameAddressListCopy = [
// //     ...[[...nameAddressList[0]], [...nameAddressList[1]]],
// //   ];

// var nameList1 = ["Dinesh", "Gopal", "Chand"];
// var nameList2 = ["Riyaz", "Ahmad"];
// var nameList3 = ["Afreen"];
// var nameAddressList = [nameList1, ["st1", "st2", "blr", 560036]];

// // const concatenatedValue = nameList1.concat(nameList2, nameList3);
// const concatenatedValue = [].concat(nameList1, nameList2, nameList3, nameList2);
// console.log({ concatenatedValue });

// // concatenatedValue.shift();
// // console.log({ concatenatedValue });

// // shift(from beginning)/pop(from end) - to delete node
// // unshift(from beginning)/push(from end) - to add new node

// // concatenatedValue.splice(0, 0, "zaa");
// // concatenatedValue.splice(0, 3, "zaa");
// concatenatedValue.splice(5, 3, "zaa");
// console.log({ concatenatedValue });

// sort

var nameList1 = ["Dinesh", "Gopal", "Chand", "chand", "a", "ab", "az", "ac"];
// nameList1.sort();
// nameList1.sort(function (n1, n2) {
//   if (n1.length > n2.length) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// nameList1.sort((n1, n2) => (n1.length > n2.length ? 1 : -1));
nameList1
  .sort()
  .reverse()
  .sort((n1, n2) => (n1.length > n2.length ? 1 : -1));
const formattedList = nameList1.map((item) => {
  return { name: item, firstChar: item[0].toUpperCase() };
});
console.log({ nameList1, formattedList });
// ['a',     'ab',
// 'ac',    'az',
// 'Chand', 'Gopal',
// 'chand', 'Dinesh']

// [{ name:'a'},{name:'ab'}  ,...  ]

// nameListObj = [];
// for (const name of nameList1) {
//   nameListObj.push({ name, firstChar: name[0].toUpperCase() });
// }
// console.log(nameListObj);

// console.log(nameList1.filter((name) => name.indexOf("c") != -1));
console.log(nameList1.filter((name) => name.match(/^c/i)));
