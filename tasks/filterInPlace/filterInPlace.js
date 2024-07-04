"use strict";

let arr = [ 5, 3, 8, 1 ];
const min = 1;
const max = 4;
filterInPlace(arr, min, max);
console.log(arr);

function filterInPlace(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (element < min || element > max) {
            arr.splice(i, 1);
            i--;
        }
    }
}
