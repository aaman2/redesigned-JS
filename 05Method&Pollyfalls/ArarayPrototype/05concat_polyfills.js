// concat() 
// 1. Merge two or more arrays. 
// 2. This method does not change the existing arrays, but instead returns a new array.
if (!Array.prototype.myconcat) {
    Array.prototype.myconcat = function(...arrays) {
        let result = this.slice(); // Create a shallow copy of the original array
        for (let i = 0; i < arrays.length; i++) {
            const array = arrays[i];
            for (let j = 0; j < array.length; j++) {
                result.push(array[j]);
            }
        }
        return result;
    };
}

// Example usage:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArray = arr1.myconcat(arr2, arr3);
console.log("Original Array 1: " + arr1);
console.log("Original Array 2: " + arr2);
console.log("Original Array 3: " + arr3); 
console.log("New Array: " + newArray);