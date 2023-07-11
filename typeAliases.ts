let func = (user: { userName: string; age: number; phone?: string }) => {
  console.log(user.userName);
};

type UserType = {
  userName: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.userName);
};

//prototype
type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times " + str);
};

// Option
type UserType2 = {
  usename: string;
  age: number;
  phome?: string;
  theme: "dark" | "light";
};

let userTheme: UserType2 = {
  usename: "Doe",
  age: 54,
  // option must be dark or light
  // theme: "pink"
  theme: "dark",
};
