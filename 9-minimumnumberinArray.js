function findSmallest(arr) {
    //let smallest = arr[0];
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

let arr = [1, 2, 3, 4, -1, -999];
let resullt = findSmallest(arr);
console.log(resullt);
