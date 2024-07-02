"use strict";

let arr = [ 1, 0, false ];

console.group("indexOf");
console.log("Array: " + arr);
console.log("indexOf(0): " + arr.indexOf(0));
console.log("indexOf(1): " + arr.indexOf(1));
console.log("indexOf(false): " + arr.indexOf(false));

console.log("indexOf(null): " + arr.indexOf(null));
console.log("indexOf(NaN): " + arr.indexOf(NaN));
