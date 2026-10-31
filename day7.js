//timer api
console.log("Start");

setTimeout(() => {
    console.log("Two seconds passed");
}, 2000);

console.log("End");



//interval api
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval cleared");
    }
}, 1000);   