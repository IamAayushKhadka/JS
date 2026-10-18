const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
//    console.log(`${key} is the shortcut for ${myObject[key]}`);
    
}

const programming = ["js", "cpp", "rb", "Java", "py"]

for (const key in programming) {
//   console.log(`${programming[key]}`);

}

const map = new Map()
map.set("IN", "India")
map.set("CH", "China")
map.set("NP", "Nepal")

for (const key in map) {
    console.log(`${key}`);
    
}

