
const marvelHeros = ["thor","Ironman","spiderman"]
const dcHeros = ["superman", "flash","batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);


const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// spread operator 
const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);


const myArr = [1,2,3,[4,5,6],7,[6,7,[4,5]],8]

const myArr2 = myArr.flat(Infinity)
// console.log(myArr2);

console.log(Array.isArray("Aayush"))
console.log(Array.from("Aayush"))
console.log(Array.from({name : "Aayush"})) // intresting 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
