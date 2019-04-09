"use strict";
const findSmallestNumber = (listOfNumber) => {
    let smallest = listOfNumber[0];
    listOfNumber.forEach(item => {
        if (smallest > item) {
            smallest = item;
        }
    });
    return smallest;
};
const listOfNumber = [23, 23, 123, 523, 1, 237, 3, 2, 123, 4342, 31, 1];
console.log(`The Smallest Number is: ${findSmallestNumber(listOfNumber)}`);
