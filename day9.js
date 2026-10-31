const promise = new Promise((resolve) => {
    resolve("JavaScript Promise completed");
});

promise.then((result) => {
    console.log(result);
});

// Promise vs timer ( this is because promise is microtask and timer is macrotask) the output is most likely to be 1, 4, 3, 2 but it can be different in some cases because of the event loop and the order of execution of the tasks in the event loop.
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");