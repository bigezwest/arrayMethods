"use strict";


const shuffle = (arr) => {
    let min = 1;                                            // need min 1 for random
    let arrCopy = arr.slice();                              // A copy to delete items from
    let newArr = [];                                        // An arr to save to

    while (newArr.length < arr.length) {
        let randIndex = randNum(min, arrCopy.length + 1);   // Get random
            newArr.push(arrCopy[randIndex - 1]);            // insert element from arrCopy, adjust to index
            arrCopy.splice(randIndex -1, 1);                // Remove from arrCopy, adjust to index
        }
        return newArr;
};

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function run() {
    let arr = [10, 20, 30, 40, 50];
    for (let i = 0; i < 5; i++) {
        console.log(shuffle(arr));
    }
}

run();
