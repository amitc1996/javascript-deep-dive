// build tiny information cli       
const language = {
    name: "JavaScript",
    creator: "Brendan Eich",
    year: 1995,
    paradigm: "Multi-paradigm",
    typing: "Dynamic",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"  
}

console.log(`Language: ${language.name}`);  
console.log(`Creator: ${language.creator}`);  
console.log(`Year: ${language.year}`);  
console.log(`Paradigm: ${language.paradigm}`);  
console.log(`Typing: ${language.typing}`);  
console.log(`Website: ${language.website}`);

//check global object in nodejs and browser
if (typeof global !== 'undefined') {
    console.log('Running in Node.js');
} else if (typeof window !== 'undefined') {
    console.log('Running in Browser');
} else {
    console.log('Unknown environment');
}   


//browser glogal variable behavior
if (typeof window !== 'undefined') {
    window.myGlobalVar = 'Hello from the browser!';
    console.log(window.myGlobalVar); // Hello from the browser!
} else if (typeof global !== 'undefined') {
    global.myGlobalVar = 'Hello from Node.js!';
    console.log(global.myGlobalVar); // Hello from Node.js!
} else {
    console.log('Unknown environment');
}

//check built in objects
console.log('Built-in Objects:');
console.log(Array);
console.log(Object);
console.log(String);
console.log(Number);
console.log(Boolean);
console.log(Date);
console.log(Math);
console.log(JSON);
console.log(Promise);
console.log(Map);
console.log(Set);


//you may notice that all built-in objects are functions, so we can check their type using typeof operator
console.log(typeof Array);
console.log(typeof Object);
console.log(typeof Date);
console.log(typeof Math);


// primitive vs object types
const primitiveString = "Hello, World!";
const objectString = new String("Hello, World!");

console.log(typeof primitiveString); // string
console.log(typeof objectString); // object

console.log(primitiveString instanceof String); // false
console.log(objectString instanceof String); // true

// you can also check the prototype of built-in objects
console.log(Array.prototype);
console.log(Object.prototype);
console.log(String.prototype);
console.log(Number.prototype);  


//javascript is case sensitive, so variable names, function names, and keywords must be written in the correct case. For example, "var" is a keyword, but "Var" is not. 
const myVariable = 10;
const MyVariable = 20;

console.log(myVariable); // 10
console.log(MyVariable); // 20

//semicolon is optional in javascript, but it is recommended to use it to avoid potential issues with automatic semicolon insertion (ASI). For example, the following code will throw an error because ASI will insert a semicolon after the return statement, causing the function to return undefined instead of the expected value.
function myFunction() {
    return
    {
        name: "John"
    };
}

console.log(myFunction()); // undefined

//to avoid this issue, you can either put the opening brace on the same line as the return statement, or use a semicolon after the return statement.
function myFunctionFixed() {
    return {
        name: "John"
    };
}

console.log(myFunctionFixed()); // { name: 'John' }

//semicoln experiment
const a = 5
const b = 10
const c = a + b
console.log(c) // 15

//if you remove the semicolons, the code will still work, but it is not recommended to do so.   

