

export const add = (...nums) => {
    let sum = 0;
    nums.forEach((value) => {
        sum += value;
    })
    return sum;
}

export const multiply = (...nums) => {
    let total = 0;
    nums.forEach((val) => {
        if (total == 0) {
            total = val
        }
        total = total * val;
    })
    return total;
}