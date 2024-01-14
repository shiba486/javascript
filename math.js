
//math
/*
console.log('absoluteValue '+Math.abs(-4));
console.log('roundValue '+Math.round(7.4));
console.log('CeilingValue '+Math.ceil(7.4));
console.log('FlooringValue '+Math.floor(7.4));
console.log('MinimumValue '+Math.min(-4,3,6,8));
console.log('MaximumValue '+Math.max(-4,3,6,8));
*/
const randomNumber = Math.random();
//console.log(randomNumber);


function getRandomInt(min, max) {
  // Use Math.floor to round down and ensure it's an integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random integer between 1 and 10 (inclusive)
const randomInteger = getRandomInt(1, 10);

//console.log(randomInteger);


