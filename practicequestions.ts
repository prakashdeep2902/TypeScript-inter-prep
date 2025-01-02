let message: string = "Hello, world!"; // Explicitly declare as string
message = "123"; // TypeScript Error: Type '123' is not assignable to type 'string'.

console.log(message.toLowerCase()); 
// This code is safe because TypeScript ensures 'message' is always a string.
