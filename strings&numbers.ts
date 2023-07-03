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