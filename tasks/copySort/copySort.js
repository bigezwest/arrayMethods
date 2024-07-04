"use strict";

let arr = [ "HTML", "JavaScript", "CSS" ];
let sorted = copySorted(arr);

console.log(sorted);

function copySorted(arr) {
    return arr.slice()
    .sort();
}
