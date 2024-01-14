
"use strict"

//________CALLBACK FUNCTION_______________
//ANY FUNCTION THAT IS PASSED AS AN ARGUMENT IS CALLED A 'CALLBACK FUNCTION'
// A CALLBACK IS A FUNCTION THAT IS TO BE EXECUTED AFTER ANOTHER FUNCTION HAS FINISHED EXECUTING ---HENCE THE NAME "CALL BACK"

const FunA = ()=>{
    setTimeout(function(){
        // FunB();
        console.log(`funA is called`)
    },3000)
}
const FunB = ()=>{
    console.log(`funB is called`)
}
// FunA();


const perOne = (friend, callFriend)=>{
    console.log(`i am very busy right now . I am talking to ${friend}. I will call you back`);
    callFriend();
}
const perTwo = ()=> {
    console.log(`Hey whatsUpp . i call you back`);
}
// perOne('rasel',perTwo);

