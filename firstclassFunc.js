"use strict"

/*____________'FUNCTION IS FIRST CLASS CITIZENS'_________________
A programming language is said to have First-class functions when functions in that language are treated like any other variable */

//  first class citizen function
// 2:pass a function as a argument
// 3: Returning function .   
// 1: In javascript we can assign a function to a variable.

const thankYou = function(){
    let name='shibanondo';
    return `thankyou so much ${name}`;
}
// console.log(thankYou);
// console.log(typeof thankYou)

//method function is also first class function
const methodFunc = {
    name:'shiba',
    qualify: 'web design',
    study: function(){
        return `my name is ${this.qualify}`;
    }
}
//console.log(methodFunc.study());

//2.pass a function as a argument
//callback function 
 const myName =()=>{
    return `Hello`;
 }

 const greeting = (sayHello, personName)=>{
    return (`${sayHello()} ${personName}`);
 }
//  console.log(greeting(myName, 'shibanondo'));

 //This explain is show us that how we are treating the function as a value;
 //The function that we pass as an argument to another function , is called a callback function . myName() function is a Callback function.

// 3: Returning function .   this is a key concept when it comes to functional programming

function a(){
    return function b(){
        return ('thank You')
    }
}
// console.log(a()());  //this is a method of calling a function inside of another function

// const c = a();


