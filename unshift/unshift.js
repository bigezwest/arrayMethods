"use strict";

// Ex: 1 - unshift(string) -----------------------------------------------------
console.group("Ex: 1 - unshift(string):")
let names_arr = [ "Tom", "Dick", "Harry" ];
console.log("Original Array: " + names_arr);
let newString = "Fred";
names_arr.unshift(newString);
console.log("Unshifted Array: " + names_arr);
console.groupEnd();

// Ex: 2 - unshift(...arr);
console.group("unshift(...arr)")
let names_arr2 = [ "Tom", "Dick", "Harry" ];
console.log("Original Array: " + names_arr2);
let names_new = [ "Fred", "Barney" ];
names_arr2.unshift(...names_new);
console.log("Unshifted Array: " + names_arr2);
console.groupEnd();
