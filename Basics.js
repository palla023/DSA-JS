/* Store the values in a variable*/

const a = 10;
// a=15;            // TypeError: Assignment to constant variable.
const b = 20;
const sum = a + b;
console.log(sum);

let firstName = "Raj";
let lastName = "S";
let fullName = firstName + " " + lastName;
console.log(fullName);


/* --   Adding Number to a String */

firstName = "Dhoni";
lastName = 7;
fullName = firstName + " " + lastName;
console.log(fullName);

/* Add two numbers but with string in between -> String addition*/

let firstNumber = 7;
let secondNumber = 3;
let add = firstNumber + " " + secondNumber;
console.log(add);

/** --  to get the sum just remove the " " in betwen the numbers */

firstNumber = 7;
secondNumber = 3;
add = firstNumber + secondNumber;
console.log(add);

/**
 * 
 * Wherever the Javascript, when you need to run the javascript, you need javascript engine
 */

/**    Arrays  */

let arr = [1, 4, 5, 6, 10];
console.log(arr[2]);
console.log(arr[5]);   //undefined

let names = ["Raj", "Ram","Naveen"];
console.log(names[1]);

let arr1 = [1,2,[3,4,5]];
console.log(arr1[2]);
console.log(arr1[2][2]);


/**    Objects  */

let obj = {
    a:7,
    name : "Akshay"
}
console.log(obj);
console.log(obj.name);



