try {
    console.log("This line will not be executed");
    throw new Error("An error occurred");
} catch (error) {
    console.error("Caught an error:", error.message);
    console.log("Stack trace:", error.stack);
    console.log("Error name:", error.name);
    console.log("Error toString:", error.toString());
    console.log("Error instanceof Error:", error instanceof Error);
    console.log("Error constructor:", error.constructor.name);
    console.log("Error is an instance of Error:", error instanceof Error);
    console.log("Error is an instance of TypeError:", error instanceof TypeError);
    console.log("Error is an instance of ReferenceError:", error instanceof ReferenceError);
    console.assert(error instanceof Error, "Error is not an instance of Error");
    console.log("Error is an instance of Error:", error instanceof Error);
}





//referenceError
try {
    console.log(nonExistentVariable);
} catch (error) {
    console.error("Caught a ReferenceError:", error.message);
    console.log("Stack trace:", error.stack);
    console.log("Error name:", error.name);
    console.log("Error toString:", error.toString());
    console.log("Error instanceof ReferenceError:", error instanceof ReferenceError);
    console.log("Error constructor:", error.constructor.name);
    console.log("Error is an instance of ReferenceError:", error instanceof ReferenceError);
    console.assert(error instanceof ReferenceError, "Error is not an instance of ReferenceError");
    console.log("Error is an instance of ReferenceError:", error instanceof ReferenceError);
}


//syntaxError   
const codeWithSyntaxError = "function test() { console.log('Hello'); "; // Missing closing brace
try {
    eval(codeWithSyntaxError);
} catch (error) {
    console.error("Caught a SyntaxError:", error.message);
    console.log("Stack trace:", error.stack);
    console.log("Error name:", error.name);
    console.log("Error toString:", error.toString());
    console.log("Error instanceof SyntaxError:", error instanceof SyntaxError);
    console.log("Error constructor:", error.constructor.name);
    console.log("Error is an instance of SyntaxError:", error instanceof SyntaxError);
    console.assert(error instanceof SyntaxError, "Error is not an instance of SyntaxError");
    console.log("Error is an instance of SyntaxError:", error instanceof SyntaxError);
}   

//typeError
try {
    const num = 42;
    num.toUpperCase(); // This will throw a TypeError
} catch (error) {
    console.error("Caught a TypeError:", error.message);
    console.log("Stack trace:", error.stack);
    console.log("Error name:", error.name);
    console.log("Error toString:", error.toString());
    console.log("Error instanceof TypeError:", error instanceof TypeError);
    console.log("Error constructor:", error.constructor.name);
    console.log("Error is an instance of TypeError:", error instanceof TypeError);
    console.assert(error instanceof TypeError, "Error is not an instance of TypeError");
    console.log("Error is an instance of TypeError:", error instanceof TypeError);
}   