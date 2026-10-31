// strict mode
// "use strict";
// name = "John"; // This will cause an error because 'name' is not declared

//strict mode is inside a function or at the top of a script. It helps catch common coding mistakes and "unsafe" actions such as defining global variables. It also prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object). It disables features that are confusing or poorly thought out.
function myFunction() {
    "use strict";
    name = "John"; // This will cause an error because 'name' is not declared
}

// The 'this' keyword in strict mode behaves differently than in non-strict mode. In strict mode, 'this' remains at whatever it's set to when entering the execution context. It won't default to the global object.
function myFunction2() {
    "use strict";
    console.log(this); // undefined
}   


// check javascript version
console.log('JavaScript Version:');
console.log('ECMAScript 5:', typeof Object.create === 'function');
console.log('ECMAScript 6:', typeof Symbol === 'function');
console.log('ECMAScript 7:', typeof Array.prototype.includes === 'function');
console.log('ECMAScript 8:', typeof Object.values === 'function');
console.log('ECMAScript 9:', typeof Array.prototype.flat === 'function');
console.log('ECMAScript 10:', typeof Array.prototype.flatMap === 'function');   


//feature declaration vs feature expression
//function declaration
function myFunction3() {
    console.log('Hello from function declaration!');
}

//function expression
const myFunction4 = function() {
    console.log('Hello from function expression!');
};

//arrow function expression
const myFunction5 = () => {
    console.log('Hello from arrow function expression!');
};

myFunction3();
myFunction4();
myFunction5();  


//feature detection vs feature inference
//feature detection
if (typeof Symbol === 'function') {
    console.log('Symbol is supported!');
} else {
    console.log('Symbol is not supported!');
}

//feature inference
try {
    const sym = Symbol('test');
    console.log('Symbol is supported!');
} catch (e) {
    console.log('Symbol is not supported!');
}   


// if ("fetch" in window) {
//     console.log("Fetch API supported");
// } else {
//     console.log("Fetch API not supported");
// }

// if ("localStorage" in window) {
//     console.log("Local Storage supported");
// }

//typeof investigation
console.log('Typeof Investigation:');
console.log('typeof null:', typeof null); // object
console.log('typeof undefined:', typeof undefined); // undefined
console.log('typeof NaN:', typeof NaN); // number
console.log('typeof Infinity:', typeof Infinity); // number
console.log('typeof function:', typeof function() {}); // function
console.log('typeof array:', typeof []); // object
console.log('typeof object:', typeof {}); // object


const values = [10, 20, 30];

console.log(Array.isArray(values));


//instanceof investigation
console.log('Instanceof Investigation:');
console.log('values instanceof Array:', values instanceof Array); // true
console.log('values instanceof Object:', values instanceof Object); // true
console.log('values instanceof Function:', values instanceof Function); // false    


//prototype chain exploration
console.log('Prototype Chain Exploration:');
console.log('Object.getPrototypeOf(values):', Object.getPrototypeOf(values)); // Array.prototype
console.log('Object.getPrototypeOf(Object.getPrototypeOf(values)):', Object.getPrototypeOf(Object.getPrototypeOf(values))); // Object.prototype
console.log('Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(values))):', Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(values)))); // null       

//function is also an object in javascript, so we can check the prototype of a function
function myFunction6() {
    console.log('Hello from myFunction6!');
}

console.log('Prototype of myFunction6:', Object.getPrototypeOf(myFunction6)); // Function.prototype
console.log('Prototype of Function.prototype:', Object.getPrototypeOf(Function.prototype)); // Object.prototype
console.log('Prototype of Object.prototype:', Object.getPrototypeOf(Object.prototype)); // null