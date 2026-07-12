function findLargest(arr) {
    let largest = -Infinity;
    // let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [0, -1, -2, -3, -4, -5,999];
let resullt = findLargest(arr);
console.log(resullt);


/**

Every element?
→ Compare with current maximum.

If bigger?
→ Update maximum.

When stop?
→ After checking every element.

After loop?
→ Return maximum.
 
*/