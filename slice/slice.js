"use strict";

let arr = [ "t", "e", "s", "t" ];

// Ex: 1 - Original array ---------------------------------------
console.group("Original Array");
console.log(arr);
console.groupEnd();

const arrSlice = (start, end) => {
    return (arr.slice(start, end));
}

// Sliced array ----------------------------------
console.group("Ex 1 - Array Slice");
console.log(arrSlice(1, 3));
console.groupEnd();

// Ex: 2 - Negative index ---------------------------------------
console.group("Ex: 2 - Using Negative Index");
console.log(arrSlice(-2));
console.groupEnd();

// Ex: 3 - Make a copy ------------------------------------------
console.group("Ex: 3 - Make a copy");
let arrCopy = arrSlice();
console.log(arrCopy);
console.groupEnd();


// Original array --------------------------------
console.group("Original Array");
console.log(arr);
console.groupEnd();
