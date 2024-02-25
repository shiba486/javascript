// 1, make the first letter capital of the sentence
// const str1 = "hi i am shiba"
//  let arr =str1.split(" ").map((elem)=>{
//     // console.log(elem)
//     return (elem.charAt(0).toUpperCase() + elem.substring(1))
// })
// let arr2 = arr.join(" ")
// console.log(arr2)

//2. reverse string
// function DoReverse(val1) {
//     let str = val1;
//    let reverseWord =  str.split(" ").map((word)=>{
//        return word.split("").reverse().join("")
//     })
//     return reverseWord.join(" ")
// }
// console.log(DoReverse("fuck you"))

//3. check array or object
// function checkArray(value1) {
//    return Array.isArray(value1)
// }

// console.log(checkArray([]))

//4. empty an array
// const arrary1 = [1,2,3,4,5,6];
// arrary1.length = 0
// console.log(arrary1);

//5. check number integer or not
// function checkIntegerOrNot(number) {
//     let number1 = number;
//     if(number1 % 1 === 0){
//         return "Integer"
//     }else{
//         return "Not integer"
//     }
// }
// console.log(checkIntegerOrNot(12.4))

//6. Make an arry duplicate
// let array1 = [1,2,3,4,5]
// function makeArrayDuplicate(value1) {
//     let arr= value1;
//    return  arr.concat(arr)

// }
// console.log(makeArrayDuplicate(array1))

//7. check is palimdrome or not
// function palimdromeOrNot(value1) {
//     let val = value1;
//     let normal = val.toString()
//     let reverse = normal.split("").reverse().join("")

//     // let normal = value1.toString()
//     // let reverse = normal.toString().split("").reverse().join("")
//     return reverse === normal;
// }
// console.log(palimdromeOrNot(121))

//8. count how many character in the string\
// Method-1

// function countOfItem(value1) {
//     let str1= value1;
//     let objeect1 = {};
//     str1.split("").forEach(element => {
//         if(!objeect1.hasOwnProperty(element)){
//             objeect1[element] = 1;
//         }else{
//             objeect1[element]++;
//         }
//     });
//     return objeect1;
// }
// console.log(countOfItem("shibanondo"))
// method -2
// function count(value) {
//     let val1 = value;
//     let objectOne = {};
//     val1.split("").forEach(element => {
//         if(objectOne.hasOwnProperty(element) ==false){
//             objectOne[element] = 1;
//         }else{
//             objectOne[element]++;
//         }
//     });
//     return objectOne;
// }
// console.log(count("shibanondo"))


// 9. reverse a number
//Method:1
// function reverANumber(number) {
//     let num1 = number;
//     let reversedNumber =  num1.toString().split("").reverse().join("")
//     return reversedNumber
// }
// console.log(reverANumber(12345))

//Method: 2
// function reverseNumber(num1) {
  
//   let rev = 0;
//   for (let number1 = num1; number1 > 0; ) {
//     let rem = number1 % 10;
//     rev = rev * 10 + rem;
//     number1 = Math.floor(number1 / 10);
//   }
//   return rev;
// }
// console.log(reverseNumber(12345));

//10. write a function that return a passed string with letters in alphabetical order

// function alphabeticalOrder(strValue) {
//     let word = strValue;
//    return word.split("").sort().join("")
// }
// console.log(alphabeticalOrder("shibanondo"))


// Loop:
// 11. loop an array and add all the member of it
// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0;

// method-1
// for (let i = 0; i < arr.length; i++) {
//     sum +=arr[i]
    
// }
// console.log(sum)
// method-2
// arr.forEach((function(elem){
//     sum = sum+ elem
// }))
// console.log(sum)

// 12. In an array of numbers and strings, only add those number which are not string

// let personNumber = ['shiba',123,876,"nondo", "das",344,"ariyan",789,"parasitamol",8];

// method -1:
// let sum = 0;
// personNumber.forEach(function(elem){
//     if(typeof elem ==="number"){
//         sum = sum + elem;
//     }
// })
// console.log(sum);

// method-2
// let sum = 0;
// for (let i = 0; i < personNumber.length; i++) {
//     if(typeof personNumber[i] === "number"){
//         sum = sum + personNumber[i]
//     }  
// }
// console.log(sum);



