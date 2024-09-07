let a = 2;
let b = "2";

console.log(a == b); // Output: true

console.log(a === b); // Output: false

let c = [];
let d = [];

console.log(c === d); // false => REASON: if data is non-premitive then == & === both will check if reference is same then it will return true otherwise it will return false.
console.log(c == d);

let g = c;
console.log(g === c);
console.log(g == c);

let x = {};
let y = {};
console.log(x === y);
console.log(x == y);

let z = x;
console.log(z === x);
console.log(z == x);