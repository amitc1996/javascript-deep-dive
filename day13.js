console.time("loop");

for (let i = 0; i < 1_000_000; i++) {
}

console.timeEnd("loop");


//performance.now() is a high-resolution timer that provides more precise timing information than Date.now(). It is part of the Performance API and is commonly used for measuring the time taken by specific operations or code blocks in web applications.
const start = performance.now();

for (let i = 0; i < 1_000_000; i++) {
}

const end = performance.now();
console.log(`Loop took ${end - start} milliseconds.`);