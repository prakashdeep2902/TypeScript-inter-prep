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

2. What are the benefits of using TypeScript?

1) Static Typing:
   TypeScript enforces type definitions, making it easier to catch errors during development rather than at runtime.

2) Improved Code Readability and Maintainability:
   Explicit types make the code self-documenting, helping developers understand the codebase quickly.

3) Early Error Detection:
   TypeScript catches type-related errors at compile-time, reducing the chances of runtime issues.

4) Scalability:
   TypeScript's robust typing system makes it easier to maintain and scale large codebases.
