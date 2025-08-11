// Data Types //

// ************* Primitive data types ***********

// String 

let  name = "Ansh";
console.log(name, "Data type is " +  typeof(name));

// Numbers 
let marks = 34.4;
console.log(marks ," Data type is " + typeof(marks));

// Boolean
let isDriver = true;
console.log(isDriver,"Data type is " + typeof(isDriver));

// Null
let nullVar = null;
console.log(nullVar,"Data type is " + typeof(nullVar));

// Undefined
let undef = undefined;
console.log(undef,"Data type is " + typeof(undef));


// ************ Reference Data Types ***************

let myarr = [1, 2, 3, 4, false, "String"];
console.log(myarr,"Data type is " + typeof(myarr))

// Object Literals
let stMarks = {
    Ujjawal: 89, 
    Ansh: 35,
    Prince: 34,
}
console.log(stMarks,"Data type is "+ typeof(stMarks))

function findName() {
    
}

console.log(typeof(findName));

let date = new Date();
console.log(date,"Data type is " +  typeof(date));

