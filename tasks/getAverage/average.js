"use strict";
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const initialValue = 0;
function getAverageAge(users) {
    return users.reduce((accumulator, user) =>
        accumulator + user.age, initialValue) / users.length;
}

console.log(getAverageAge(arr));
