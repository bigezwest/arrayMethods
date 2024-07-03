"use strict";

// Ex: 1 - Show that typeof() does not work ------------------------------------
console.group("typeOf()");
console.log("typeof {}: " + typeof {});
console.log("typeof []: " + typeof []);
console.groupEnd();

// Ex: 2 - Show use of isArray -------------------------------------------------
console.group("isArray()");
console.log("isArray({}): " + Array.isArray({}));
console.log("isArray([]): " + Array.isArray([]));
console.groupEnd();
