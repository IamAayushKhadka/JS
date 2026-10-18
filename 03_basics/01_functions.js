


function sayMyName() {
    console.log("A");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(num1,num2) {
//     console.log(`${num1 + num2}`);
    
// }        

function addTwoNumber(num1,num2) {
    // let result = num1 + num2;
    // return result

    return num1 + num2;
    
}

const result = addTwoNumber(3,4)

// console.log(`Result : ${result}`);    // Result : undefined when there is no return i.e console.log means to give the output not to return anything.

function loginUserMessage(username = "sam") {
    // if (username === undefined) {
    //     console.log(`Please enter your username`);
    //     return
    // }
    if (!username) {
        console.log(`Please enter your username`);
        return
    }
    return `${username} just logged in`
}

// there are somethings consider as false. Like " ", undefined 
// ! is not: that convert true => false and false => true

// if you want a default value then ( username = "someName")

// console.log(loginUserMessage("Aayush"));
// console.log(loginUserMessage());

// Shop card problem => Rest operator 

function calculateCardPrice( val1, val2, ...num1 ) {
    return num1
}
// console.log(calculateCardPrice(200,300,400,500,600,700));

// function with object 

const user = {
    username: "Aayush",
    price: 999
}

function hadleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

// hadleObject(user)
hadleObject({
    username: "sam",
    price: 299
})


// function with array

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));





