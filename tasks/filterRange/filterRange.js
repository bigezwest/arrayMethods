"use strict";
const arr = [ 5, 3, 8, 1 ];
const min = 1;
const max = 4;

filterRange(arr, min, max);

function filterRange(arr, a, b) {
    let newArr = [];
    for (let item of arr) {
        if (item >= a && item <= b) {
            newArr.push(item);
        }
    }

    console.log("New Array: " + newArr);
    console.log("Original Array: " + arr);
}
