// function as values

function greet(){
    return "Hello, Amit!";
}

const greetFunction = greet;

console.log(greetFunction()); // Hello, World!

// function as arguments
function greetUser(name, greetFn){
    return greetFn(name);
}

function greetWithName(name){
    return `Hello, ${name}!`;
}

console.log(greetUser("Mohit", greetWithName)); // Hello, Alice!

// function as return values
function createGreeting(greetFn){
    return function(name){
        return greetFn(name);
    }
}

const greeting = createGreeting(greetWithName);

console.log(greeting("Sohit")); // Hello, Bob!



//pass function as argument to another function

function processUser(callback) {
    callback("rohan");
}

function greet(name) {
    console.log(`Hello ${name}`);
}

processUser(greet);


function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function double(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processArray(numbers, double);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]



//check this in browser console

console.log(this);