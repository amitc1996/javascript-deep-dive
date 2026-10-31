//blocking javascript code
console.log("Start");

const start = Date.now();
while (Date.now() - start < 2000) {
    // blocking code for 2 seconds
}

console.log("End");



//non blocking timer api
console.log("Start");

setTimeout(() => {
    console.log("Timer completed");
}, 5000);

console.log("JavaScript can continue");

console.log("End");