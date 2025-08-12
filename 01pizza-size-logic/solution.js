/*
small <=2
med <= 5
large > 6
*/



// function tellsize(num) {
//     if (typeof num !== "number" || num <= 0) {
//         console.log("Please enter a valid positive number");
//     } 
//     else if (num <= 2) {
//         console.log("Please take a small pizza");
//     } 
//     else if (num >= 3 && num <= 5) {
//         console.log("Please take a medium pizza");
//     } 
//     else {
//         console.log("Please take a large pizza");
//     }
// }




const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter number of people: ", function(input) {
    let num = Number(input); // convert string to number

    if (typeof num !== "number" || num <= 0 || isNaN(num)) {
        console.log("Please enter a valid positive number");
    } 
    else if (num <= 2) {
        console.log("Please take a small pizza");
    } 
    else if (num >= 3 && num <= 5) {
        console.log("Please take a medium pizza");
    } 
    else {
        console.log("Please take a large pizza");
    }

    rl.close();
});
