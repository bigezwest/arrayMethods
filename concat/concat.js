"use strict";

// Initial Array ---------------------------------
let arr = [ 1, 2 ];

console.group("Original Array");
console.log(arr);
console.groupEnd();

// Ex: 1 - concat() - with another array ---------
const ex_1_arr = arr.concat([3, 4]);

console.group("Ex 1: Concat 2 arrays");
console.log(ex_1_arr);
console.groupEnd();
