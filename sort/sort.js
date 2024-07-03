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

// Ex: 3 - sort numbers - using a custom function
function compareNums(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
console.group("Sort using compare function");
console.log("Original Array: " + num_arr);
console.log("Sorted Array: " + num_arr.sort(compareNums));
console.groupEnd();

// Ex: 4 - Show each step of a sort
console.group("Show complete sort");
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    console.log( a + " <> " + b );
    return a - b;
});
console.groupEnd();
