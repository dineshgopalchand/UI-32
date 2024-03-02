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
//   SchoolName - upper camel case(Pascel Naming convention) -> full recommended

// variable(data) type
