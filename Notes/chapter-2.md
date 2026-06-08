# 1) Type Inference vs Annotation

## Type Annotation

let age: number = 25;

Developer specifies the type.

---

## Type Inference

let age = 25;

TypeScript automatically determines the type.

---

## Best Practice

Use inference for:

- Local variables
- Simple constants

Use annotation for:

- Function parameters
- Complex objects
- Public APIs

---

## Interview One-Liner

Type inference automatically determines types, while type annotations explicitly define them.

# Type Inference vs Annotation

## Type Annotation

let age: number = 25;

Developer specifies the type.

---

## Type Inference

let age = 25;

TypeScript automatically determines the type.

---

## Best Practice

Use inference for:

- Local variables
- Simple constants

Use annotation for:

- Function parameters
- Complex objects
- Public APIs

---

## Interview One-Liner

Type inference automatically determines types, while type annotations explicitly define them.

# Basic Types

## String

let name: string = "Prakash";

## Number

let age: number = 25;

## Boolean

let isActive: boolean = true;

## Best Practice

Prefer type inference for simple variables.

## Interview

TypeScript has 3 basic primitive types:

- string
- number
- boolean

# 3) Union Types

## Syntax

let value: string | number;

## Meaning

Variable can hold multiple specified types.

## Example

let id: string | number;

id = 1;
id = "EMP001";

## Benefits

- Flexible
- Type Safe

## Interview

Union types allow a value to belong to one of several predefined types.

# any

let value: any;

## Problem

- No type checking
- No safety
- Can cause runtime errors

## Rule

Avoid any whenever possible.

## Preferred

Use unknown instead.

# Type Narrowing

function print(value: string | number) {
if (typeof value === "string") {
value.toUpperCase();
}
}

## Type Guards

- typeof
- instanceof

## Purpose

Convert broad types into specific types safely.
