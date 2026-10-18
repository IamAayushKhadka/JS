const promiseOne = new Promise(function(resolve,reject){
    // Do the async task
    // db conn, cryptography, network
    setTimeout(function(){
        console.log(`Async task 1 completed`);
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log(`Task 1 resolved`);
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Async task 2 is completed`);
        resolve()
    },1000)
}).then(function(){
    console.log(`Task 2  resolved`);
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Aayush", password: "1234"}) 
        } else {
            reject('ERROR: Something went wrong')
        }

    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(() => console.log(`The promise is either resolve or rejected `))


const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: "Aayush", password: "1234"}) 
        } else {
            reject('ERROR: Something went wrong')
        }

    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
            console.log(error);
        
        }
    
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             // console.log(typeof response);
//             const data = await response.json()
//             console.log(data);
    
    
//     } catch (error) {
//         console.log('E :', error);
        
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error))