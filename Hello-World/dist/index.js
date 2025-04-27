"use strict";
var _a, _b;
let age = 10;
let firstName = "John";
let isActive = false;
let x = 'a';
x = 1;
let y = 1;
y = 'a';
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(["a", "b", "c"]);
let boolArray = getArray([true, false, true]);
if (age < 50) {
    age += 10;
    console.log("You are still young");
}
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level = 1;
let numbers = [1, 2, 3];
numbers.forEach(n => n.valueOf());
let number_any = [];
number_any[0] = 1;
number_any[1] = "a";
let user = [1, "John"];
user[0].toString();
user[1].toUpperCase();
user.push(1);
let users;
users = [
    [1, "John"],
    [2, "Jane"]
];
var Size_default;
(function (Size_default) {
    Size_default[Size_default["Small"] = 0] = "Small";
    Size_default[Size_default["Medium"] = 1] = "Medium";
    Size_default[Size_default["Large"] = 2] = "Large";
})(Size_default || (Size_default = {}));
var Size_string;
(function (Size_string) {
    Size_string["Small"] = "s";
    Size_string["Medium"] = "m";
    Size_string["Large"] = "l";
})(Size_string || (Size_string = {}));
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10000, 2021));
let employee;
let emp = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1,
    name: "John",
    retire: (date) => {
        console.log(date);
    }
};
let message = "Hello";
let user1 = {
    id: 1,
    name: "John",
};
class Person {
    constructor(id, age, name) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
    register() {
        console.log("id: " + this.id + " and name " + this.name + " is registered");
    }
}
const brad = new Person(1, 25, "Brad");
console.log(brad.register());
class NewPerson extends Person {
    constructor(id, age, name, position) {
        super(id, age, name);
        this.position = position;
    }
    register() {
        console.log("id: this.id // id is private and will give error here" + " and name " + this.name + " is registered as " + this.position);
    }
}
class PersonWithEmail {
    constructor(id, age, name, email) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.email = email;
    }
    register() {
        console.log("id: " + this.id + " and name " + this.name + " is registered");
    }
}
let cid = 1;
let customerId = cid;
let customerId2 = cid;
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseFloat(weight) * 2.2;
    }
}
function render(widget) {
    widget.drag();
    {
        console.log("dragg  called from render");
    }
    widget.resize();
}
let textbox = {
    drag: () => {
        console.log("drag called");
    },
    resize: () => {
        console.log("resize called");
    }
};
render(textbox);
let textbox2;
let quantity = 100;
quantity = 50;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hello");
    }
}
greet(null);
greet(undefined);
greet("John");
greet("");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
customer = getCustomer(1);
console.log((_b = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear());
let arrays = [1, 2, 3];
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map