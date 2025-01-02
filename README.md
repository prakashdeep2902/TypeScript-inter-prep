Here is a structured way of presenting the content from the README.md file:

---

# Basic Level

## Q1) What is TypeScript? How is it different from JavaScript?

"TypeScript is a superset of JavaScript. It adds robust features like static typing and others, making development easier and enabling better scalability."

### Differences between JavaScript and TypeScript:

1. **Static Typing:**

   - In JavaScript, variables are dynamically typed, and the data type is determined at runtime. For example, `let` or `var` can hold any data type, which can lead to runtime errors.
   - In TypeScript, you can define variable types (e.g., string, number, boolean), which ensures type safety at compile time.

2. **Security and Robustness:**
   - TypeScript helps avoid errors by catching them during development (compile-time).
   - The static type system makes your code more predictable and less prone to runtime bugs.

### Example

#### JavaScript Example (Dynamic Typing)

```javascript
let message = "Hello, world!"; // Initially a string
message = 123; // Now it's a number (no error in JS)

console.log(message.toLowerCase());
// This will throw a runtime error because 123 is not a string.
```

#### TypeScript Example (Static Typing)

```typescript
let message: string = "Hello, world!"; // Explicitly declare as string
message = 123; // TypeScript Error: Type '123' is not assignable to type 'string'.
console.log(message.toLowerCase());
// This code is safe because TypeScript ensures 'message' is always a string.
```

## Q2) What are the benefits of using TypeScript?

1. **Static Typing:**

   - TypeScript enforces type definitions, making it easier to catch errors during development rather than at runtime.

2. **Improved Code Readability and Maintainability:**

   - Explicit types make the code self-documenting, helping developers understand the codebase quickly.

3. **Early Error Detection:**

   - TypeScript catches type-related errors at compile-time, reducing the chances of runtime issues.

4. **Scalability:**
   - TypeScript's robust typing system makes it easier to maintain and scale large codebases.

## Q3) What are TypeScript types? Can you name some common types?

TypeScript types are annotations used to specify the type of variables, functions, or objects. This helps ensure that the data being used is of the expected type, making the code safer and more predictable.

### Some common types in TypeScript:

- `string` – For text values.
- `number` – For numeric values.
- `boolean` – For true/false values.
- `unknown` – For variables whose type is not known yet.
- `void` – For functions that do not return a value.
- `null` and `undefined` – Represent null or undefined values.

Example is given in `exampleOfInvQuestion.ts`.

## Q4) What is the difference between any and unknown?

### Difference Between `any` and `unknown`

1. **`any`:**

   - The `any` type allows you to assign any type of value to a variable, and TypeScript will not perform any type checking on that value.
   - You can perform any operations on a value of type `any` without TypeScript raising any errors, regardless of the actual type of the value.

   #### Example:

   ```typescript
   let a: any = "prakash";
   console.log(a.toUpperCase()); // Output: PRAKASH
   ```

   - In this case, since `a` is of type `any`, TypeScript allows you to call `.toUpperCase()` without any issues, even though you could have assigned a non-string value to `a`.

2. **`unknown`:**

   - The `unknown` type, on the other hand, is much safer than `any`. While you can assign any value to an `unknown` variable, TypeScript will not allow you to perform any operations on that value unless you narrow the type first.
   - You must first check or assert the type of an `unknown` value before performing operations like string methods, mathematical operations, etc.

   #### Example:

   ```typescript
   let a: unknown = "prakash";

   // This will cause an error because TypeScript doesn't know if `a` is a string
   console.log(a.toUpperCase()); // Error: Object is of type 'unknown'

   // Narrowing the type
   if (typeof a === "string") {
     console.log(a.toUpperCase()); // Output: PRAKASH
   }
   ```

## Q5) What are interfaces in TypeScript? How are they different from type aliases?

An interface in TypeScript acts as a contract that defines the structure of an object, ensuring that the object adheres to a specific set of properties and methods.

### Key features of interfaces:

1. They describe the shape of objects, including their properties and methods.
2. They can be extended to inherit properties and methods from other interfaces.
3. They enforce consistency across different parts of your code.

### Example of an Interface:

```typescript
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
  },
};

person.greet(); // Output: Hello, Alice
```

### How Are Interfaces Different From Type Aliases?

