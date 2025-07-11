#!/usr/bin/node

function factorial(n) {
  // Convert to number and handle NaN case
  const num = parseInt(n);
  if (isNaN(num)) {
    return 1;
  }
  
  // Base case: factorial of 0 or 1 is 1
  if (num <= 1) {
    return 1;
  }
  
  // Recursive case: n! = n * (n-1)!
  return num * factorial(num - 1);
}

const arg = process.argv[2];
const result = factorial(arg);
console.log(result);
