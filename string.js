
//String In Javascript
//______________________
const name = 'shibanondo';
const repoCount = 50;
// console.log(name+' ' +repoCount+' ' + 'value');
//console.log(Hello my name is ${name} and my repoCount is ${repoCount})

const gameName = new String('shibanondo Das');
//console.log(gameName[0]);

//prototyepMethod In Dtring
/*
console.log(gameName.__prototype__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
console.log(gameName.slice(0,2));
console.log(gameName.substring(0,4));
console.log(gameName.includes('Das'));
console.log(gameName.trim());
*/
const url = 'https://www.shibanondo.com/github%20das';
//console.log(url);
url.replace('%20', '-');
//console.log(url);

