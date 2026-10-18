// singleton
// Object.create

// object literals

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Aayush",
    "full name" : "Aayush Khadka",
    [mySymbol] : "mykey1",
    age : 18,
    location : "Bhaktapur",
    email : "aayush@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "aayush@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "aayush@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function (){
    console.log('Hello JS user');
    
}
jsUser.greetingTwo = function (){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// the reason of undefined is that the greeting function doesn't return anything, it is just printing that's why the return type is undefined.


