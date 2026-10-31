//object method and this
const user = {
    name: "Amit",

    printName() {
        console.log(this.name);
    }
};

user.printName();