"use strict";
const arr = [ 5, 3, 8, 1 ];
const min = 1;
const max = 4;

let filtered = filterRange(arr, min, max);
console.log("Filtered: " + filtered);
console.log("Unfiltered: " + arr);

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= min && item <= max));
}
