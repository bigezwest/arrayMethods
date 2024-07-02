"use strict";

// Ex: 1 - foreach - console log each item -------------------------------------
const arr = [ "Bilbo", "Gandolf", "Nazgul" ];
console.group("forEach item");

arr.forEach((item) => {
    console.log(item);
});

console.groupEnd();

// Ex: 2 - foreach - use all 3 parameters of foreach(item, index, array) &nbsp -
console.group("forEach - item, index, array");

arr.forEach((item, index, array) => {
    console.log(`Item: ${item}, Index: ${index}, in ${array}`);
});
console.groupEnd();
