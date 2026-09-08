// Count digits in a number by repeatedly dividing by 10.
// Each division peels off the last digit; we count how many times we can do that.
function countDigits(n) {
    // 0 has one digit. Without this, the while loop never runs and we'd return 0.
    if (n === 0) { return 1 }
    // Negatives still have the same digit count as their positive form (-20 → 2).
    n = Math.abs(n);
    let count = 0;
    while (n > 0) {
        // Math.floor is required: 123 / 10 is 12.3 in JS, not 12.
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigits(12345)); // 5
console.log(countDigits(1234567890)); // 10
console.log(countDigits(0)); // 1
console.log(countDigits(-20)); // 2


console.log(" ")
// Absolute value: strips the sign. Math.abs(-20) → 20
console.log(Math.abs(-20));

console.log(" ")
// ceil: round UP to the next integer (10.1 → 11, 10.9 → 11)
console.log(Math.ceil(10.1));
console.log(Math.ceil(10.9));

// floor: round DOWN to the previous integer (10.9 → 10)
console.log(Math.floor(10.9));
