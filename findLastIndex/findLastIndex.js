"use strict";

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
];

// Ex: 1 - findIndex - ---------------------------------------------------------
console.group("FindIndex: ");
const userJohnIndex = users.findLastIndex(user => user.name == "John");
console.log("John Index: " + userJohnIndex);
console.groupEnd();
