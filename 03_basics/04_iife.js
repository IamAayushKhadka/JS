// Immediately Invoked Function Expressions (IIFE)

// Mostly used to prevent the pollution of the global scope

(function chai() {
    console.log(`DB CONNECTED`);
    
}) (); // named IIFE

( (name) => {
    console.log(`DB CONNECTED TWO, ${name}`);    
} ) ("Aayush") // unnamed IIFE
