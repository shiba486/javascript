'use strict'

//_____________I-I-F-E(immediately-invoked-function-Expression)___________________
/*1::an IFFE is a javascript function that runs as soon as it is define.
2:: it is design pattern which is also known as a self-Executing anonymous function and contains TWO major PARTS.
(i) The first is the anonymous function with lexical scope enclosed within the grouping operator().This part prevents accessing variable with thi IFFE idiom as well as polluting the global scope.
(ii) The second part creates the immediately invoked function expression () through which the javascript engine will directly interpret the function.
*/

// (function(aName){       //anonymous
//     let authorName = 'shibanondo';
//     console.log('Author name is '+ aName);
// })('Shibanondo Das'); //immediately invoked function & grouping operator

