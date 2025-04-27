// different types of variables in TypeScript
let age = 10;
if (age < 50)
{
    age+=10;
    console.log("You are still young");
}

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level: number = 1;

// array
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => n.valueOf());

let number_any = []; // number_any is an array that can hold any type of data
number_any[0] = 1;
number_any[1] = "a";

// tuple
let user: [number, string] = [1, "John"];
user[0].toString();
user[1].toUpperCase();
user.push(1); // This will cause an error because the tuple is fixed in size and type

// enum
enum Size_default { Small, Medium, Large } // 0, 1, 2
const enum Size { Small = 1, Medium, Large } // 1, 2, 3 and compiler will generate more optimized code
enum Size_string { Small = 's', Medium='m', Large='l' } // 's', 'm', 'l'
let mySize: Size = Size.Medium;
console.log(mySize); // 2

// function
function calculateTax(income: number, taxYear = 2023): number {
   // let x; // error because not used
   if (taxYear < 2022) 
    return income * 1.2;
    // undefined - by default if you don't return anything
    return  income * 1.3;
}

console.log(calculateTax(10_000, 2021)); // 12000

// object
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "John",
    retire: (date: Date) => {
        console.log(date);
    }
};
//employee.id=2; // error because readonly

// type alias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee2: Employee = {
    id: 1,
    name: "John",
    retire: (date: Date) => {
        console.log(date);
    }
};

// union type
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseFloat(weight) * 2.2;
    }
}

// intersection type
type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;

function render(widget: UIWidget) {
    widget.drag() 
    {
        console.log("dragg  called from render");
    }   
    widget.resize()    
}

let textbox: UIWidget = {
    drag: () => {
        console.log("drag called");
    },
    resize: () => {
        console.log("resize called");
    }
}
render(textbox);
let textbox2: UIWidget;
//render(textbox2); // error because textbox2 is not initialized

// literal types
type Quantity = 50 | 100 | 150;
let quantity: Quantity = 100;
quantity = 50; // ok
// quantity = 200; // error because 200 is not a valid value for Quantity

// null and undefined
function greet(name: string | null | undefined) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hello");
    }
}
greet(null); // Hello
greet(undefined); // Hello
greet("John"); // JOHN
greet(""); // Hello

// optional chaining
type Customer = {
    birthday?: Date
}
function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear()); // undefined
customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()); // 2025
// optional element access
let arrays = [1,2,3];
//arrays?[0] // undefined

let log: any = null;  // method
log?.("a"); // undefined
// optional call
