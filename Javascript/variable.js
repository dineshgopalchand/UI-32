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
