"use strict";
// string
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
/* discription:Represents textual data. Used to store words or text.
Example: function greet(name: string): string ensures that the name parameter is always a string.
 */
// number 
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
/*
 discription:Represents numeric values (both integers and floating-point).
Example: function add(a: number, b: number): number ensures a and b are numbers and returns a number.
 */
// boolean
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true
/*

discription:Represents true/false values. Used for logical operations.
Example: function isEven(num: number): boolean checks whether a number is even and returns true or false.
 */
// any
function logValue(value) {
    console.log(`Value: ${value}`);
}
logValue("Hello"); // Output: Value: Hello
logValue(123); // Output: Value: 123
