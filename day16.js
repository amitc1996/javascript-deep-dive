//stack overflow
function recursiveFunction() {
    return recursiveFunction();
}

try {
    recursiveFunction();
} catch (error) {
    console.error("Caught a RangeError:", error.message);
    console.log("Stack trace:", error.stack);
    console.log("Error name:", error.name);
    console.log("Error toString:", error.toString());
    console.log("Error instanceof RangeError:", error instanceof RangeError);
    console.log("Error constructor:", error.constructor.name);
    console.log("Error is an instance of RangeError:", error instanceof RangeError);
    console.assert(error instanceof RangeError, "Error is not an instance of RangeError");
    console.log("Error is an instance of RangeError:", error instanceof RangeError);
}   