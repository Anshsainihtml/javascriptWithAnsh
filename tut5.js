// type conversion and type coercion

console.log('Welcome to tut5');
let myVar;
myVar = String(34);
console.log(typeof(myVar));

let number = 35;
console.log(typeof(number.toString()));

let booleanVar = String(true);
console.log(booleanVar, typeof(booleanVar));

let date = String(new Date());
console.log(date, typeof(date));

let arr = String([1,2,3,4,5]);
console.log(arr, typeof(arr));

let stri = Number("3434");
stri = Number("343d4"); // NaN - not a number
stri = Number(true); // true - 1 , false - 0
stri = Number([1,2,3,4,5,6,7,8,9]) // NaN
console.log(stri, typeof(stri));

let num = "34.4422"
num = Number(num);
// num = parseInt(num);
num = parseFloat(num);
console.log(num.toFixed(2), typeof(num));


// Type coercion
console.log("\nType coercion");
console.log("\n");

let mystr = "698";
let mynum = 34;

console.log(mystr + mynum);