Although interfaces and type aliases can often be used interchangeably to define object shapes, they have some important differences:

1. **Declaration Merging:**

   - Interfaces support declaration merging, allowing you to define the same interface multiple times, and TypeScript will merge them.

   ```typescript
   interface Animal {
     name: string;
   }

   interface Animal {
     age: number;
   }

   const cat: Animal = {
     name: "Whiskers",
     age: 3,
   };
   ```

   - Type Aliases do not support declaration merging. If you declare the same type alias twice, TypeScript will throw an error.

   ```typescript
   type Animal = {
     name: string;
   };

   // Error: Duplicate identifier 'Animal'.
   type Animal = {
     age: number;
   };
   ```

2. **Extending vs. Intersection:**

   - Interfaces use the `extends` keyword to inherit properties from other interfaces.

   ```typescript
   interface Animal {
     name: string;
   }

   interface Dog extends Animal {
     breed: string;
   }

   const dog: Dog = {
     name: "Buddy",
     breed: "Labrador",
   };
   ```

   - Type Aliases use the `&` (intersection) operator to combine types, but they cannot use `extends`.

   ```typescript
   type Animal = {
     name: string;
   };

   type Dog = Animal & {
     breed: string;
   };

   const dog: Dog = {
     name: "Buddy",
     breed: "Labrador",
   };
   ```

3. **Use Cases:**

   - Interfaces are primarily used to define object structures and are particularly useful in object-oriented programming (OOP) where classes can implement them.
   - Type Aliases are more flexible and can be used to define unions, intersections, and complex types (e.g., tuples, arrays, functions).

4. **Class Implementation:**

   - Interfaces can be implemented by classes, ensuring that the class adheres to a specific structure.

   ```typescript
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
   ```

   - Type Aliases cannot be implemented by classes.

---

This structured format provides a clear and organized presentation of the content.

## Q6) What is the purpose of the readonly modifier in TypeScript?

The readonly modifier in TypeScript is used to make properties of an object immutable after they are initialized. This means that once a readonly property is assigned a value, it cannot be modified.

It is often used to enforce immutability and prevent accidental changes to important properties.

### Key Features of readonly Modifier ?

# Applies to Properties:# It can be applied to object properties to ensure they cannot be reassigned after initialization.

# Compile-Time Enforcement:# TypeScript will throw an error if you try to modify a readonly property, but it does not enforce immutability at runtime.

Class Members: You can use readonly in class properties to ensure they are immutable after being assigned.

Example of readonly Modifier

1. Readonly in Objects

interface Point {
readonly x: number;
readonly y: number;
}

const point: Point = { x: 10, y: 20 };

console.log(point.x); // Output: 10

point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property

In this example, the x and y properties of the Point object are marked as readonly. Once they are initialized, they cannot be reassigned.

2.  Readonly in Classes
    class Car {
    readonly brand: string;

        constructor(brand: string) {
            this.brand = brand;
        }

    }

const myCar = new Car("Toyota");
console.log(myCar.brand); // Output: Toyota

myCar.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property

Here, the brand property in the Car class is marked as readonly. It can only be assigned in the constructor and cannot be changed afterward.

3. Readonly Arrays

const numbers: ReadonlyArray<number> = [1, 2, 3];

numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'
numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading

console.log(numbers); // Output: [1, 2, 3]

When to Use readonly

1)Immutable Data: Use readonly when you want to create immutable objects or ensure certain properties cannot be modified after initialization.
2)Prevent Bugs: It helps avoid accidental changes to critical data in your codebase.
3)Improve Type Safety: Ensures that developers adhere to constraints on how data should be handled.

Difference Between readonly and const

. readonly: Used for properties of objects and class members. It ensures immutability for the lifetime of the object but allows initialization at runtime.
. const: Used for variables. It ensures the variable reference cannot be reassigned but does not affect the mutability of the value it refers to

Example:

const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed, as `const` only applies to the variable `obj`, not its contents.

const readonlyObj: { readonly name: string } = { name: "Alice" };
readonlyObj.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property

7. What is Type Inference in TypeScript?

Type inference is the ability of the TypeScript compiler to automatically determine the type of a variable, expression, or function based on its value, usage, or context without explicitly specifying the type.

TypeScript uses type inference to reduce the need for manually annotating types, making the code cleaner and more concise while still maintaining type safety.

