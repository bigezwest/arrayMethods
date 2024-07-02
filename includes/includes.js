"use strict";
let arr = [ 1, 0, false ];

console.group("includes");
console.log("Array: " + arr);
console.log("includes(1): " + arr.includes(1));
console.log("arr.includes(Nan): " + arr.includes(NaN));
console.groupEnd();

let arr_2 = [NaN];
console.group("includes");
console.log(arr_2);
console.log("arr_2.includes(NaN): " + arr_2.includes(NaN));
console.groupEnd();
