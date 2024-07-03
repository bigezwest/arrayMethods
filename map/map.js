"use strict";

// Ex: 1 - Map -----------------------------------
const names = [ "Tom", "Dick", "Harry" ];
let lengths = names.map(item => item.length);
console.group("Map names");
console.log(lengths);
console.groupEnd();
