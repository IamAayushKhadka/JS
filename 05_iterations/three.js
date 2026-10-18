// for of 

// [" ", " ", " "]
// [ {}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet === " ") {
        // console.log(`Detected space`);
        
        // continue;
    }
    // console.log(`Each char: ${greet}`);
    
}

// Map

const map = new Map()
map.set("IN", "India")
map.set("CH", "China")
map.set("NP", "Nepal")

// console.log(map);

for (const [key,value] of map) {
    console.log(`Key: ${key} :- Value: ${value}`);
    
}

const myObject = {
    'game1': "PUBG",
    'game2': "Spiderman"
}

// for (const [key,value] of myObject) {
//     console.log(`${key}`);
// }  
 
// Object is not iterable 