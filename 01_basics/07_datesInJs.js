// Dates


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


// let myCreatedDate = new Date(2026,7,20)
// let myCreatedDate = new Date(2026,7,20,8,33)
let myCreatedDate = new Date("08/20/2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000)); // convert millisecond to second

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

let anotherDate = newDate.toLocaleString("default", {
    weekday: "short",
})
console.log(anotherDate);