Benefits of Type Inference

1. Reduces Boilerplate: Eliminates the need for explicit type annotations in many cases.
2. Improves Readability: Makes the code cleaner and easier to read.
3. Maintains Type Safety: Ensures type correctness without requiring manual annotations.

Q8) Union Types and Intersection Types in TypeScript
Union types and intersection types are two powerful features in TypeScript that allow for flexible and precise type definitions. Let's break them down with examples

1. Union Types

A union type in TypeScript allows a variable to hold a value of one of several types. It is defined using the | (pipe) symbol.

Syntax
type UnionType = Type1 | Type2 | Type3;

Purpose
Union types are used when a value can belong to multiple possible types.

Example 1: Union with Basic Types

function printId(id: string | number) {
if (typeof id === "string") {
console.log(`ID is a string: ${id.toUpperCase()}`);
} else {
console.log(`ID is a number: ${id}`);
}
}

printId("abc123"); // Output: ID is a string: ABC123
printId(101); // Output: ID is a number: 101

Here, the id parameter can either be a string or a number. TypeScript enforces that you handle both cases using type narrowing.

Example 2: Union with Custom Types

type SuccessResponse = { status: "success"; data: string };
type ErrorResponse = { status: "error"; message: string };

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
if (response.status === "success") {
console.log(`Data: ${response.data}`);
} else {
console.log(`Error: ${response.message}`);
}
}

handleResponse({ status: "success", data: "User data loaded" });
// Output: Data: User data loaded

handleResponse({ status: "error", message: "Failed to load user data" });
// Output: Error: Failed to load user data

Here, the ApiResponse type can be either a SuccessResponse or an ErrorResponse.

2. Intersection Types

An intersection type in TypeScript combines multiple types into one type. A value of an intersection type must satisfy all the combined types. It is defined using the & (ampersand) symbol.

Syntax
type IntersectionType = Type1 & Type2 & Type3;
Purpose

Intersection types are used when you want to merge multiple types and enforce that a value satisfies all of them.

Example 1: Intersection with Object Types

type User = { name: string; age: number };
type Employee = { employeeId: number; department: string };

type EmployeeDetails = User & Employee;

const employee: EmployeeDetails = {
name: "John",
age: 30,
employeeId: 101,
department: "Engineering",
};

console.log(employee);
// Output: { name: 'John', age: 30, employeeId: 101, department: 'Engineering' }

Example 2: Intersection with Function Types

type Loggable = { log: () => void };
type Serializable = { serialize: () => string };

type LoggableSerializable = Loggable & Serializable;

const loggableItem: LoggableSerializable = {
log: () => console.log("Logging data..."),
serialize: () => JSON.stringify({ key: "value" }),
};

loggableItem.log(); // Output: Logging data...
console.log(loggableItem.serialize()); // Output: {"key":"value"}

Here, the loggableItem object must have both log and serialize methods because it satisfies the LoggableSerializable intersection type.

Q 9) What is the as Keyword in TypeScript?

The as keyword in TypeScript is used for type assertions. It allows you to tell the TypeScript compiler to treat a variable as a specific type. Essentially, it tells TypeScript, "Trust me, I know what I’m doing," even if TypeScript can't infer the type on its own.

Examples of as

1. Basic Usage

let value: any = "Hello, TypeScript!";

// Using `as` to assert the type
let length: number = (value as string).length;

console.log(length); // Output: 17

Here, value is of type any, and TypeScript cannot infer its type. Using as string, we tell TypeScript to treat value as a string, so we can safely access its length property.

10)How to Handle Optional Properties in an Interface in TypeScript

In TypeScript, optional properties in an interface are defined using the ? symbol. This indicates that the property is not mandatory and may or may not be present in objects adhering to the interface

Example: Optional Properties

1. Basic Example

interface User {
name: string;
age?: number; // Optional property
}

const user1: User = { name: "Alice" }; // Valid
const user2: User = { name: "Bob", age: 25 }; // Valid

console.log(user1); // Output: { name: 'Alice' }
console.log(user2); // Output: { name: 'Bob', age: 25 }

#### Intermediate Level

1. What is a Type Guard in TypeScript?

A type guard in TypeScript is a technique or construct that allows you to narrow down the type of a variable within a conditional block. Type guards help TypeScript infer the type of a variable, ensuring that it is safe to use specific properties or methods of that type.

