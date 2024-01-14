"use strict"


//_______________CLOSURE IN JAVASCRIPT______________________
/*[1] closure in action that is inner function can have access outer function variables/parameter as well as all the global variables.[1]

[2] The return statement does not execute the inner function - 
function is executed only when followed by (), but rather the return statement returns the entire body of the function[2]
 
[3] A closure is the combination of a function and the lexical environment  within which that function was declared.[3]*/

let d = 20;
const outerFunc = (a)=>{
    let b = 10;
    const innerFunc = ()=>{
        let sum = a + b + d;
        console.log(`the sum of two number is ${sum}`)
    }
   // innerFunc()     //lexical scope when we execute inner func in outer func 
    return innerFunc // closure when we return the inner func to outer func and called the inner fanc with stored in a variable and calling it but outer func would not be there and outer func variable will be stored in some memory space like heap memory
}
let inner = outerFunc(5);
// console.dir(inner);
// inner();

/*
1.In a switch statement, what happens if no case matches the provided value?
2.How do you assign a value to a variable in JavaScript?
3.What is the purpose of a JavaScript variable?

*/