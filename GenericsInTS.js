function getLastItem(array1) {
    return array1[array1.length - 1];
}
var numbers = [1, 2, 3, 4, 5];
console.log(getLastItem(numbers)); // Output: 5
var fruits = ["apple", "banana", "cherry"];
console.log(getLastItem(fruits)); // Output: 'cherry'
function createUser(user) {
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
var user1 = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
};
createUser(user1);
// User with only required properties
var user2 = {
    id: 2,
    name: "Jane Smith",
};
createUser(user2);
var funforGenUse = function (value12) {
    return value12;
};
console.log("this is string::", funforGenUse("helloWorld"));
console.log("this is string::", funforGenUse(12));
// using union
var returnFnwithoutGen = function (value25) {
    return value25;
};
console.log("this is string::", returnFnwithoutGen("prakash is good boy his age is"));
console.log("this is string::", returnFnwithoutGen(25));
console.log("this is string::", returnFnwithoutGen(true));
