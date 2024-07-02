"use strict";
let arr = [ 1, 0, false ];

console.group("includes");
console.log("Array: " + arr);
console.log("includes(1): " + arr.includes(1));
console.log("arr.includes(Nan): " + arr.includes(NaN));
console.groupEnd();
