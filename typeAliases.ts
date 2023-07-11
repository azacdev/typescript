let func = (user: { userName: string; age: number; phone?: string }) => {
  console.log(user.userName);
};

type UserType = {
  userName: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log();
};
