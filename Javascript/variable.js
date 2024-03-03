console.log("Javascript variable~~");
var studentName = "Riyaz";
var studentName = "Ahmad";
studentName = "Riyaz";

let locationName = "Bangalore";
locationName = "Chennai";

const locationPinCode = "560037";
// locationPinCode = "560037"; x wrong

// var => Re-declaration and reassignment allowed
// let => Re-declaration not allowed but and reassignment allowed
// const =>  Re-declaration and reassignment are not allowed
console.log(studentName, locationName, locationPinCode);
console.log({ studentName, locationName, locationPinCode });
console.log({
  name: studentName,
  location: locationName,
  pin: locationPinCode,
});
console.table({
  name: studentName,
  location: locationName,
  pin: locationPinCode,
});

// naming convention
// varible name shouldn't start with number
// a-z, A-Z,_,$ - Allowed first char of variable name
// a-z, A-Z,_,$,0-9 - allowed char in variable name

// var schoolname - don't use
// var school_name - snake case - allowed but not fully recommended
// var schoolName - camel case -> full recommended

// for constants
// const schoolName - camel case -> full recommended
// const SCHOOL_NAME - recommended

//  for classes
//   SchoolName - upper camel case(Pascal Naming convention) -> full recommended

// variable(data) type
// number
var numberVal = 2;
var totalScore = 900;
console.log(numberVal, typeof numberVal);
// string
const nameVal = "Dinesh";
console.log(nameVal, typeof nameVal);
const nameVal1 = "Gopal";
console.log(nameVal1, typeof nameVal1);
const nameVal2 = `Chand`;
console.log(nameVal2, typeof nameVal2);
// const nameVal3 = new String("Chand"); // never use it
// console.log(nameVal3, typeof nameVal3);

// Boolean
const isActive = true;
console.log(isActive, typeof isActive);

// undefined
var someVariable;
console.log(someVariable, typeof someVariable);

// null
var nullValue = null;
console.log(nullValue, typeof nullValue);

// Array
// var nameList = new Array("Dinesh", "Gopal", "Chand", 1); // not required

// console.log(nameList, typeof nameList);
var nameList1 = ["Dinesh", "Gopal", "Chand", 1];

console.log({
  value: nameList1,
  typeof: typeof nameList1,
  isArray: Array.isArray(nameList1),
  length: nameList1.length,
  firstVal: nameList1[0],
});

var nameAddressList = [
  ["Dinesh", "Gopal", "Chand"],
  ["st1", "st2", "blr", 560036],
];

console.log(
  nameAddressList,
  typeof nameAddressList,
  Array.isArray(nameAddressList)
);

// Object type
var nameAddressObject = {
  name: { fname: "Dinesh", mname: "Gopal", lname: "Chand" },
  address: { street1: "st1", street2: "st2", city: "blr", pincode: 560036 },
};

console.log("byusing dot operator :", nameAddressObject.name.lname);
console.log("as an array :", nameAddressObject["name"]["lname"]);

console.log({
  value: nameAddressObject,
  typeof: typeof nameAddressObject,
  isArray: Array.isArray(nameAddressObject),
  firstVal: nameAddressObject.name.fname,
});

var nameList = ["Dinesh", "Gopal", "Chand"];
console.log(nameList[1]);
var nameAddressList = [
  nameList,
  ["st1", "st2", "blr", 560036, ["Dinesh1", "Gopal1", "Chand1"]],
];
console.log(nameAddressList[0]);
console.log(nameAddressList[0][2]);
console.log(nameAddressList[1][4][1]);

var nameAddressList = [
  nameList,
  ["st1", "st2", "blr", 560036, ["Dinesh1", "Gopal1", "Chand1"]],
];
console.log(nameAddressList[1][3]);
console.log(nameAddressList[1][4][1]);
nameAddressList[1][3] = 560037;
console.log(nameAddressList);
console.log(nameAddressList[1][3]);
nameAddressList[5] = "some value"; // not recommended to update any value by using index
console.log(nameAddressList);
console.log(nameAddressList[0]);
console.log(nameAddressList[1]);
console.log(nameAddressList[2]);
console.log(nameAddressList[3]);
console.log(nameAddressList[4]);
console.log(nameAddressList[5]);
