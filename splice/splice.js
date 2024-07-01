"use strict";

// Ex: 1 - splice() - Remove one item ------------
let arr = [ "I", "study", "JavaScript" ];

const removeElement = () => {
    console.group("removeElement()");

    console.log("Original Array: " + arr);

    arr.splice(1, 1);
    console.log("Modified Array: " + arr);
}
removeElement();
