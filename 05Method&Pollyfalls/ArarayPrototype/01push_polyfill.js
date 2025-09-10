/* push polyfill
1. adds the specified elements to the end of an array 
2.returns the new length of the array.

*/

if (!Array.prototype.mypush) {
  Array.prototype.mypush = function (...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
    }
    return this.length;
  };
}

Number = [21, 635, 513];

console.log(Number);

val = Number.mypush(100, 200, 300);
console.log(val); // 6

console.log(Number);
// [ 21, 635, 513, 100, 200, 300 ]
