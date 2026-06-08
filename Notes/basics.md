# Why Learn TypeScript

## Definition

TypeScript = JavaScript + Static Typing

## Benefits

- Type Safety
- Better Autocomplete
- Easier Refactoring
- Self Documentation
- Fewer Runtime Errors

## Key Point

TypeScript catches errors during development before code reaches production.

## Interview One-Liner

TypeScript is a statically typed superset of JavaScript that compiles to JavaScript and helps build scalable applications.

# 2) JavaScript vs TypeScript

## Browser Understands

✅ JavaScript

❌ TypeScript

---

## Flow

TypeScript (.ts)
↓
TypeScript Compiler (tsc)
↓
JavaScript (.js)
↓
Browser / Node.js

---

## Key Point

TypeScript types exist only during development.

After compilation:

- Types removed
- JavaScript generated

---

## Benefits

- Type Safety
- Better Autocomplete
- Easier Refactoring
- Fewer Bugs

---

## Interview One-Liner

TypeScript is a compile-time tool that adds static typing to JavaScript and generates plain JavaScript for execution.

# 3) TypeScript Roadmap

1. Fundamentals
2. Types
3. Advanced Types
4. Functions & Generics
5. OOP
6. React/Node Projects

Goal:
Write safer and scalable JavaScript applications.

# Writing First TypeScript Program

## Create File

app.ts

## Example

let name: string = "Prakash";

## Compile

tsc app.ts

## Run

node app.js

## Key Point

TypeScript -> Compile -> JavaScript -> Execute

# 4) TypeScript Compiler Flow

TypeScript
↓
Parser
↓
AST
↓
Binder
↓
Type Checker
↓
Emitter
↓
JavaScript

## Important

- Parser -> Creates AST
- Binder -> Connects declarations
- Type Checker -> Validates types
- Emitter -> Generates JS

## Interview Answer

TypeScript converts code into an AST, performs binding and type checking, then emits JavaScript.

#5) Parser & AST

## Parser

Converts source code into AST.

## AST

Tree representation of code.

Example:

let age = 25;

VariableDeclaration
├── age
└── 25

## Used By

- TypeScript
- Babel
- ESLint
- Prettier

## Interview One-Liner

AST is the internal tree structure that represents source code for analysis and transformation.

Quick Interview Challenge

For:

let sum = a + b;

Which AST node would represent a + b?

Answer: BinaryExpression

# 5) Binder & Symbol Tables

## Binder Responsibilities

- Creates Symbols
- Builds Symbol Tables
- Tracks Scopes
- Connects References to Declarations

## Symbol Examples

- Variables
- Functions
- Classes
- Interfaces
- Enums

## Symbol Table Example

age -> Variable
getUser -> Function
User -> Interface

## Interview One-Liner

The Binder creates symbols and symbol tables from the AST and manages scope information for the Type Checker.
