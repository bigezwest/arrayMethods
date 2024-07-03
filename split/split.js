"use strict";

// Ex: 1 - split - delim is only parameter -------------------------------------
const text = "Tom, Dick, Harry" ;
let names = text.split(',');
for (let name of names) {
    console.log(`A message to ${name}`);
}
