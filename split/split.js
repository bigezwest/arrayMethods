"use strict";

// Ex: 1 - split - delim is only parameter -------------------------------------
const text = "Tom, Dick, Harry" ;
let names = text.split(',');
for (let name of names) {
    console.log(`A message to ${name}`);
}

// Ex: 2 - split - delim and limit paramters ----------------------
const text_2 = "Tom, Dick, Harry";
let names_2 = text_2.split(", ", 2);
for (let name of names_2) {
    console.log(`A message to ${name}`);
}
