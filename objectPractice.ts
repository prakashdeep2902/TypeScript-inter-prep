// type alish

type userType = {
  userName: string;
  age: number;
  isStudent: boolean;
  address: object;
  UserId?: number;
};

const addharDetails: userType = {
  userName: "prakash",
  age: 27,
  isStudent: false,
  address: {
    city: "pune",
    ct: "india",
  },
};

const person12: userType = {
  userName: "akash",
  age: 37,
  isStudent: false,
  address: {
    city: "blg",
    ct: "india",
  },
};

console.log(person12);

console.log(addharDetails);
