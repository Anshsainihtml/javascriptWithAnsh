# Commands Breakdown

 #                                     <h2 align="center">🚀 Tutorial No. 2</h2>

### `console.log(value);`  
Ye command console par value print karta hai.  
**Examples:**  
- String: `"Hello console"`  
- Number: `4 + 3` (7)  
- Boolean: `true`  
- Array: `[34, 2, 1, 2]`  
- Object: `{name: "ansh", marks: 34}`

---

### `console.table(object);`  
Object ya array ko table format mein console par dikhata hai, jo padhna aasan hota hai.

---

### `console.warn(message);`  
Console mein warning message show karta hai, jiska icon warning ke liye hota hai.

---

### `console.clear();`  
Console ko clear kar deta hai. (Is code mein commented hai)

---

### `console.assert(condition, message);`  
Condition false hone par error message show karta hai. Agar condition true ho to kuch nahi dikhata.  
**Example:**  
`99 > 189` false hai, isliye message `"Age > 189 is not possible"` dikhega.

---

### `console.error(message);`  
Console mein error message show karta hai, jisme error icon hota hai.

---

## Comments in JavaScript

- `//` se single line comment banta hai.  
- `/* ... */` se multi-line comment likha jata hai.


 #                                     <h2 align="center">🚀 Tutorial No. 3</h2>

# JavaScript Variables and Constants

### 📜 Is tutorial mein basic JavaScript variable types (`var`, `let`, `const`) aur unke rules ke baare mein code aur explanation diya gaya hai.

### `console.log("tut3");`
### var
Global scoped hota hai.

Redeclare aur reassign dono ho sakta hai.

---

### let
Block scoped hota hai.

Reassign ho sakta hai, lekin redeclare nahi.

---

### const
Block scoped hota hai.

Na redeclare hota hai, na reassign.

Declare karte waqt initialize karna zaroori hai.

---

### Variable Naming Rules

1. Must Begin with a Letter, $, or _
2. Can Contain Letters, Digits, _ and $ but Special Characters not allowed
3. Cannot Be a Reserved Keyword
4. Case Sensitive
5. Use Meaningful Names (Best Practice)

---

###  Naming Style Conventions

1. camelCase
2. kebab-case (Not allowed in variable names)
3. snake_case
4. PascalCase

---

 #                                     <h2 align="center">🚀 Tutorial No. 4</h2>

### JavaScript Data Types

### 📜In this tutorial  **data types in JavaScript**, categorized as **Primitive** and **Reference** types.

---

## 📌 Primitive Data Types

#### These are basic, single-value data types.

### 1. String
Example - "Ansh"

---

### 2. Number
Example - 34.4

---

### 3. Boolean


Example - true	

---

### 4. Null
Example - null

---
### 5. Undefined
Example - undefined

---
### 6. BigInt
```js
let x = BigInt("123456789012345678901234567890");
```
---
### 7. Symbol
```js
const sym3 = Symbol("foo");
```
---

## 📌 Reference (Non-Primitive) Data Types

### 1. Object
**Examples:**  
`[1, 2, 3, "array"]` &nbsp;&nbsp;&nbsp; `{ name: "Ansh" }` &nbsp;&nbsp;&nbsp; `new Date()`


---

```js
function findName() {
    
}
console.log(typeof(findName));
```

### Is code ka output javascript mai **function** aata hai 
---
 #                                     <h2 align="center">🚀 Tutorial No. 5</h2>


### JavaScript Type Conversion and Type Coercion

### 📜 This tutorial explains how JavaScript handles **type conversion** (manual) and **type coercion** (automatic). Below is the sample code and its detailed explanation.



#### Explanation
- **Type Conversion:**
  - `String(value)`: Converts value to 
  string.
  ---
  - `Number(value)`: Converts value to number. If not possible, returns `NaN`.
  ---
  - `.toString()`: Converts number/boolean/array to string.
  ---
  - `parseInt()`/`parseFloat()`: Converts string to integer/float.
  ---
  - `toFixed(2)`: Rounds number to 2 decimal places (returns string).
 
---
---
- **Examples:**
  - `String(34)` → "34" (string)

  - `Number("343d4")` → NaN
 
  - `Number(true)` → 1
  
  - `Number([1,2,3])` → NaN
 
  - `String([1,2,3])` → "1,2,3"
