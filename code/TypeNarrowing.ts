type User = {
  name: string;
  age: number;
  isWorking: boolean;
};

function isUser(obj: any): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.name === "string" &&
    typeof obj.age === "number" &&
    typeof obj.isWorking === "boolean"
  );
}

function showUserDetails(item: User | string) {
  if (isUser(item)) {
    return `Name: ${item.name}, Age: ${item.age}, Working: ${item.isWorking}`;
  }

  return "Showing details of string";
}

const item = {
  name: "prakash",
  age: 22,
  isWorking: true,
};

console.log(showUserDetails(item));
