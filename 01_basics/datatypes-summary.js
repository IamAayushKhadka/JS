// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.


// datatypes are categories into 2 types based on how data are store on memeory and how can we access it

// Primitive -> gives the copy of value -> callByValue

// 7 types : string, number, boolean, null, undefined, Symbol( used to make any value unique), BigInt

const score = 100;  // -> Number
const scoreValue = 100.3; // -> Number

const isLoggedIn = false; // -> Boolean
const outsideTemp = null; // -> Object
let userEmail; // -> undefined

const id = Symbol('123') // -> Symbol
const anotherId = Symbol('123') // -> Symbol

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 123456789123456789n

// console.log(typeof outsideTemp)

// number -> number
// string -> string 
// boolean -> boolean
// undefined -> undefined
// Symbol -> Symbol
// BigInt -> bigint
// null -> object

// Non-primitive/Reference -> gives the reference of the memory address -> callByReference

// Array, Objects, Functions

const heroes =["shiva","bheem","ben10"];

const myObj = {
    name : "aayush",
    age : 18,
}

const myFunction = function(){
    console.log('Hello World');
    
}

// console.log(typeof myFunction);


// Array -> object
// Object -> object
// Function -> object function



// +++++++++++++++++++++++++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)




let myYoutubeName = "hiteshchoudarydotcom"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    password: "1234abc",
}

let userTwo = userOne

userTwo.email = "aayush@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

