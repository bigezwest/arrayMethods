"use strict";

// Ex: 1 - sort - single characters --------------
let char_arr = [ "b", "c", "a", "f", "d" ];
console.group("Character array");
console.log("Unsorted: " + char_arr);
char_arr.sort();
console.log("Sorted: " + char_arr);
console.groupEnd();

// Ex: 2 - sort - numbers - sorts as a string
let num_arr = [ 2, 15, 3, 1, 4 ];
console.group("Number array");
console.log("Unsorted: " + num_arr);
num_arr.sort();
console.log("Sorted: " + num_arr);
console.groupEnd();
