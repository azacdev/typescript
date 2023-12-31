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

// cannot add a property that doesnt exist
// user.phone = "+123456"

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

// error cause we didnt use all properties
userObj = {
  username: "Abdul",
  age: 44,
};

// Also we cannot add any properties that doesnt exist
userObj = {
  username: "Abdul",
  age: 44,
  isAdmin: true,
  //   phone: "+123456"
};

userObj = {
  username: "Abdul",
  age: 44,
  isAdmin: true,
};

// if we've users and some of them have a phone number and the others dont
// then we use condition
let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

//option
let userObj3: {
  userName: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

userObj3 = {
  userName: "John",
  age: 33,
  phone: "+234",
  // option it has to be set to dark or light
  // theme: "pink"
  theme: "dark",
};
