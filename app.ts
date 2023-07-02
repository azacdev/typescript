// Number cannot be assigned to a string
let variable = "Hello World";
// variable = 55

// Error string cannot be assigned to a number
let age = 18;
// age = "eighteen"

// Number
let ageWithType: number = 22;
ageWithType = 21;

// String
let testString: string;
testString = "Hello";

// Boolean
let testBoolean: boolean;
testBoolean = true;

// Multiple Types
let testStringOrNumber: string | number;
// testStringOrNumber = []
testStringOrNumber = "10";
testStringOrNumber = 10;

// Arrays
let names = ["john", "jane", "james"];
// names.push(43)
let numbers = [3, 5, 66, 21, 1];
// numbers.push("number")

// String arrays
let testStringArray: string[];
// testStringArray = [2,3,4,5,6]
testStringArray = ["noun", "names", "things"];

// Numbers Array
let testNumbersArray: number[];
// testNumbersArray = [true, "two", 3]
testNumbersArray = [23, 5, 12, 55];

// Union Types
let textStringOrNumberArray: (string | number)[];
// textStringOrNumberArray = ["hello", true, 23, {}]
textStringOrNumberArray = ["hello", "world", 23];

// Objects

let user = {
  userName: "john",
  age: 22,
  isAdmin: false,
};

user.userName = "Anna";
// user.age = "eighteen"
user.age = 18;
// user.isAdmin = "no"
user.isAdmin = true;

// user.phone = "+123456"
// cannot add a property that doesnt exist

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

// userObj = {
//   username: "Abdul",
//   age: 44,
// };

// error cause we didnt use all properties also we cannot add anything else

userObj = {
  username: "Abdul",
  age: 44,
  isAdmin: true
};

