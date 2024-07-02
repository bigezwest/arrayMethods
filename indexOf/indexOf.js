"use strict";

// Ex: 1 - indexOf - item only -------------------
let arr = [ 1, 0, false ];

console.group("Ex: 1 - indexOf");
console.log("Array: " + arr);
console.log("indexOf(0): " + arr.indexOf(0));
console.log("indexOf(1): " + arr.indexOf(1));
console.log("indexOf(false): " + arr.indexOf(false));

console.log("indexOf(null): " + arr.indexOf(null));
console.log("indexOf(NaN): " + arr.indexOf(NaN));
console.groupEnd();

// Ex: 2 - indexOf - item and from arguments used -----------------
let arr_2 = [ "a", "b", "c", "a" ];

console.group("Ex: 2 - indexOf(item, from)");
console.log("Array: " + arr_2);
console.log('indexOf("a", 0) ' + arr_2.indexOf("a", 0));
console.log('indexOf("a", 1) ' + arr_2.indexOf("a", 1));
console.groupEnd();
