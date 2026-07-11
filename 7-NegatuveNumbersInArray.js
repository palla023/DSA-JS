function findNegativeNumbersInArray(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count += 1;         
        }
    }
    return count;
}

let arr = [1, -1, -2, -3, -4];
let result = findNegativeNumbersInArray(arr);
console.log(result);


/**
 
Every element?
→ Check if negative.

If true?
→ count++

When stop?
→ Never stop early.
Check the whole array.

After loop?
→ Return count.
 */