Built-in Type Guards

typeof Operator

The typeof operator is used to check the type of a variable at runtime. It works for primitive types like string, number, boolean, etc

function printValue(value: string | number) {
if (typeof value === "string") {
console.log("String value:", value.toUpperCase());
} else if (typeof value === "number") {
console.log("Number value:", value.toFixed(2));
}
}

printValue("hello"); // Output: String value: HELLO
printValue(42); // Output: Number value: 42.00

2. instanceof Operator

The instanceof operator is used to check whether an object is an instance of a specific class.

class Dog {
bark() {
console.log("Woof!");
}
}

class Cat {
meow() {
console.log("Meow!");
}
}

function animalSound(animal: Dog | Cat) {
if (animal instanceof Dog) {
animal.bark();
} else if (animal instanceof Cat) {
animal.meow();
}
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Output: Woof!
animalSound(myCat); // Output: Meow!

2.  How do you enforce function parameter types and return types in TypeScript?

In TypeScript, you can enforce the types of function parameters and return values using type annotations. This helps ensure that the function is used correctly and that it behaves as expected.

1. Specifying Parameter Types

You can explicitly define the type of each parameter in the function's signature. If the arguments passed to the function do not match the specified types, TypeScript will throw a compile-time error.

Example: Parameter Types

function addNumbers(a: number, b: number): number {
return a + b;
}

console.log(addNumbers(5, 10)); // Output: 15
// console.log(addNumbers("5", 10)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

Q3) What is the never Type in TypeScript, and When is it Used?

The never type in TypeScript is used to represent values that never occur. It is used for functions or situations where the function does not return a value or execution cannot complete successfully.

Key Use Cases for never Type

1. Functions that Never Return The never type is often used to specify functions that do not return, for example, functions that enter an infinite loop, throw an exception, or cause program termination.

2. Functions with Infinite Loops If a function contains an infinite loop that prevents it from returning, you can annotate it with never.

Example: Infinite Loop

function infiniteLoop(): never {
while (true) {
console.log("This loop never ends!");
}
}

infiniteLoop(); // This will keep running forever

Q4)Generics?
Generics in TypeScript allow you to define reusable, flexible, and type-safe functions, classes, and interfaces. They provide a way to specify types in a more general manner, allowing you to work with a variety of types while still maintaining type safety. Using generics ensures that you can work with different types without losing the benefits of static typing.

How to Use Generics?

1. Generic Functions

You can define a function that works with any type by using a type parameter. A type parameter is specified with angle brackets <T> (or any other name you choose).

Example:

function identity<T>(value: T): T {
return value;
}

let num = identity(5); // num is of type number
let str = identity('Hello'); // str is of type string

Q5)What are mapped types in TypeScript?
Example: Partial, Required, Readonly, Pick, Omit.

Mapped types in TypeScript allow you to create new types by transforming properties of an existing type. They are useful for situations where you need to modify the shape of an existing type (for example, making some properties optional, required, or readonly).

Key Mapped Types in TypeScript:

1. Partial<T>:

.Makes all properties in a given type T optional.

interface User {
name: string;
age: number;
}

const user: Partial<User> = {}; // No properties are required

2. Required<T>:

Makes all properties in a given type T required.
interface User {
name?: string;
age?: number;
}

const user: Required<User> = { name: "John", age: 30 }; // Both name and age are required

3. Readonly<T>:

Makes all properties in a given type T read-only, meaning their values cannot be changed after initialization.

interface User {
name: string;
age: number;
}

const user: Readonly<User> = { name: "John", age: 30 };
user.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

4. Pick<T, K>:

Creates a new type by picking a subset of properties from an existing type T, based on the keys K.

interface User {
name: string;
age: number;
email: string;
}

const user: Pick<User, "name" | "email"> = { name: "John", email: "john@example.com" };

5. Omit<T, K>:

Creates a new type by omitting a subset of properties from an existing type T, based on the keys K.

interface User {
name: string;
age: number;
email: string;
}

const user: Omit<User, "age"> = { name: "John", email: "john@example.com" }; // Age is omitted

How They Work:
These mapped types work by iterating over the keys of an existing type and applying a transformation. For example, Partial<T> will loop over all keys in T and apply optional to each of them.