---
---
- **Type Coercion:**
  - When using `+` with string and number, number is automatically converted to string and concatenated.
 
  - Example: `"698" + 34` → "69834"
  ---
  - When using `+` with boolean  and number, boolean is automatically converted to number and perform addition.

  - Example: `true + 1` → 2
  ---
  - When using `-` with string and number, string is automatically converted to number and substract.

  - Example: `"5" - 2` → 3
---


**Summary:**
- JavaScript can convert data types explicitly (conversion) or implicitly (coercion).
- Use `typeof` to check the type after conversion.

---

 #                                     <h2 align="center">🚀 Tutorial No. 6</h2>
###  String Methods & Template Literals

### This tutorial demonstrates various JavaScript string operations and template literals. :

1. **Logging and Variables:**
   - Declares variables for a name and a greeting, then logs a combined greeting.

2. **String Concatenation:**
   - Creates an HTML string by concatenating heading and paragraph tags.



3. **String Methods:**
   - Shows how to access characters and use string methods:
     - `html = html.concat(' this ', 'str2'):` Adds the strings " this " and "str2" to the end of the html string. The result is stored back in html.
     - `console.log(html):` Prints the updated html string to the console.
     - `console.log(html.length):` Prints the total number of characters in the html string.
     - `console.log(html.toLowerCase()):` Prints the html string in all lowercase letters.
     - `console.log(html.toUpperCase()):` Prints the html string in all uppercase letters.
     - `html[1]`: Accesses the second character.
     - `indexOf('this')`: Finds the first occurrence of 'this'.
     - `lastIndexOf('<')`: Finds the last occurrence of '<'.
     - `charAt(3)`: Gets the character at index 3.
     - `endsWith('</p>')`: Checks if the string ends with '</p>'.
     - `includes('f')`: Checks if 'f' is present.
     - `substring(0,4)` and `slice(0, 4)`: Extracts a substring.
     - `split(' ')`: Splits the string into an array by spaces.
     - `replace('this', 'it')`: Replaces the first 'this' with 'it'.

4. **Template Literals:**
   - Demonstrates template literals for multi-line strings and variable interpolation.
   - Inserts variables (`name`, `fruit1`, `fruit2`) into an HTML template.
   - Sets the HTML content of the page using `document.body.innerHTML`.
   
   ```js 
   let myHtml = `Hello ${name}
             <h1> This is heading </h1>
             <p> You like ${fruit1} and 
             ${fruit2}        
             `;

   ```

This file is useful for learning about string maKnipulation and template literals in JavaScript.

---
 #                                     <h2 align="center">🚀 Tutorial No. 7</h2>
### Arrays and Objects in JavaScript

### This tutorial covers the basics of arrays and objects, along with common array methods and operations:

1. **Array Creation:**
   - Arrays are created using both array literals (e.g., `let marks = [34, 23, 24, 93, 73, 25];`) and the `Array` constructor (e.g., `const arr = new Array(23, 123, 21, 'Orange');`).
   - Arrays can store different data types, including numbers, strings, and even other arrays.

2. **Accessing and Modifying Arrays:**
   - Access elements by index (e.g., `fruits[1]` gives 'Apple').
   - Change values by assigning to an index (e.g., `arr[0] = 'Ansh';`).
   - Use `Array.isArray(arr)` to check if a variable is an array.
   - `arr.length` gives the number of elements in the array.
   - `marks.indexOf(73)` returns the index of the value 73 in the `marks` array.

3. **Array Methods (Mutating/Modifying):**
   - `push(value)`: Adds a value to the end.
   - `pop()`: Removes the last value.
   - `unshift(value)`: Adds a value to the start.
   - `shift()`: Removes the first value.
   - `splice(start, deleteCount)`: Removes elements from a specific index.
   - `reverse()`: Reverses the array.
   - `concat(array)`: Combines two arrays.

4. **Objects:**
   - Objects store key-value pairs :
   EX-
   ```js
    let myobj = {
       'first name': "Ansh",
        channel: 'webcode', 
        isActive: true, 
        marks: [1, 5, 3, 6] 
        }

    ```
   - Access properties using dot notation (`myobj.channel`) or bracket notation (`myobj['channel']`).

This tutorial is useful for understanding how to work with arrays and objects in JavaScript, including how to create, access, modify, and use common methods.

---
