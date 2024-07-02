"use strict";

// Initial Array ---------------------------------------------------------------
let arr = [ 1, 2 ];

console.group("Original Array");
console.log(arr);
console.groupEnd();

// Ex: 1 - concat() - with another array ---------------------------------------
const ex_1_arr = arr.concat([3, 4]);

console.group("Ex 1: Concat 2 arrays");
console.log(ex_1_arr);
console.groupEnd();

// Ex: 2 - concat - one array with 2 arg arrays --------------------------------
const ex_2_arr = arr.concat([3, 4], [5, 6]);
console.group("Ex 2: Concat with 2 arg arrays");
console.log(ex_2_arr);
console.groupEnd();

// Ex: 3 - concat - one array with another and then single values --------------
const ex_3_arr = arr.concat([3, 4], 5, 6);
console.group("Ex 3: Concat with array and 2 single values");
console.log(ex_3_arr);
console.groupEnd();
