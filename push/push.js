"use strict";

let names = [ "Tom", "Dick", "Harry" ];
let newNames = [ "Fred", "Barney" ];
console.log("Original names array: " + names);
names.push(...newNames);
console.log("Names array after push: " + names);
