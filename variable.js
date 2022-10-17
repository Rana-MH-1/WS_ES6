//declaration of variable
if(true){
    var x = 3
    //console.log(x)
}

console.log(x) // scope global either local

// let ==> scope local defined in the block where it was declared
if(true){
    let x = 3
    //console.log(x)
}

console.log(x) //ReferenceError: x is not defined

//We cant mutate the variable declared with var / let
let x = 3
x = 25
console.log(x) 

//const ==> same as let ==> scope local
x = 25 // typeError : Assignment to constant variable. ==> we cannot mutate a constant variable

//hoisting in js
console.log(greeter)
var greeter = "hello Elementi's team"
// js ==> varible moved to the top with value = undefined

//let or const ==> greeter is not defined

//obj or array
const obj = {
    name : 'Fayçel',
    age:35,
    adresse:'Tunis'
}

obj={
    name:'Walid',
    age:19,
    adresse:'Algérie'
}

//modify
obj.name='Khwala'
obj["age"] = 27
//add a key
obj.CIN = 12345678

console.log(obj) 
//ouput : { name: 'Khwala', age: 27, adresse: 'Tunis', CIN: 12345678 }
// we cannot mutate the ob but we can change or add a value/key
//same for the array

const array = [1,15,16,79]
//array= [20,3,25]
// change el in array
array[1]= 20
array.push(30)
array.unshift(5)
console.log(array)
//output : [ 5, 1, 20, 16, 79, 30 ]
