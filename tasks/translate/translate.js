"use strict";

let input = "change-this";
let arr = input.split("-");
for (let word = 0; word < arr.length; word++) {
    if (word > 0) {
        let wordStr = (arr[word]).toString();
        wordStr = upperFirstLetter(wordStr);
        console.log(wordStr);
    }
}

function upperFirstLetter(word) {
        let char = word.charAt(0).toUpperCase();
        word = word.slice(1);
        word = char + word;
        return(word);
}
