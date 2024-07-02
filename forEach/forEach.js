"use strict";

// Ex: 1 - foreach - console log each item -------
const arr = [ "Bilbo", "Gandolf", "Nazgul" ];
console.group("forEach item");

arr.forEach((item) => {
    console.log(item);
});

console.groupEnd();
