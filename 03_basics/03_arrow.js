
const user = {
    username: "Aayush",
    price: 999,

    welcomeMessage: function(){
        console.log(` ${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// this talk about current context => current value in variable 

// function chai(){
//     let username = "Aayush"
//     console.log(this.username);
    
// } // we cannot access the variable using this. in function, it is only accessible in object 

// chai()

// const chai = function() {
//         let username = "Aayush"
//         console.log(this.username);
        
// }

// chai()

const chai = () => {
    let username = "Aayush"
    console.log(this);
    
}

// chai()

// const addTwoNumbers = (num1,num2) => {
//     return num1 + num2
// }


// Implicit function

// const addTwoNumbers = (num1,num2) =>  num1 + num2
// const addTwoNumbers = (num1,num2) =>  (num1 + num2)

// wrapping in braces return keyword should write and wrapping in bracket no need of return keyword 

// returning object 
const addTwoNumbers = (num1,num2) =>  ({ username: "Aayush"})

// console.log(addTwoNumbers(2,3));

const myArr = [1,2,3,4,5]

// myArr.forEach()