// var c = 40
let a = 200
if (true) {
    let a = 10
    const b = 20
    // console.log(`Inner a = ${a}`);
    
}

// console.log(a);

// the global scope through console and node are different


// nested scope

function one(){
    const username = "Aayush"

    function two(){
    const website = "youtube.com"

    console.log(username);
    
    }

    two()
    
}

// one()


if (true) {
    const username = "Aayush"
    if (true) {
        const website = "youtube.com"
        // console.log(`${username} + ${website}`);
        
    }
    // console.log(website);
    
}

// console.log(username);



// +++++++++++++++++++++ Intresting +++++++++++++++++++++
console.log(addOne(2));

function addOne(num) {
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(2));


