"use strict";

let input = "change-this";
let arr = input.split("-");
for (let word = 0; word < arr.length; word++) {
    if (word > 0) {
        let wordStr = (arr[word]).toString();
        console.log(wordStr);
    }
}
