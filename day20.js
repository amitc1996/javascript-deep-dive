function detectEnvironment() {

    if (
        typeof window !== "undefined"
    ) {
        return "Browser";
    }

    if (
        typeof process !== "undefined"
    ) {
        return "Node.js";
    }

    return "Unknown";
}

console.log(
    detectEnvironment()
);


const history = [
    {
        year: 1995,
        release: "JavaScript"
    },
    {
        year: 1997,
        release: "ES1"
    },
    {
        year: 2009,
        release: "ES5"
    },
    {
        year: 2015,
        release: "ES6"
    }
];

console.table(history);


//console.group() and console.groupEnd()
console.group("JavaScript History");
console.log("1995: JavaScript");
console.log("1997: ES1");
console.log("2009: ES5");
console.log("2015: ES6");
console.groupEnd();     