Mapped types in TypeScript allow you to create new types by transforming properties of an existing type. They are useful for situations where you need to modify the shape of an existing type (for example, making some properties optional, required, or readonly).

Key Mapped Types in TypeScript:
Partial<T>:

Makes all properties in a given type T optional.
typescript
Copy code
interface User {
name: string;
age: number;
}

const user: Partial<User> = {}; // No properties are required
Required<T>:

Makes all properties in a given type T required.
typescript
Copy code
interface User {
name?: string;
age?: number;
}

const user: Required<User> = { name: "John", age: 30 }; // Both name and age are required
Readonly<T>:

Makes all properties in a given type T read-only, meaning their values cannot be changed after initialization.
typescript
Copy code
interface User {
name: string;
age: number;
}

const user: Readonly<User> = { name: "John", age: 30 };
user.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
Pick<T, K>:

Creates a new type by picking a subset of properties from an existing type T, based on the keys K.
typescript
Copy code
interface User {
name: string;
age: number;
email: string;
}

const user: Pick<User, "name" | "email"> = { name: "John", email: "john@example.com" };
Omit<T, K>:

Creates a new type by omitting a subset of properties from an existing type T, based on the keys K.
typescript
Copy code
interface User {
name: string;
age: number;
email: string;
}

const user: Omit<User, "age"> = { name: "John", email: "john@example.com" }; // Age is omitted
How They Work:
These mapped types work by iterating over the keys of an existing type and applying a transformation. For example, Partial<T> will loop over all keys in T and apply optional to each of them.

Example of Custom Mapped Type:
You can also create your own mapped types in TypeScript:

type MyMappedType<T> = {
[P in keyof T]: string;
};

interface User {
name: string;
age: number;
}

const user: MyMappedType<User> = { name: "John", age: "30" }; // All properties are of type string
Mapped types are powerful tools for manipulating types in a flexible and reusable manner.

To configure and use a `tsconfig.json` file in a TypeScript project, follow these steps:

### 1. Create `tsconfig.json`

In the root of your project, create a file named `tsconfig.json`. This file will hold all the configuration options for TypeScript.

```bash
touch tsconfig.json
```

### 2. Basic Structure of `tsconfig.json`

Here is an example of a basic `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es6", // Set the JavaScript version to which TypeScript should compile (e.g., ES6)
    "module": "commonjs", // Specify the module code generation method (e.g., commonjs for Node.js)
    "strict": true, // Enable strict type-checking options
    "esModuleInterop": true, // Allows default import of modules without a named import
    "skipLibCheck": true, // Skip type checking of declaration files for faster compilation
    "forceConsistentCasingInFileNames": true, // Ensure consistent casing in file names
    "outDir": "./dist", // Output directory for compiled JavaScript
    "rootDir": "./src" // Root directory of your TypeScript files
  },
  "include": [
    "src/**/*.ts" // Include all TypeScript files inside the src folder
  ],
  "exclude": [
    "node_modules" // Exclude the node_modules directory from compilation
  ]
}
```

### 3. Key Configuration Options

- **compilerOptions**: A section that defines TypeScript compiler settings.

  - `"target"`: Defines the JavaScript version TypeScript should compile to. Common values are `"es5"`, `"es6"`, `"es2020"`, etc.
  - `"module"`: Specifies the module system TypeScript should use. Common values are `"commonjs"` (for Node.js) or `"esnext"` (for modern JavaScript).
  - `"strict"`: Enables strict type-checking options.
  - `"esModuleInterop"`: Ensures compatibility between CommonJS and ES Modules.
  - `"outDir"`: Directory where TypeScript will output the compiled JavaScript files.
  - `"rootDir"`: The directory where TypeScript source files are located.

- **include**: A list of files or directories that TypeScript should include in the compilation.
- **exclude**: A list of files or directories to exclude from the compilation (e.g., `node_modules`).

### 4. Using `tsconfig.json`

Once the `tsconfig.json` is set up, TypeScript will use this configuration whenever you run the TypeScript compiler (`tsc`). To compile your TypeScript code, simply run the following command:

```bash
tsc
```

This will:

1. Look for `tsconfig.json` in the root of your project.
2. Compile all `.ts` files from the directory specified in `"include"`.
3. Output the compiled JavaScript to the `"outDir"` folder.

### 5. Using with `ts-node` (For Development)

