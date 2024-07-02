"use strict";
// Ex: 1 - indexOf - item only -------------------
let arr = [ 1, 0, false ];

console.group("Ex: 1 - lastIndexOf");
console.log("Array: " + arr);
console.log("lastIndexOf(0): " + arr.lastIndexOf(0));
console.log("lastIndexOf(1): " + arr.lastIndexOf(1));
console.log("lastIndexOf(false): " + arr.lastIndexOf(false));

console.log("lastIndexOf(null): " + arr.lastIndexOf(null));
console.log("lastIndexOf(NaN): " + arr.lastIndexOf(NaN));
console.groupEnd();

// Ex: 2 - indexOf - item and from arguments used -----------------
// Notice here that the lastIndexOf starts at the end when searching.
let arr_2 = [ "a", "b", "c", "a" ];

console.group("Ex: 2 - lastIndexOf(item, from)");
console.log("Array: " + arr_2);
console.log('lastIndexOf("a", 0) ' + arr_2.lastIndexOf("a", -1));
console.log('lastIndexOf("a", 1) ' + arr_2.lastIndexOf("a", -2));
console.groupEnd();
