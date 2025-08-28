// This is function which was writen bellow 

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

add(5,1);// Congratulations Now there add function was calling 📞 5,1 is Argument which was pass to add function


// so we learn how to make a function and how to call it  now we learn basic concept regarding callback or high order function 


// Callback function is a function passed as an argument to another function. when another fuction call him
// in simple hindi --> jab koi dusra function iss function ko call kre and ye function wha as a arugment ban kar jayega  iss trha ke function ko bolte hai .... callback function means tumne bhulya tab hum chle aaye wo v apke liye argument bann kr 

function Boy(name) {
  console.log("Hello, " + name + "!");
  // or i can write by using String interpolation
  console.log(`Hello ,${name}!`);
  
}

// Boy("Sidhit")


// Higher-order function --> Takes one or more functions as argument or Returns a function as its result

function processName(Newname, callback) {
  // Execute the callback function with the processed name
  callback(Newname);
}

// Usage
processName("Amandeep", Boy); // Output: Hello, Amandeep!

/*
Function Sequence
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
so for batter Function Sequence we use technique allows a function to call another function A callback function can run after another function has finished 
*/