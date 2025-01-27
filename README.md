# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expected to hold a single string.

The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides the corrected version.

## Problem

The `greeter` function is defined to accept a single string as input and return a greeting. However, the code attempts to pass an array of strings to the function, resulting in a type error.

## Solution

The solution involves either modifying the `greeter` function to accept an array of strings or changing how the `user` variable is handled to provide a single string to the function.  The `bugSolution.ts` file offers a solution using string concatenation to solve the issue.