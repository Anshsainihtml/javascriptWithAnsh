console.log("tut3");
// variables in js
// var, let, const

var  name = "Ansh";
var  age;

var marks = 34;
marks = 33;
// age  = 18;
console.log(name, age, marks);
// Rules for creating Javascript Variables

/* 
    1. Cannot Start with numbers and spa
    2. Can start with letter, numbers, _ or $ 
    3. Are case sensitive
*/


var city = "Delhi";
console.log(city);

const ownerName = "Hari Ram";
// ownerName = "Ansh" // Cannot do this (error)
console.log(ownerName);
// const fruit; // Erro through - Missing initializer in const declaration

{
    let city = "Rampur";
    city = "Kolkata";
    console.log(city);
}

console.log(city);

const arr1 = [12, 23, 53, 3];
// arr1 = [23, 45] // Cannot do this (error)
arr1.push(45);
console.log(arr1);

/*
    1. camelCase
    2. kebab-case
    3. snake_case
    4. PascalCase
*/

