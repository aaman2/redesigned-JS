// Problem: Create an object representing a type of tea with properties for name, type and caffeine content
tea = {
    Name : "leamon tea",
    type : "herbal",
    caffeine : "low"
}
// Problem: Access and print the name and type properties of the tea object
console.log("2nd Problem solution: " + tea.Name);
console.log("2nd Problem solution: " + tea.type);

// Problem: Add a new property origin to the tea object
tea.origin = "India";



// Problem: Change the caffeine level of the tea object to "Medium"
tea.caffeine = "Medium";
// Problem: Remove the type property from the tea object
delete tea.type;

// Problem: Check if the tea object has a property origin
console.log(tea.origin ? "yes, Tea object has a property origin": "No, tea object not  have property origin");
console.log("origin" in tea); // by use of in operatorit show true or false  
console.log(tea.hasOwnProperty("origin")); // Using hasOwnProperty()
console.log(tea.origin !== undefined); //Using undefined check

// Problem: Use a for...in loop to print all properties of the tea object
for (let key in tea) {
  console.log(key + " : " + tea[key]);
}

// Problem: Create a nested object representing different types of teas and their properties
const NestedTea = {
  green: {
    name: "Green Tea",
    type: "green",
    caffeine: "medium",
    origin: "China"
  },
  black: {
    name: "Black Tea",
    type: "black",
    caffeine: "high",
    origin: "India"
  },
  herbal: {
    name: "Herbal Tea",
    type: "herbal",
    caffeine: "none",
    origin: "Egypt"
  }
};

// Problem: Create a copy of the tea object
NewCopyTea = {...tea}

// Problem: Add a custom method describe to the tea object that returns a description string
tea.describe = function() {
    return `The Name of tea is ${this.Name}, origin is ${this.origin}, caffeine level is ${this.caffeine}`;
}




// Problem: Merge two objects representing different teas into one
let obj1 = {
    name : "Sidhit" ,
    Class : "Music"
}
let obj2= {
    name : "Aman" ,
    Class : "CS"
}
let print = MergedObj = {...obj1,...obj2}