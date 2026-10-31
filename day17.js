const user1 = {
    name: "Amit"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);

// why both variables referencing the same object in memory

//object identity
const user3 = {
    name: "Amit"
};

const user4 = {
    name: "Amit"
};

console.log(user3 === user4); // false
console.log(user3.name === user4.name); // true

//object identity
const user5 = {
    name: "Amit"
};

const user6 = user5;

console.log(user5 === user6); // true
console.log(user5.name === user6.name); // true 