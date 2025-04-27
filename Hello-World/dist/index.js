"use strict";
var _a, _b;
let age = 10;
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
let employee = {
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