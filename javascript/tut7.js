console.log('We are in tut7.js and lets dicuss about arrays');

let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const  arr = new Array(23, 123, 21, 'Orange');
console.log(arr);
console.log(mixed);requestAnimationFrame
console.log(fruits[1]);

console.log(arr.length);

console.log(Array.isArray(arr));

arr[0] = 'Ansh';

let arrelement = arr[0];
console.log('element: ', arrelement);
console.log(arr);

let value = marks.indexOf(73)
console.log(value);

// Mutating or Modifying arrays
marks.push(64);
marks.pop();
marks.unshift(55);
marks.shift();
console.log(marks);
marks.splice(2, 3);
marks.reverse();

let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2);

console.log(marks);

let myobj = {
    'first name': "Ansh",
    channel: 'webcode',
    isActive: true,
    marks: [1, 5, 3, 6]
}

console.log(myobj);
console.log(myobj['channel']);
console.log(myobj.channel);













