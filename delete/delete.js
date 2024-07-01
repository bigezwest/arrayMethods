"use strict";

let arr = ["This", "is", "an", "array"];

const delArr = () => {;
    console.log(`Before deletion: ${arr}`);
    console.log(`Array Size: ${arr.length}`);
    console.log(`-----------------------`);
    delete arr[3];
    console.log(`After Deletion: ${arr}`);
    console.log(`Array Size: ${arr.length}`);
}

delArr();
