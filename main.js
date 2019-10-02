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
    try{
        process.stdout.write(i.toString());
    }
    catch(err){
        console.log(err.message);
    }

}

let j = 0;
while(j < 10){
    try{
        process.stdout.write(j.toString());
    }
    catch(err){
        console.log(err.message);
    }
    j++;
}
console.log() // print out a new line
for(let n of number){
    console.log(n);
}

todos = [
    {id: 1, todo: 'get up', isDOne: true},
    {id: 2, todo: 'get neat', isDOne: true},
    {id: 3, todo: 'have brakefest', isDOne: false},
    {id: 4, todo: 'get out', isDOne: false}
];
//foreach, map, filter
todos.forEach(td => {
    console.log(td.todo);    
});
const map_output = todos.map(function(td){
    return td.todo;
})
console.log(map_output);
const filered_output = todos.filter(function(td){
    return td.isDOne == false;
})
console.log(filered_output);