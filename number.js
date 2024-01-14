const data= input.split(' ')
let sum = 0;
for(let i = 0; i< data.length; i++){
    let item = Number(data[i]);
   sum  += item;
}
const avg = sum/3;
const result = avg.toFixed(2);
console.log(`Average: ${result}`)
