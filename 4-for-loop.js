for (let i = 1; i <= 5 ; i++) {
    console.log("Count " + i);
    
}

console.log(" ")

for (let i= 2; i< 9 ; i+=2){
    console.log("Count by Increment by 2 : " + i);
    
}
console.log(" ")

/**.  Reverse Loop */
for(let i = 5; i >=0 ; i --){
    console.log("Count by decreasing by 1 " +i);
    
}
console.log(" ")

//Call function inside a loop

function greet(i){
    console.log("Namasthe "+ i);
    
}
/**.  
 * 
 * greet(0)
 * greet(1)
 * greet(2)
 * Here the greet function is called 3 times with the values 0 to 2.
 * So this is the repeatation of the greet function 6 times.
 * So , we have to think : whenever a repeatation of a task is required , we use a loop.
*/

for(let i=0;i<=5;i++){
    greet(i);
}

console.log(" ")

/**.   Loops and arrays work together */

let arr = [1,2,3,4,5];
for (let i=0; i<arr[i];i++){
    if((arr[i] %2) == 0){
        console.log(arr[i]);
    }
    
}