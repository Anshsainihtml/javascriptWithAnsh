// General Loops: for, while, do-while 
let a = 34;
a += 1;
a++;
console.log(a);

for(let i=0; i<10; i++){
    // console.log(i);
}

let j = 0;
while (j<10) {
    // console.log(j);
    j +=1;
}


b = 90;

do {
    console.log("Hii");
} while (a==b);

let arr = [2,5,6,4,2,3];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}


for (const key in obj) {
   console.log(`The ${key} of object is ${obj[key]}`);
   
}


let str = 'Rohan'

for (let element of str) {
    console.log(element);
    
}
