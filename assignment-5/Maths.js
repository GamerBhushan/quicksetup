
// Maths.js

export const add = (...nums) => {
    let sum = 0;
    nums.forEach((value) => {
        sum += value;
    })
    return sum;
}

export const multiply = (...nums) => {
    let total = 1;
    nums.forEach((val) => {
        // if (!total) {
        //     total = val
        // }
        total = total * val;
    })
    return total;
}