If you're working with Node.js and want to run TypeScript files directly without compiling them first, you can use `ts-node`.

Install `ts-node`:

```bash
npm install ts-node --save-dev
```

Run your TypeScript files directly:

```bash
npx ts-node src/index.ts
```

`ts-node` will respect the configuration in `tsconfig.json` when running TypeScript code.

### 6. Optional: Extend `tsconfig.json`

You can also extend a base configuration by using the `extends` property:

```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./build"
  }
}
```

This will inherit settings from `tsconfig.base.json` and override the `outDir`.

---

By configuring your `tsconfig.json` file, you make your TypeScript project more maintainable, improve type safety, and streamline the compilation process.

In TypeScript, how a value or expression is handled can depend on the context in which it is used, such as in variable assignments, function arguments, return types, or even control structures. Here’s how TypeScript handles different contexts:

### 1. **Type Inference**

TypeScript uses **type inference** to automatically determine the type of a variable when the type is not explicitly declared. The context helps TypeScript infer the type.

#### Example:

```typescript
let num = 42; // TypeScript infers that 'num' is of type 'number'.
```

If the context changes (e.g., a function expecting a string), TypeScript would infer accordingly:

```typescript
function greet(name: string) {
  console.log("Hello, " + name);
}

let username = "Alice"; // TypeScript infers 'username' is of type 'string'
greet(username);
```

### 2. **Function Arguments and Return Types**

When used in functions, TypeScript checks the type based on the function signature.

#### Example:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

- **Arguments:** The context of the function signature requires both `a` and `b` to be of type `number`.
- **Return type:** TypeScript ensures the return type matches the specified type (`number`).

### 3. **Contextual Typing**

TypeScript uses the surrounding context to deduce types, even if explicit typing is not used.

#### Example:

```typescript
const button = document.querySelector("button");
// button is inferred as HTMLElement | null, as the querySelector method could return null
```

In this case, the context of the method (`querySelector`) provides enough information to infer the possible type of `button`.

### 4. **Generics**

In generics, TypeScript determines the type based on the context in which the generic is used.

#### Example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity(42); // T is inferred to be 'number'
```

### 5. **Union and Intersection Types**

TypeScript allows union and intersection types, where the context can influence which type is expected.

#### Example: Union Type

```typescript
function printLength(input: string | string[]) {
  console.log(input.length); // TypeScript knows 'length' exists for both 'string' and 'string[]'
}

printLength("Hello");
printLength(["a", "b", "c"]);
```

#### Example: Intersection Type

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
}

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "Alice",
  age: 30,
  employeeId: "E123",
};
```

### 6. **Control Flow Analysis**

TypeScript refines types in control flow based on conditions. It tracks type changes inside `if`, `switch`, or other control structures.

#### Example:

```typescript
let message: string | null = "Hello";

if (message) {
  // In this block, 'message' is refined to type 'string', as 'null' is excluded.
  console.log(message.toUpperCase());
}
```

### 7. **Type Narrowing with `typeof` and `instanceof`**

TypeScript narrows types based on runtime checks, such as `typeof` or `instanceof`.

#### Example:

```typescript
function processValue(value: string | number) {
  if (typeof value === "string") {
    // In this block, 'value' is treated as a string.
    console.log(value.toUpperCase());
  } else {
    // Here, 'value' is treated as a number.
    console.log(value.toFixed(2));
  }
}
```

### 8. **Type Assertion**

You can assert a value’s type when you are certain about the type in a particular context using `as`.

#### Example:

```typescript
const input = document.querySelector("input") as HTMLInputElement;
```

In this case, TypeScript assumes `input` is an `HTMLInputElement`, and you can access properties like `value` that are specific to that type.

### Conclusion

TypeScript uses the context in which a value is used to either infer its type or enforce the type that matches the expected context. This makes the language both flexible and strict in ensuring type safety while allowing for useful type inference.

In TypeScript, asynchronous programming using `async`/`await` is very similar to how it's handled in JavaScript, but with the added benefit of static type checking. Here's a breakdown of how `async`/`await` works in TypeScript:

### 1. `async` Function:

The `async` keyword is used to define a function as asynchronous. An async function always returns a `Promise`, even if the function body doesn’t explicitly return one.

```typescript
async function exampleAsyncFunction(): Promise<number> {
  return 42; // This is wrapped in a Promise automatically
}
```

