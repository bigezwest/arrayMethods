"use strict";

// Initial Array ---------------------------------
let arr = [ 1, 2 ];

console.group("Original Array");
console.log(arr);
console.groupEnd();

// concat() - with another array -----------------
const arr_2 = arr.concat([3, 4]);

console.group("Concat 2 arrays");
console.log(arr_2);
console.groupEnd();
