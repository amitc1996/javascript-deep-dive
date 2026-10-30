// console.log("Hello javascript");
// const name = "Javascript";
// console.log(`Hello ${name}`);
// console.log("JavaScript started in 1995");
// console.log("Created by Brendan Eich");
// console.log("JavaScript follows ECMAScript standards");

// console.log(typeof console);
// console.log(typeof Array);
// console.log(typeof Promise);

// console.log(typeof document);

// //browser vs nodejs
// //console.log(window);

// console.log(process.version);



// //ECMAScript 6 (ES6) features
// const user = "Amit";

// const message = `Welcome ${user}`;

// const greet = () => {
//     console.log(message);
// };

// greet();

// // DYNAMIC TYPING
// let value = 100;

// console.log(value);
// console.log(typeof value);

// value = "JavaScript";

// console.log(value);
// console.log(typeof value);

// value = true;

// console.log(value);
// console.log(typeof value);

// // JavaScript object and prototype
// const user1 = {
//     name: "Amit",
//     role: "Developer"
// };

// console.log(user);
// console.log(Object.getPrototypeOf(user1));
// console.log(user1.__proto__);
// console.log(user1.__proto__ === Object.prototype);
// console.log(Object.getPrototypeOf(user1) === Object.prototype);
// console.log(user1.__proto__.__proto__ === null);
// console.log(Object.getPrototypeOf(user1) === null);
// console.log(user1.__proto__.__proto__ === Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(user1) === Object.getPrototypeOf(Object.prototype));
// console.log(user1.__proto__.__proto__ === Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(user1) === Object.getPrototypeOf(Object.prototype));
// console.log(user1.__proto__.__proto__ === Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(user1) === Object.getPrototypeOf(Object.prototype));
// console.log(user1.__proto__.__proto__ === Object.getPrototypeOf(Object.prototype));


// //single threaded, non-blocking, asynchronous programming language
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside setTimeout");
// }, 0);

// console.log("End"); 

// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");   

// console.log("4");

// console.log("5");


// // Promise vs timer ( this is because promise is microtask and timer is macrotask) the output is most likely to be 1, 4, 3, 2 but it can be different in some cases because of the event loop and the order of execution of the tasks in the event loop.
// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("3");
// });

// console.log("4"); 

// //navigator object is available in the browser but not in nodejs
// //console.log(navigator.userAgent);

// //compare var,let,const
// var a = 10;
// var a = 20; // re-declaration is allowed
// console.log(a); // 20

// let b = 30;
// // let b = 40; // re-declaration is not allowed
// b = 50; // re-assignment is allowed
// console.log(b); // 50

// const c = 60;
// // const c = 70; // re-declaration is not allowed
// // c = 80; // re-assignment is not allowed
// console.log(c); // 60   


// var oldStyle = "ES5";
// let modernVariable = "ES6";
// const modernConstant = "ES6";
// console.log(oldStyle);
// console.log(modernVariable);
// console.log(modernConstant);






