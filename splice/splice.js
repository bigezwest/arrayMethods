"use strict";

// Ex: 1 - splice() - Remove one item ------------------------------------------
let arr = [ "I", "study", "JavaScript" ];

const removeElement = () => {
    console.group("removeElement()");

    console.log("Original Array: " + arr);
    arr.splice(1, 1);
    console.log("Modified Array: " + arr);

    console.groupEnd();
}
removeElement();

// Ex: 2 - splice() - Remove and Replace ---------------------------------------
let arr_ex_2 = ["I", "study", "JavaScript", "right", "now"];

const removeReplace = () => {
    console.group("removeReplace()");

    console.log("Original Array: " + arr_ex_2);
    arr_ex_2.splice(0, 3, "Let's", "dance");
    console.log("Modified Array: " + arr_ex_2)

    console.groupEnd();
}
removeReplace();

// Ex: 3 - splice() - Insert with no removals ----------------------------------
let arr_ex_3 = [ "I", "study", "JavaScript" ];

const insert = () => {
    console.group("insert()");

    console.log("Original Array: " + arr_ex_3);
    arr_ex_3.splice(2, 0, "complex", "language" );
    console.log("Modified Array: " + arr_ex_3);

    console.groupEnd();
}
insert();
