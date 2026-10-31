//observe call stack
function first() {
    second();
    console.log("first end");
}

function second() {
    third();
    console.log("second end");
}

function third() {
    console.log("third");
}

first();

//this gives the call stack of the functions called in the order they were called. The output will be:
// third
// second end
// first end    

