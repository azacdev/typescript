//Interface
interface Iuser {
  username: string;
  age: number;
  email: string;
}

interface Iemployee extends Iuser {
  employeeId: number;
}

const employee: Iemployee = {
  username: "Bayek",
  age: 40,
  email: "bayek@ubisoft",
  employeeId: 1,
};

const client: Iuser = {
  username: "thawn",
  age: 50,
  email: "thawn@theboss",
};
