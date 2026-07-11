function searchElementInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5]
let element = 1;
let resullt = searchElementInArray(arr, element);
console.log(resullt);


/**
 
 Every element?
→ Compare with 3.

If found?
→ Return index.

When stop?
→ Immediately.

If never found?
→ Return -1.
 */