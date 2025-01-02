Basic Level

Q1) What is TypeScript? How is it different from JavaScript?
"TypeScript is a superset of JavaScript. It adds robust features like static typing and others, making development easier and enabling better scalability."

Differences between JavaScript and TypeScript:

1. Static Typing:

   - In JavaScript, variables are dynamically typed, and the data type is determined at runtime. For example, let or var can hold any data type, which can lead to runtime errors.
   - In TypeScript, you can define variable types (e.g., string, number, boolean), which ensures type safety at compile time.

2. Security and Robustness:
   TypeScript helps avoid errors by catching them during development (compile-time).
   The static type system makes your code more predictable and less prone to runtime bugs.

   \*\*\*Example
   JavaScript Example (Dynamic Typing)
   let message = "Hello, world!"; // Initially a string
   message = 123; // Now it's a number (no error in JS)

   console.log(message.toLowerCase());
   // This will throw a runtime error because 123 is not a string.

<!-- In JavaScript, variables can change types dynamically, which might lead to errors that are only caught during runtime. -->

TypeScript Example (Static Typing)
let message: string = "Hello, world!"; // Explicitly declare as string
message = 123; // TypeScript Error: Type '123' is not assignable to type 'string'.
console.log(message.toLowerCase());
// This code is safe because TypeScript ensures 'message' is always a string.

<!-- Here, TypeScript catches the error at compile-time, ensuring type safety and preventing the runtime crash. -->

Q2) What are the benefits of using TypeScript?

1. Static Typing:
   TypeScript enforces type definitions, making it easier to catch errors during development rather than at runtime.

2. Improved Code Readability and Maintainability:
   Explicit types make the code self-documenting, helping developers understand the codebase quickly.

3. Early Error Detection:
   TypeScript catches type-related errors at compile-time, reducing the chances of runtime issues.

4. Scalability:
   TypeScript's robust typing system makes it easier to maintain and scale large codebases.

Q3) What are TypeScript types? Can you name some common types?
TypeScript types are annotations used to specify the type of variables, functions, or objects. This helps ensure that the data being used is of the expected type, making the code safer and more predictable.

Some of the most common types in TypeScript include:

string – For text values.

number – For numeric values.

boolean – For true/false values.

unknown – For variables whose type is not known yet.

void – For functions that do not return a value.

null and undefined – Represent null or undefined values.

example is given in exampleOfInvQuestion.ts

Q4) What is the difference between any and unknown?

Difference Between any and unknown

1.  any:

. The any type allows you to assign any type of value to a variable, and TypeScript will not perform any type checking on that value.
. You can perform any operations on a value of type any without TypeScript raising any errors, regardless of the actual type of the value.

Example:
let a: any = "prakash";
console.log(a.toUpperCase()); // Output: PRAKASH

. In this case, since a is of type any, TypeScript allows you to call .toUpperCase() without any issues, even though you could have assigned a non-string value to a.

2. unknown:

. The unknown type, on the other hand, is much safer than any. While you can assign any value to an unknown variable, TypeScript will not allow you to perform any operations on that value unless you narrow it down to a specific type.
. You must first check or assert the type of an unknown value before performing operations like string methods, mathematical operations, etc

Example:
let a: unknown = "prakash";

// This will cause an error because TypeScript doesn't know if `a` is a string
console.log(a.toUpperCase()); // Error: Object is of type 'unknown'

To perform operations on an unknown value, you must narrow the type, usually using a type guard like typeof or a type assertion

let a: unknown = "prakash";

if (typeof a === "string") {
console.log(a.toUpperCase()); // Output: PRAKASH
}

5. What are interfaces in TypeScript? How are they different from type aliases?

An interface in TypeScript acts as a contract that defines the structure of an object, ensuring that the object adheres to a specific set of properties and methods.

Key features of interfaces:

1. They describe the shape of objects, including their properties and methods.
2. They can be extended to inherit properties and methods from other interfaces.
3. They enforce consistency across different parts of your code.

Example of an Interface:

interface Person {
name: string;
age: number;
greet(): void;
}

const person: Person = {
name: "Alice",
age: 30,
greet() {
console.log(`Hello, ${this.name}`);
}
};

person.greet(); // Output: Hello, Alice

How Are Interfaces Different From Type Aliases?

Although interfaces and type aliases can often be used interchangeably to define object shapes, they have some important differences:

1. Declaration Merging

.Interfaces support declaration merging, allowing you to define the same interface multiple times, and TypeScript will merge them.

interface Animal {
name: string;
}

interface Animal {
age: number;
}

const cat: Animal = {
name: "Whiskers",
age: 3
};

. Type Aliases do not support declaration merging. If you declare the same type alias twice, TypeScript will throw an error.

type Animal = {
name: string;
};

// Error: Duplicate identifier 'Animal'.
type Animal = {
age: number;
};

2. Extending vs. Intersection

Interfaces use the extends keyword to inherit properties from other interfaces.
Example:

interface Animal {
name: string;
}

interface Dog extends Animal {
breed: string;
}

const dog: Dog = {
name: "Buddy",
breed: "Labrador"
};

. Type Aliases use the & (intersection) operator to combine types, but they cannot use extends.

Example:
type Animal = {
name: string;
};

type Dog = Animal & {
breed: string;
};

const dog: Dog = {
name: "Buddy",
breed: "Labrador"
};

3. Use Cases

. Interfaces are primarily used to define object structures and are particularly useful in object-oriented programming (OOP) where classes can implement them.

. Type Aliases are more flexible and can be used to define unions, intersections, and complex types (e.g., tuples, arrays, functions).

4. Class Implementation

. Interfaces can be implemented by classes, ensuring that the class adheres to a specific structure

Example:

interface Person {
name: string;
age: number;
greet(): void;
}

class Student implements Person {
name: string;
age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

}

const student = new Student("John", 20);
student.greet(); // Output: Hello, my name is John

.Type Aliases cannot be implemented by classes.