//13, loop an array of objects and remove all objects which don't have genders value male

// let personArray =[
//     {
//         name: "shibanondo",
//         class: "two",
//         gender: "male"
//     },
//     {
//         name: "Aisharjo",
//         class: "two",
//         gender: "female"
//     },
//     {
//         name: "ariyan",
//         class: "two",
//         gender: "male"
//     },
//     {
//         name: "basudev",
//         class: "two",
//         gender: "male"
//     },
//     {
//         name: "dipika",
//         class: "two",
//         gender: "female"
//     },
//     {
//         name: "Harshita",
//         class: "two",
//         gender: "female"
//     },
//     {
//         name: "Arpita",
//         class: "two",
//         gender: "female"
//     },
// ]

// let count = 0;
// for (let i = 0; i < personArray.length; i++) {
//     if(personArray[i].gender !== "male"){
//         count = count+1
//     }
// }
// // console.log(count);
// // personArray.forEach(function(elem){
// //     if(elem.gender !== "male"){
// //         count++;
// //     }
// // })

// for (let j = 1; j <= count; j++) {
//     for (let index = 0; index < personArray.length; index++) {
//         if(personArray[index].gender !== "male"){
//             personArray.splice(index, 1)
//         } 
//     }
    
// }
// console.log(personArray);


// ARRAY:::::

// 14. Write a Javascript Function to clone an array

// Method:-1
// function duplicate(arr) {
//    return arr.concat(arr)
// }
//  let Logging = duplicate([1,2,3,4,5]);
// console.log(Logging);

// // Method-2
// function duplicate(arr) {
//    return [...arr]
// }
//  let Logging = duplicate([1,2,3,4,5]);
// console.log(Logging);


// Method-3
// function duplicate(arr) {
//     let arr1 = arr;
//     let duplicateArr = arr1.map(function(elem){
//         return elem
//     })
//     return duplicateArr;
// }
// let array1 = [1,2,3,4,5,6]
//  let Logging = duplicate(array1);
//  Logging.pop();
// console.log(Logging);
// console.log(array1);
// _________________________________________________________________________________

// function duplicate(arr) {
//     let arr1 = arr;
//    let newArr = [];
//    arr1.forEach(item => {
//     newArr.push(item)
//    });
//    return newArr
// }
// let array1 = [1,2,3,4,5,6]
//  let Logging = duplicate(array1);
//  Logging.pop();
// console.log(Logging);
// console.log(array1);

//15. write a Javascript funtion to get the first element of an array. Passing a parameter "n" will return the first "n"  elements of the array

// function getTheFirstElementOfArray(arr=[],n=1) {

//     if(n <= arr.length){
//         for (let index = 0; index < n; index++) {
//             console.log(arr[index])
            
//         }
//     }else{
//         console.log(`${n} is above than array`);
//     }
// }
// getTheFirstElementOfArray([1,2,3,4,5,12,34,33,57],3)


// 16. write a javascript function to get the last element of an array. Passing a parameter "n" will return the first "n"  elements of the array

// function getTheLastElementOfArray(arr=[],n=1) {

//   if(n <= arr.length){
//     for (let i = 0; i < n; i++) {
//         console.log(arr[arr.length - 1 - i]);
//     }
//   }else{
//     console.log(`${n} is above than array length`);
//   }
// }
// getTheLastElementOfArray([1,2,3,4,5],4)


//17.write a javascript function which accepts an arguments and return the type.
// NOTE: THERE ARE SIX POSSIBLE VALUES THAT TYPEOF RETURNS : OBJECT,BOOLEAN,FUNCTION, NUMBER,STRING AND UNDEFINED
// function checkType(value) {
//     let data = value;
//     let checked = typeof data;
//     return checked
// }
// let input1= "shiba";
// let input2= null;
// let input3= 123;
// let input4= function(){};
// let input5= true;
// let input6= undefined;
// let output = checkType(input5)
// console.log(output);


// 18. write a javascript program to find the most frequent item of an array


//19. write a javascript program to shuffle an array

//20. write a javascript program to compute the union of two arrays