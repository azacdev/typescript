// Generics
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory;
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const item: IPostBetter<String> = {
  id: 2,
  title: "I am coming for you",
  desc: "are you sure thats a good idea",
  extra: ["hello", "is it working"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const Item2: IPostEvenBetter<{ id: number; title: string }> = {
  id: 43,
  title: "i do post even better",
  desc: "desc is desc",
  extra: [{ id: 82, title: "just title" }],
};

const Item3: IPostEvenBetter<IAuthor> = {
  id: 43,
  title: "i do post even better",
  desc: "desc is desc",
  extra: [{ id: 82, username: "Julius"}],
};

const Item4: IPostEvenBetter<ICategory> = {
  id: 43,
  title: "i do post even better",
  desc: "desc is desc",
  extra: [{ id: 82, title: "why another title"}],
};