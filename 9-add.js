#!/usr/bin/node

function add(a, b) {
  const num1 = parseInt(a);
  const num2 = parseInt(b);
  
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }
  
  return num1 + num2;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

const result = add(arg1, arg2);
console.log(result);
