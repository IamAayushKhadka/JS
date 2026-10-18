const userEmail = []

if (userEmail) {
    console.log(`Got user email`);
} else {
    console.log(`Don't have user email`);
}

// falsy value 

// false, 0, -0, BigInt: 0n, "", null, undefined, NaN

// truthy value 

// "0", 'false', " ", [], {}, function(){}


// ++++++++++ Always check empty array like this +++++++++++

if (userEmail.length === 0) {
    console.log(`Array is empty`);
    
}

// ++++++++++ Check empty Object like this ++++++++++ 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
    
}

console.log(Object.keys(emptyObj));

// Knowledge : false == 0 => true, false == "" => true, 0 == "" => true


// Nullish Coalescing Operator (??) : null, undefined 

let val1;
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20


console.log(val1);



// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);

