#!/usr/bin/node

const arg = process.argv[2];

if (arg === undefined) {
  console.log('Not a number');
} else {
  const num = parseInt(arg, 10);
  if (isNaN(num)) {
    console.log('Not a number');
  } else {
    console.log(`My number: ${num}`);
  }
}
