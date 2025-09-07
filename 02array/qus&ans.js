//Problem: Create an array containing different types of teas.
let teas = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

//Problem: Remove "Oolong Tea" from the list of teas.
// value = teas.indexOf("Oolong Tea")
// console.log(value); // This will log the index of "Oolong Tea"

teas.splice(teas.indexOf("Oolong Tea"), 1);

// Problem: Filter the list to only include teas that are caffeinated.
let caffeinatedTeas = teas.filter(tea => tea !== "Herbal Tea");
// let caffeinatedTeas = teas.filter(tea => tea !== "Herbal Tea");

// Problem: Sort the list of teas in alphabetical order.
console.log( "ascending Sorted Teas: ", teas.sort() );
console.log( "descending Sorted Teas: ", teas.sort().reverse() );



// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log("Tea Type: ", teas[i]);
}
// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffeinatedCount = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedCount++;
  }
}
console.log("Number of Caffeinated Teas: ", caffeinatedCount);

// Problem: Use a for loop to create a new array with all tea names in uppercase.
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}
console.log("Uppercase Teas: ", uppercaseTeas);

// Problem: Use a for Loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
console.log("Tea with Most Characters: ", longestTea);

// Problem: Use a for loop to reverse the order of teas in the array.
const reversedTeas = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedTeas.push(teas[i]);
}
console.log("Reversed Teas: ", reversedTeas);