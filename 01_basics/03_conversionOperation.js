let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

//++++++++++++++++++++++++++++ Number Conversion++++++++++++++++++++++++++++++

let valueInNumber = Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0
// undefined => NaN


//++++++++++++++++++++++++++++ Boolean Conversion++++++++++++++++++++++++++++++

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// "abc" => true
// 1 => true; 0 => false
// null => false
// undefined => false
// "" => false 

//++++++++++++++++++++++++++++ String Conversion++++++++++++++++++++++++++++++

let someNumber = 33

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// 33 => string
// "33" => string
// null => string
// undefined => string


//+++++++++++++++++++++++++++++++++++ Operations +++++++++++++++++++++++++++++++++++++

let value = 3
let negValue = -value
// console.log(negValue);
// console.log(typeof (negValue));

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 = "hello"
let str2 = " aayush"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");

// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log((3 + 4) * 5 % 3);

// console.log(+true); // 1
// console.log(+"");   // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++ // postfix : the increment operator increment and returns the value before increment  
// console.log(gameCounter);

let prefix = 100
let afterIncrement = ++prefix // prefix : the increment operetor increment and return the value after increment
//  console.table([prefix, afterIncrement])

let postfix = 100
let afterPostfix = postfix++ // postfix : the increment operator increment and returns the value before increment
// console.table([postfix, afterPostfix])