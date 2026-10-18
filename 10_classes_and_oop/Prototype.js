// let myName = "Aayush    "
// let myChannel = "Chai        "

// console.log(myName.trueLength());


const myHeroes = ["thor", "spiderman"]

const heroesPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.aayush = function(){
    console.log(`Aayush is present in all object`);
    
}

Array.prototype.heyAayush = function(){
    console.log(`Aayush says hello`);
    
}

// heroesPower.aayush()
// myHeroes.aayush()
// myHeroes.heyAayush()
// heroesPower.heyAayush() // not accessible 


// Inheritance => prototype inheritance

const User = {
    name: "chai"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax for prototypical inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"Aayush".trueLength()
"iceTea".trueLength()