- **TypeScript behavior**: In the example above, TypeScript infers that the function `exampleAsyncFunction` returns a `Promise<number>`. You can explicitly type the return value as well (`Promise<number>` in this case).

### 2. `await` Keyword:

The `await` keyword can only be used inside an `async` function. It pauses the execution of the async function and waits for a `Promise` to resolve or reject.

```typescript
async function fetchData() {
  const data = await fetch("https://api.example.com/data");
  const json = await data.json();
  return json;
}
```

- **TypeScript behavior**: When using `await`, TypeScript knows that the `data` variable will be the resolved value of the `fetch()` call, and it will infer that `data` is of type `Response`. Additionally, `json` will be typed according to the return type of the `json()` method.

### 3. Error Handling:

To handle errors in an asynchronous function, TypeScript uses `try`/`catch` blocks, similar to synchronous code.

```typescript
async function getUserData(userId: string): Promise<User> {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    const data: User = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
}
```

- **TypeScript behavior**: In this case, TypeScript ensures that the error is caught and can be typed appropriately (e.g., `Error` or any specific type).

### 4. Return Types and Type Inference:

When working with `async`/`await`, TypeScript can infer the return type based on what the function returns. However, you can also explicitly define the return type to provide additional clarity and avoid mistakes.

```typescript
async function fetchData(): Promise<string> {
  return "Hello, World!";
}
```

- **TypeScript behavior**: In the above example, TypeScript ensures that the function will always return a `Promise<string>`, and it will infer that the resolved value is of type `string`.

### 5. Using `await` with Non-Promise Values:

If you use `await` on a value that is not a `Promise`, it will be wrapped into a resolved `Promise`.

```typescript
async function nonAsyncExample() {
  const result = await 5; // 5 is not a Promise, but await wraps it into Promise.resolve(5)
  console.log(result); // Output: 5
}
```

### 6. TypeScript and Promises:

TypeScript's static typing ensures that you handle async functions correctly and return the expected values. If you try to return a type that doesn't match the expected `Promise` type, TypeScript will show an error.

```typescript
async function fetchData(): Promise<string> {
  return 123; // TypeScript error: Type 'number' is not assignable to type 'string'
}
```

### Example:

Here is a complete example of asynchronous programming with TypeScript:

```typescript
async function fetchDataFromApi(): Promise<string> {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return data.message; // Assuming the API returns a message property
  } catch (error) {
    console.error("Error:", error);
    return "Error fetching data";
  }
}
```

- **TypeScript behavior**: In this example, TypeScript ensures that `fetchDataFromApi()` returns a `Promise<string>`, and handles any errors that may arise within the `try` block.

### Conclusion:

TypeScript improves the developer experience by adding strong typing to asynchronous code. With `async`/`await`, you can write cleaner, more readable asynchronous code, and TypeScript ensures that types are respected throughout, reducing runtime errors and improving maintainability.

In TypeScript, `T extends U` and `T & U` are both related to types, but they have different purposes and behaviors.

### 1. `T extends U` (Constraint)

- **Purpose**: This is used in **generic constraints**. It restricts the type `T` to be a subtype of `U`. Essentially, it enforces that `T` must be assignable to `U`.
- **Usage**: You would use this when you want to specify that a generic type parameter must inherit from or be a specific type.

```typescript
function example<T extends U>(x: T): T {
  return x;
}
```

Here, `T` is constrained to be a type that extends `U`, meaning `T` could be `U` or any type that inherits from `U`.

### 2. `T & U` (Intersection Type)

- **Purpose**: This creates a type that combines the properties of both `T` and `U`. The result is a type that has **all** properties of both `T` and `U`. It’s a way to **merge** two types into a single one.
- **Usage**: You use this when you want to combine multiple types into one, so the resulting type must have all the properties of both `T` and `U`.

```typescript
type T = { a: number };
type U = { b: string };

type Combined = T & U; // { a: number, b: string }
```

In this case, `Combined` will have the properties from both `T` and `U` (i.e., `a` and `b`).

### Key Differences:

- `T extends U` is used for **type constraints** in generics, ensuring `T` is a subtype of `U`.
- `T & U` creates an **intersection type** that combines the properties of both types, meaning the resulting type contains properties from both `T` and `U`.

Would you like more examples or explanations on this?
