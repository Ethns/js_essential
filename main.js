// console.log('JS Essential');
//var is globally scoped
//let is mutable
//const: have to be initialized and cannot be re-assigned
// let age;
// age = 30;
// age = 20;
// const score = 100;
// console.log(age)
// console.log(score);

//String, numbers, Boolean, null, undefined
const name = 'ethn';
const age = 40;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof z);
console.log(typeof y);
// string concatenation
console.log(`My name is ${name} and I am ${age}`);
const s = 'Hello World'
console.log(s.substring(0 ,5).toUpperCase());
// Arrays - variables that hold multiple valuessan
const number = new Array('yi', 'er', '3', 'si', 'wu');
console.log(number);

for(let i = 0; i < 10; i++){
    console.log(i);
}

let j = 0;
while(j < 10){
    console.log(j);
    j++;
}

for(let k = 0; k < number.length; k++){
    process.stdout.write(number[k]);
}