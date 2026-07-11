function isEligibleToVote(age){
    if (age<0){
        console.log("Please enter the valid age");
        //return;
         
    }
    else if(age >=18){
        console.log("Eligible to Vote");
    }else{
        console.log("Not Eligible to vote");
        
    }
}

isEligibleToVote(18);
// isEligibleToVote(15);
// isEligibleToVote(-1);


/**.  Even or Odd */

function isEven(num){
    if(num % 2 ==0){
        console.log("Even Number");
        
    }else{
        console.log("Odd Number");
        
    }
}

isEven(2);
isEven(3);
isEven(0);