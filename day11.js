const user = {
    name: "Amit",
    experience: 10
};

const json = JSON.stringify(user);

console.log(json);

// javascript object to json string 
const jsonString = '{"name":"Amit","experience":10}';

// json string to javascript object
const jsObject = JSON.parse(jsonString);

console.log(jsObject);  


//javascript object to json string
const jsonString2 = JSON.stringify(jsObject);

console.log(jsonString2);   

//javascript object vs json string
console.log(typeof jsObject);
console.log(typeof jsonString2);    