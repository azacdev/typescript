let sayHi = () => {
  console.log("Hello World");
};

// sayHi = "hello"

// Defining function return type
let funcReturnString = (): string => {
  console.log("string");
  return "Hello World";
  // return 30
};

// Arguments
let multiple = (num: number) => {
  return num * 2;
};

// both top and bottom are the same
let multiple2 = (num: number): number => {
  return num * 2;
};

// void performs an operation and return nothing
let multiple3 = (): void => {
  // return num*2
  // do something
};

// condition
let sum = (num1: number, num2: number, num3?: number) => {
  return num1 + num2;
};

sum(5, 7);