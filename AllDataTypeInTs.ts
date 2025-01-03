// string

function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

/* discription:Represents textual data. Used to store words or text.
Example: function greet(name: string): string ensures that the name parameter is always a string.
 */

// number 

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 10)); // Output: 15

/* 
 discription:Represents numeric values (both integers and floating-point).
Example: function add(a: number, b: number): number ensures a and b are numbers and returns a number.
 */


// boolean

function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true

/* 

discription:Represents true/false values. Used for logical operations.
Example: function isEven(num: number): boolean checks whether a number is even and returns true or false.
 */

// any

function logValue(value: any): void {
    console.log(`Value: ${value}`);
}

logValue("Hello, World!"); // Output: Value: Hello, World!
logValue(123);             // Output: Value: 123
logValue({ key: "value" }); // Output: Value: [object Object]


/* 

discription

1)The any type in TypeScript allows a variable to hold any type of value, bypassing static type checking.
2)It can be useful when you are unsure of the type during development or when working with third-party 
3)libraries that don't have type definitions.

Caution: Using any can lead to runtime errors because it disables TypeScript’s type safety.
 */



// unknown

// The major difference between any and unknown is that TypeScript forces you to narrow or assert the type of unknown before performing any operations.

//For example, with any, you can directly call methods or access properties:
let value1: any = "hello";
console.log(value1.toUpperCase()); // Output: "HELLO"


// However, with unknown, you cannot do this directly:
let value2: unknown = "hello";
// Error: Object is of type 'unknown'
console.log(value1.toUpperCase()); 


/*
Represents a value of unknown type. Safer than any because it requires a type check before use.
Example: function processValue(value: unknown): void ensures that operations are only performed after type checks.
*/


//void

function logMessage(message: string): void {
    console.log(message);
}
logMessage("This is a message."); // Output: This is a message.
/*
Represents the absence of a return value. Commonly used for functions that don't return anything.
Example: function logMessage(message: string): void only logs the message and doesn't return anything.
*/


// null

function printIfNotNull(value: string | null): void {
    if (value !== null) {
        console.log(`Value: ${value}`);
    } else {
        console.log("Value is null.");
    }
}
printIfNotNull("Hello"); // Output: Value: Hello
printIfNotNull(null);    // Output: Value is null.
/*
Represents the intentional absence of a value. Often used with union types.
Example: function printIfNotNull(value: string | null): void handles both null and string values
*/

// undefined

function printIfDefined(value: string | undefined): void {
    if (value !== undefined) {
        console.log(`Value: ${value}`);
    } else {
        console.log("Value is undefined.");
    }
}
printIfDefined("Hello");    // Output: Value: Hello
printIfDefined(undefined); // Output: Value is undefined.
/*
Represents an uninitialized variable. Often used with union types.
Example: function printIfDefined(value: string | undefined): void checks if the value is defined before using it.
*/


// never

function throwError(message: string): never {
    throw new Error(message);
}

let result = throwError("Something went wrong!"); // TypeScript knows this will never return a value.


/*
The never type represents a value that never occurs. It is used to indicate that a function or expression will never return a value or terminate normally. This makes it quite useful for functions that always throw an error, or for cases where you have infinite loops.

In short, never is the type assigned to values that should never happen.

Key Use Cases for never
Functions that Throw Errors: Functions that throw exceptions (and thus never return a value) are assigned the never type.

Infinite Loops: Functions that contain infinite loops or similar constructs that never exit can also be typed as never.

Exhaustive Checks: never is useful in exhaustive checks, particularly in switch cases or conditional logic where you want to assert that all cases have been handled.
*/




// array

function getFirstElement(arr: number[]): number {
    return arr[0];
}

let arryoffun=[1, 2, 3]
console.log(getFirstElement(arryoffun)); // Output: 1

/*
Represents a collection of items of the same type.
Example: function getFirstElement(arr: number[]): number returns the first element of a number array.
*/


// tuple

function getNameAndAge(): [string, number] {
    return ["Alice", 25];
}
const [a, age] = getNameAndAge();
console.log(a, age); // Output: Alice 25
// You can have optional elements in a tuple using the ? operator, meaning that not every element needs to be present.
let person: [string, number?, boolean?] = ["Alice", 30];
console.log(person); // Output: ["Alice", 30]

let personWithStatus: [string, number?, boolean?] = ["Bob", 25, true];
console.log(personWithStatus); // Output: ["Bob", 25, true]


/*

A tuple in TypeScript is a special kind of array that allows you to store heterogeneous types (i.e., different types of data) in a fixed-length array. Tuples are great when you need to group different types of data together, such as a pair of values or more, where each value has a known, specific type.


Key Characteristics of Tuples
A tuple can store multiple values of different types.
The length of the tuple is fixed, meaning you can access and modify the elements based on their index.
Each element in a tuple has a defined type.
*/

// enum

enum Role {
    Admin,
    User,
    Guest
}

function getRole(role: Role): string {
    switch (role) {
        case Role.Admin:
            return "Admin";
        case Role.User:
            return "User";
        case Role.Guest:
            return "Guest";
    }
}
console.log(getRole(Role.Admin)); // Output: Admin


/*
 description:An enum (short for enumeration) is a special type in TypeScript that allows you to define a set of named constants. Enums are useful when you want to represent a collection of related values with meaningful names rather than using arbitrary numbers or strings.

Why Use Enums?
Readability: Enums provide meaningful names for numeric or string values, making the code more readable.
Maintainability: If you need to change the value of a constant, you only need to do it in one place — the enum definition.
Type Safety: TypeScript ensures that only valid enum values are used, providing type checking and preventing errors.
*/


// object

function printUser(user: { name: string; age: number }): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
printUser({ name: "Bob", age: 30 }); // Output: Name: Bob, Age: 30

/*
 description:Represents non-primitive types (e.g., objects, arrays).
Example: function printUser(user: { name: string; age: number }): void ensures the function accepts only objects with the specified structure.
*/

// union

function formatId(id: string | number): string {
    return `ID: ${id}`;
}
console.log(formatId(123));      // Output: ID: 123
console.log(formatId("abc123")); // Output: ID: abc123


/*
 description:A union type in TypeScript allows a variable to be one of several types. It means that a value can be one type or another, and you define it using the | (pipe) operator.

 Why Use Union Types?
 1)Flexibility: Allows a variable to hold values of different types.
2) Handling multiple types: Union types are useful when you want to accept more than one type for a variable,   parameter, or return value.
3) Type safety: While allowing multiple types, TypeScript still ensures that only those specific types are used.
*/


// intersection
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type EmployeeDetails = Person & Employee; // Intersection of Person and Employee

function printEmployeeDetails(employee: EmployeeDetails): void {
    console.log(`Name: ${employee.name}, Age: ${employee.age}`);
    console.log(`Employee ID: ${employee.employeeId}, Department: ${employee.department}`);
}

const employee: EmployeeDetails = {
    name: "John",
    age: 30,
    employeeId: 101,
    department: "Engineering",
};

printEmployeeDetails(employee); 
// Output:
// Name: John, Age: 30
// Employee ID: 101, Department: Engineering

/*
 description:An intersection type in TypeScript allows you to combine multiple types into a single one. It means that a value of an intersection type must satisfy all the types in the intersection.

You can think of an intersection type as something that "joins" several types, so the resulting type contains all the properties of each type involved.
*/









