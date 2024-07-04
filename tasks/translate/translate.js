"use strict";

let input = "change-this-string";
console.log(camelize(input));

function camelize(str) {
    return str
    .split("-")
    .map(
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}
