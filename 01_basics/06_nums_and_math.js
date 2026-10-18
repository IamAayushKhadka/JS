const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNumber = 123.8966

// console.log(anotherNumber.toPrecision(3));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.max(2,3,4,5));
// console.log(Math.min(2,3,4,5));
// console.log(Math.pow(2,3));

console.log(Math.random()); // Always gives value between 0 and 1 

console.log((Math.random() * 10)  + 1);
console.log(Math.floor((Math.random() * 10) ) + 1);

const min = 10
const max = 15

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // why + 1, the reason is Math.random() gives value of [0,1) so the 1 is not included and to make the max value +1 is added







