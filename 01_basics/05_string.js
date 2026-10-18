const name = "aayush"
const repoCount = 10

// console.log(name + " and repoCount is " + repoCount); // not used in modern days

// string interpolation ``

// console.log(`My name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String("aayush-khadka-com")

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("y"));

// const newString = gameName.substring(0,4)
// console.log(newString);


const anotherString = gameName.slice(-17,-4)
console.log(anotherString);


// const newStringOne = "     aayush     " 
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const newStringTwo = "https://aayush.com/aayush%20khadka"
// console.log(newStringTwo);

// console.log(newStringTwo.replace("%20","-"));
// console.log(newStringTwo.includes("khadka"));

console.log(gameName.split("-",2));







