function add(a,b){
    let add = a+b;
    console.log(add);
    
}

add(1,2);
add(3,2);  // reusability -> you can call the function any number of times

function square(x){
    let resullt = x * x;
    return resullt;
}
//need to collect the result inside the variable
let value = square(5);
console.log(value);
