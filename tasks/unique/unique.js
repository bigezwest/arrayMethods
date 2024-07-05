"use strict";

const strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    let result = [];

    for (let string of arr) {
        if (!result.includes(string)) {
            result.push(string);
        }
    }
    return result;
}
console.log(unique(strings));
