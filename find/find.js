"use strict";

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
console.group("Table");
console.table(user);
console.groupEnd();
