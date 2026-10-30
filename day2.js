// modern javascript features       
const numbers = [1, 2, 3, 4, 5];

// using arrow function to double the numbers
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// using template literals
const name = 'John';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, John!

// using destructuring assignment
const person = { firstName: 'Jane', lastName: 'Doe' };
const { firstName, lastName } = person;
console.log(firstName); // Jane
console.log(lastName); // Doe

// using default parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!
console.log(greet('Alice')); // Hello, Alice!

// using spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// using rest parameters
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22

// using promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, 2000);
    });
};

fetchData()
    .then(data => console.log(data)) // Data fetched successfully!
    .catch(error => console.error(error));                      



// small run time detection program to check if the code is running in nodejs or browser
if (typeof window === 'undefined') {
    console.log('Running in Node.js');
} else {
    console.log('Running in Browser');
}       


// create javascrit history object to store the history of the pages visited in the browser
const history = {
    pages: [],
    addPage(page) {
        this.pages.push(page);
    },
    getHistory() {
        return this.pages;
    }
};

history.addPage('home.html');
history.addPage('about.html');
history.addPage('contact.html');

console.log(history.getHistory()); // ['home.html', 'about.html', 'contact.html']   

//create a javascript object to store the details of a user and print the details of the user in the console
const user = {
    name: 'John Doe',           
    age: 30,
    email: 'john.doe@example.com'
};

console.log(user.name); // John Doe
console.log(user.age); // 30
console.log(user.email); // john.doe@example.com

// create a javascript object to store the details of a product and print the details of the product in the console
const product = {
    name: 'Laptop',
    price: 999.99,
    brand: 'Dell'
};

console.log(product.name); // Laptop
console.log(product.price); // 999.99
console.log(product.brand); // Dell

// create a javascript object to store the details of a book and print the details of the book in the console
const book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925
};

console.log(book.title); // The Great Gatsby
console.log(book.author); // F. Scott Fitzgerald
console.log(book.year); // 1925

//create the javascript timeline object to store the details of the timeline and print the details of the timeline in the console
const timeline = {
    events: [],
    addEvent(event) {
        this.events.push(event);
    },
    getTimeline() {
        return this.events;
    }
};

timeline.addEvent({ year: 2000, event: 'Y2K' });
timeline.addEvent({ year: 2001, event: 'Wikipedia launched' });
timeline.addEvent({ year: 2004, event: 'Facebook launched' });

console.log(timeline.getTimeline()); 
// [{ year: 2000, event: 'Y2K' }, { year: 2001, event: 'Wikipedia launched' }, { year: 2004, event: 'Facebook launched' }]      



//type of null
console.log(typeof null); // object // this is a bug in javascript, null is not an object but it returns object when we use typeof operator on it

//type of undefined
console.log(typeof undefined); // undefined

//type of NaN
console.log(typeof NaN); // number

//type of Infinity
console.log(typeof Infinity); // number

//type of -Infinity
console.log(typeof -Infinity); // number

//type of Symbol
const sym = Symbol('foo');
console.log(typeof sym); // symbol

//type of BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // bigint   


