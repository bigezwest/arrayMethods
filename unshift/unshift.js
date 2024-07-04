"use strict";

// Ex: 1 - unshift(string) -----------------------------------------------------
console.group("Ex: 1 - unshift(string):")
let names_arr = [ "Tom", "Dick", "Harry" ];
console.log("Original Array: " + names_arr);
let newString = "Fred";
names_arr.unshift(newString);
console.log("Unshifted Array: " + names_arr);
console.groupEnd();
