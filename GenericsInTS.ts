function getLastItem(array1: string | any[]) {
  return array1[array1.length - 1];
}

const numbers = [1, 2, 3, 4, 5];
console.log(getLastItem(numbers)); // Output: 5

const fruits = ["apple", "banana", "cherry"];
console.log(getLastItem(fruits)); // Output: 'cherry'

// Create an interface for a User object with optional properties and enforce it in a function.

interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  age?: number; // Optional property
}

function createUser(user: User): void {
  console.log("User Created:");
  console.log("ID:", user.id);
  console.log("Name:", user.name);
  if (user.email) {
    console.log("Email:", user.email);
  }
  if (user.age) {
    console.log("Age:", user.age);
  }
}

// User with all properties
const user1: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
};
createUser(user1);

// User with only required properties
const user2: User = {
  id: 2,
  name: "Jane Smith",
};
createUser(user2);

const funforGenUse = <T>(value12: T): T => {
  return value12;
};

console.log("this is string::", funforGenUse<string>("helloWorld"));
console.log("this is string::", funforGenUse<number>(12));

// using union

const returnFnwithoutGen = (
  value25: string | number | boolean
): string | number | boolean => {
  return value25;
};

console.log(
  "this is string::",
  returnFnwithoutGen("prakash is good boy his age is")
);
console.log("this is string::", returnFnwithoutGen(25));

console.log("this is string::", returnFnwithoutGen(true));
