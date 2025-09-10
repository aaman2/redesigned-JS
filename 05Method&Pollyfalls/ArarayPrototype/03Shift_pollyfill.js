/* shift() 
1. Removes the first element from an array
2. Returns that removed element 
This method changes the original length of the array.
*/

if(!Array.prototype.myShift )
    Array.prototype.myShift = function() {
    if (this.length === 0) return undefined;
    const first = this[0];
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length = this.length - 1;
    return first;
};

// Example usage:
const arr = [10, 20, 30];
const removed = arr.myShift();
console.log("Removed Value: " + removed); // 10
console.log("Updated Array: " + arr);     // [20, 30]