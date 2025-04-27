// different types of variables in TypeScript
let age:number = 10;
let firstName:string = "John";
let isActive:boolean = false;
let x:any = 'a';
x = 1; // any type can be changed to any type
let y:unknown = 1; // unknown type can be changed to any type
y = 'a'; // unknown type can be changed to any type

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}
let numArray = getArray<number>([1, 2, 3]);
let strArray = getArray<string>(["a", "b", "c"]);
let boolArray = getArray<boolean>([true, false, true]);
//numArray.push('a'); // error because numArray is of type number

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
// tuple array
let users: [number, string][]; 
users =  [
    [1, "John"],
    [2, "Jane"]
];

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
};

let emp: Employee ={
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

type messageOfType = string | number; // type alias
let message: messageOfType = "Hello";

// Inerface
interface UserInterface { // no = compared to class. also cnnnot be used with union types like class line 89
    readonly id: number,
    name?: string,
} 

let user1: UserInterface = {
    id: 1, 
    name: "John",
}
//user1.id = 2; // error because readonly

interface UserInterface2 extends UserInterface { // interface can extend other interface
    email: string,
}

// class
class Person{
    private id:number
    protected age:number
    name:string
    constructor(id:number, age:number, name:string){
        this.id = id;
        this.age = age;
        this.name = name;
    }

    register(){
        console.log("id: " + this.id + " and name "+ this.name + " is registered");
    }
}

const brad = new Person(1, 25, "Brad");
console.log(brad.register()); // Brad
//brad.id = 5; // error because private
//brad.age = 30; // error because protected

// Extending classes - sub classes
// class can extend only one class
class NewPerson extends Person {
    position: string;
    constructor(id:number, age:number, name:string, position:string){
        super(id, age, name); // call parent constructor
        this.position = position;
    }

    register(){
        console.log("id: this.id // id is private and will give error here" +  " and name "+ this.name + " is registered as " + this.position);
    }
}

// creating interface
// interface can extend other interface
interface EmailInterface {
    email: string,
}

// implementing interface in class
// class can implement multiple interfaces
class PersonWithEmail implements EmailInterface {
    private id:number
    protected age:number
    name:string
    email:string
    constructor(id:number, age:number, name:string, email:string){
        this.id = id;
        this.age = age;
        this.name = name;
        this.email = email;
    }

    register(){
        console.log("id: " + this.id + " and name "+ this.name + " is registered");
    }
}

//tupe assertion
let cid:any = 1;
let customerId = <number>cid; // type assertion
let customerId2 = cid as number; // type assertion

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
