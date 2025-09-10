/* pop() method 
1. Removes the last element from an array  
2. Returns that element
*/
if (!Array.prototype.mypop) {
  Array.prototype.mypop = function () {
    if (this.length === 0) return undefined;
    const lastElement = this[this.length - 1];
    this.length -= 1;
    return lastElement;
  };
}

const numbers = [21, 635, 513, 100, 200, 300];
console.log(numbers);

const poppedValue = numbers.mypop();
console.log("Returned Value: " + poppedValue); // 300

console.log(numbers);
// [ 21, 635, 513, 100, 200 ]
