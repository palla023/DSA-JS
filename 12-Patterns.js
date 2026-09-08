function rectanglePattern(n) {
    for (let i = 1; i <= n + 1; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            row += " *"
        }
        console.log(row);

    }
}
rectanglePattern(5);

console.log("");

/**. Right angle traingle */

function rightAnglePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += " *";
        }
        console.log(row);

    }
}
rightAnglePattern(4);


console.log("");

/**. Right angle traingle -> Same cols */

function rightAngleSameColPattern(n) {
    for (let i = 0; i < n; i++) {
        row = " ";
        for (let j = 0; j <= i; j++) {
            row = row + (j + 1) + " ";
        }
        console.log(row);

    }
}
rightAngleSameColPattern(5);

console.log("");

/**. Right angle traingle -> Same rows */

function rightAngleSameRowPattern(n) {
    for (let i = 0; i < n; i++) {
        row = "";
        for (let j = 0; j <= i; j++) {
            row = row + (i + 1) + " ";
        }
        console.log(row);

    }
}
rightAngleSameRowPattern(5);

console.log("");

/**.Inverse Right angle traingle -> Same cols */

function InverseRightAngleSameColPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= (n - i); j++) {
            row = row + (j + 1) + " ";
        }
        console.log(row);

    }
}
InverseRightAngleSameColPattern(4)

console.log("");

/**.Inverse Right angle traingle -> print stars */

function InverseRightAngleSameStarPattern(n) {
    for (let i = 0; i < n; i++) {
        row = "";
        for (let j = 0; j < (n - i); j++) {
            row = row + " *";
        }
        console.log(row);

    }
}
InverseRightAngleSameStarPattern(5);

console.log("");

/** Spaces With RightAngle Triangle*/

function SpacesWithRightTraingleStars(n) {
    for (let i = 0; i < n; i++) {
        let row = " ";
        for (let j = 0; j < n - (i + 1); j++) {
            row = row + " ";
        }
        for (let k = 0; k < (i + 1); k++) {
            row = row + "*"
        }

        console.log(row);
    }
}
SpacesWithRightTraingleStars(5);


console.log("");

/** 1's and 0's in RightAngle Triangle*/
function ZerosAndOnesInRightTraingle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if ((j % 2) === 0) {
                row = row + "0";
            } else {
                row = row + "1";
            }

        }
        console.log(row);

    }
}
ZerosAndOnesInRightTraingle(5);

console.log("");

/** 1's and 0's alternative in RightAngle Triangle*/
function ZerosAndOnesAlternatveInRightTraingle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if (((i + j) % 2) === 0) {
                row = row + "1";
            } else {
                row = row + "0";
            }

        }
        console.log(row);

    }
}
ZerosAndOnesAlternatveInRightTraingle(5);

console.log("");

function zerosAndOnesAlternativeInRightTriangle(n) {

    for (let i = 1; i <= n; i++) {

        let row = "";

        // Decide the starting digit
        let current = (i % 4 === 0 || i % 4 === 1) ? 1 : 0;

        for (let j = 1; j <= i; j++) {
            row += current;
            current = current === 1 ? 0 : 1; // Toggle
        }

        console.log(row);
    }
}

zerosAndOnesAlternativeInRightTriangle(5);
