// unshift() 
// 1. Adds the specified elements to the beginning of an array. 
// 2. Returns the new length of the array.

if (!Array.prototype.myunshift)
    {

   Array.prototype.myunshift = function(...elements) {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + elements.length] = this[i];
    }
    for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
    }
    return this.length;
     }
};


// Example usage:
const arr = [30, 40, 50];
console.log("Original Array: " + arr); // Original Array: 30,40,50

ret = arr.myunshift(12,15)

// after unshift Array in arr 
console.log("Unshift Return New Array lenght  "+ret) // 5

console.log("after unshift Original Array: " + arr); //  12,15,30,40,50
