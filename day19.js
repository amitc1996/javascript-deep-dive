const fs = require("fs");

fs.writeFileSync(
    "hello.txt",
    "Hello from JavaScript"
);


//read file using node 
const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);  


//environment variables
console.log(process.env);
console.log(process.env.PATH);  

//environment detecting
if (process.env.NODE_ENV === "production") {
    console.log("Running in production mode");
} else {
    console.log("Running in development mode");
}   


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