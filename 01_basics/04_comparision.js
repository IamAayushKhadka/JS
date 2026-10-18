// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <=1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// +++++ Aviod following type of conversion +++++

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that equality check and comparision work differently 
// Comparision convert null to a number, treating it as 0, that's why null > 0 is false and null >= 0 is true 

// console.log(undefined > 0); //-> false
// console.log(undefined < 0); //-> false
// console.log(undefined == 0); //-> false
// console.log(undefined >= 0); //-> false




// === (strick check)

// console.log("2" === 2);
