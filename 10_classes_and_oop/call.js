function setUserName(username){
    // Comples DB checks
    this.username = username
    console.log('called');
    
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@google.com",'1234')
console.log(chai);
